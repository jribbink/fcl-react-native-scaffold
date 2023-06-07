import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Modal,
  SafeAreaView,
} from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useEffect, useState } from "react";
import { useAccount } from "../hooks/useAccount";

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
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}
          >
            <Text style={{ fontSize: 16 }}>Execute Transaction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => fcl.query({ cadence: "foo.cdc", args: [] })}
            style={styles.button}
          >
            <Text style={{ fontSize: 16 }}>Execute Script</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => fcl.query({ cadence: "foo.cdc", args: [] })}
            style={styles.button}
          >
            <Text style={{ fontSize: 16 }}>Sign User Message</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => fcl.query({ cadence: "foo.cdc", args: [] })}
            style={styles.button}
          >
            <Text style={{ fontSize: 16 }}>Get Latest Block</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => fcl.unauthenticate()}
            style={styles.button}
          >
            <Text style={{ fontSize: 16 }}>Log Out</Text>
          </TouchableOpacity>
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
