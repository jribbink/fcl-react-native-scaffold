import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { Button, Text, View } from "react-native";

export const FlowApp = () => {

  const [user, setUser] = useState({loggedIn: null})
  const [name, setName] = useState('')
  const [transactionStatus, setTransactionStatus] = useState(null) // NEW

  useEffect(() => fcl.currentUser.subscribe(setUser), [])

  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t) => [arg(user.addr, t.Address)]
    })

    setName(profile?.name ?? 'No Profile')
  }

  const initAccount = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile

        transaction {
          prepare(account: AuthAccount) {
            // Only initialize the account if it hasn't already been initialized
            if (!Profile.check(account.address)) {
              // This creates and stores the profile in the user's account
              account.save(<- Profile.new(), to: Profile.privatePath)

              // This creates the public capability that lets applications read the profile's info
              account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
            }
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50
    })

    const transaction = await fcl.tx(transactionId).onceSealed()
    console.log(transaction)
  }

  // NEW
  const executeTransaction = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile

        transaction(name: String) {
          prepare(account: AuthAccount) {
            account
              .borrow<&Profile.Base{Profile.Owner}>(from: Profile.privatePath)!
              .setName(name)
          }
        }
      `,
      args: (arg, t) => [arg("Flow Developer!", t.String)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50
    })

    fcl.tx(transactionId).subscribe(res => setTransactionStatus(res.status))
  }

  const AuthedState = () => {
    return (
      <View>
        <Text>Address: {user?.addr ?? "No Address"}</Text>
        <Text>Profile Name: {name ?? "--"}</Text>
        <Text>Transaction Status: {transactionStatus ?? "--"}</Text>
        <Button onPress={sendQuery} title="Send Query"/>
        <Button onPress={initAccount}title="Init Account"/>
        <Button onPress={executeTransaction}title="Execute Transaction"/>
        <Button onPress={fcl.unauthenticate}title="Log Out"/>
      </View>
    )
  }

  const UnauthenticatedState = () => {
    return (
      <View>
        <Button onPress={fcl.logIn} title="Log In"/>
        <Button onPress={fcl.signUp}title="Sign Up"/>
      </View>
    )
  }

  return (
    <View>
      <Text>Flow App</Text>
      {user.loggedIn
        ? <AuthedState />
        : <UnauthenticatedState />
      }
    </View>
  )
}