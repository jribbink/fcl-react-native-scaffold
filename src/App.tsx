import { SafeAreaView, View } from "react-native";
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
