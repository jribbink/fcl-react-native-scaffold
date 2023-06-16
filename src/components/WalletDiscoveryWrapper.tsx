import { View } from "react-native";

export default function WalletDiscoveryWrapper({
  children,
}: {
  children: any;
}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {children}
    </View>
  );
}
