import { SafeAreaView, View } from "react-native";
import Auth from "./screens/Auth";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Core from "./screens/Core";

export default function App() {
  // Determine whether user is logged in
  // If logged in, display app core
  // If not logged in, display auth screen
  const isLoggedIn = useCurrentUser()!!;

  return (
    <View style={{ backgroundColor: "#f0f0f0" }}>
      <SafeAreaView style={{ height: "100%" }}>
        {isLoggedIn ? <Core /> : <Auth />}
      </SafeAreaView>
    </View>
  );
}
