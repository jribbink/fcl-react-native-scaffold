import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useState } from "react";

export default function Core() {
  const account = useCurrentUser();

  const styles = StyleSheet.create({
    scrollView: {
      padding: 20,
      flex: 1,
      flexDirection: "column",
    },
    button: {
      marginTop: 20,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "lightgrey",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  const [value, onChangeText] = useState("Useless Placeholder");

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>Account: {account?.addr}!</Text>

      <TouchableOpacity
        onPress={() => fcl.unauthenticate()}
        style={{ ...styles.button, marginTop: "auto" }}
      >
        <Text>Send Transaction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => fcl.unauthenticate()}
        style={{ ...styles.button, marginTop: "auto" }}
      >
        <Text>Execute Script</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => fcl.unauthenticate()}
        style={{ ...styles.button, marginTop: "auto" }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
