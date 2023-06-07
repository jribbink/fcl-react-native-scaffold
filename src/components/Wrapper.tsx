import { View, StyleSheet } from "react-native";

export default function Wrapper({ children }: { children: any }) {
  const styles = StyleSheet.create({
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  });

  return <View style={styles.wrapper}>{children}</View>;
}
