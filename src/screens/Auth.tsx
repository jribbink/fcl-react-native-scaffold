import { View, Text, StyleSheet } from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import ServiceCard from "../components/ServiceCard";
import Wrapper from "../components/Wrapper";

export default function Auth() {
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      alignItems: "center",
    },
    heading: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 16,
      marginBottom: 25,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Authentication</Text>
      <Text style={styles.subHeading}>Please choose a wallet to continue</Text>
      <fcl.ServiceDiscovery
        fcl={fcl}
        Loading={Loading}
        Empty={Empty}
        ServiceCard={ServiceCard}
        Wrapper={Wrapper}
      />
    </View>
  );
}
