import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { CurrentUser } from "@onflow/typedefs";
import { useEffect, useState } from "react";
import { useAccount } from "./useAccount";

export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const { account, error } = useAccount(user?.addr);

  useEffect(() => {
    // If account is invalid, make sure FCL is unauthenticated
    // This can happen if the dev wallet is restarted
    if (error) {
      fcl.unauthenticate();
    }
  }, [error]);

  useEffect(() => {
    const unsubscribe = fcl.currentUser().subscribe((user) => {
      if (user?.loggedIn) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return account;
}
