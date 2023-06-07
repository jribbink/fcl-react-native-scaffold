import { Service } from "@onflow/typedefs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ServiceCard({
  service,
  onPress,
}: {
  service: Service;
  onPress: () => void;
}) {
  const provider: any = service.provider;
  const name = provider?.name || "Unknown";
  const icon = provider?.icon || "https://placekitten.com/200/200";

  const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
      backgroundColor: "lightgrey",
      alignItems: "center",
      justifyContent: "flex-start",
      shadowColor: "#000",
      width: "100%",
      padding: 10,
      borderRadius: 10,
    },
    icon: {
      width: 50,
      height: 50,
      borderRadius: 5,
      marginRight: 15,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
