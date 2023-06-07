import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
import ServiceCard from "./components/ServiceCard";
import Wrapper from "./components/Wrapper";
import Auth from "./screens/Auth";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Core from "./screens/Core";

export default function App() {
  const { services, isLoading, authenticateService } = fcl.useServiceDiscovery({
    fcl,
  });

  const user = useCurrentUser();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {user?.loggedIn ? <Core /> : <Auth />}
    </SafeAreaView>
  );
}
