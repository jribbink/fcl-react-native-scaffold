import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
import ServiceCard from "./components/ServiceCard";
import Wrapper from "./components/Wrapper";
import Auth from "./screens/Auth";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Core from "./screens/Core";

export default function App() {
  const user = useCurrentUser();

  return (
    <View style={{ backgroundColor: "#f0f0f0" }}>
      <SafeAreaView style={{ height: "100%" }}>
        {user?.loggedIn ? <Core /> : <Auth />}
      </SafeAreaView>
    </View>
  );
}
