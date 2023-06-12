import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useState } from "react";
import { useAccount } from "../hooks/useAccount";
import { CompositeSignature } from "@onflow/typedefs";
import getFoo from "../../cadence/scripts/get-foo.cdc";

export default function Core() {
  const user = useCurrentUser();
  const account = useAccount(user?.addr);
  const [modalVisible, setModalVisible] = useState(false);

  const styles = StyleSheet.create({
    scrollView: {
      padding: 20,
      flex: 1,
      flexDirection: "column",
    },
    textInput: {
      width: "100%",
      height: 40,
      marginBottom: 10,
      borderColor: "white",
      borderWidth: 1,
      borderRadius: 5,
    },
    button: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 15,
      borderRadius: 10,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 300,
    },
    buttonModal: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonCancel: {
      backgroundColor: "red",
    },
    buttonSend: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight: "bold",
    },
  });

  const [value, onChangeText] = useState("Useless Placeholder");

  console.log(getFoo);

  const commands = [
    {
      name: "Execute Transaction",
      onPress: () => setModalVisible(true),
    },
    {
      name: "Execute Script",
      onPress: () =>
        fcl
          .query({ cadence: getFoo })
          .then((res) =>
            Alert.alert("Script executed", `The value of foo is ${res}`)
          ),
    },
    {
      name: "Sign User Message",
      onPress: () =>
        fcl.currentUser
          .signUserMessage("12345678")
          .then((signatures: CompositeSignature[]) => {
            Alert.alert(
              "User Signature Success",
              signatures
                .map(
                  (sig) =>
                    `addr: ${sig.addr}, keyId: ${sig.keyId}, message: 0x12345678\n\n${sig.signature}`
                )
                .join("\n\n")
            );
          })
          .catch((err) => {
            Alert.alert("User Signature Failed");
          }),
    },
    {
      name: "Get Latest Block",
      onPress: () =>
        fcl
          .block()
          .then((block) => Alert.alert("Block", JSON.stringify(block))),
    },
    {
      name: "Log Out",
      onPress: () => fcl.unauthenticate(),
    },
  ];

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            backgroundColor: "white",
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "bold" }}>
            Your Account
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14 }}>Address</Text>
            <Text style={{ fontSize: 14 }}>{user?.addr}</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14 }}>Balance</Text>
            <Text style={{ fontSize: 14 }}>
              {account ? `${account.balance / 10 ** 8} FLOW` : "Loading..."}
            </Text>
          </View>
        </View>

        <View style={{ gap: 10, marginTop: 10 }}>
          {commands.map((command) => (
            <TouchableOpacity
              key={command.name}
              onPress={command.onPress}
              style={styles.button}
            >
              <Text style={{ fontSize: 16 }}>{command.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>What to set HelloWorld.foo to?</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Pressable
                style={[styles.buttonModal, styles.buttonCancel, { flex: 1 }]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonModal, styles.buttonSend, { flex: 1 }]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Send TX</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
