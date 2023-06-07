import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { Path, Svg } from "react-native-svg";
import Loading from "../components/Loading";
import Empty from "../components/Empty";
import ServiceCard from "../components/ServiceCard";
import Wrapper from "../components/Wrapper";

export default function Auth() {
  const styles = StyleSheet.create({
    scrollView: {
      flexDirection: "column",
    },
    scrollViewContent: {
      padding: 30,
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
    heading: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subHeading: {
      fontSize: 16,
      marginBottom: 10,
      lineHeight: 24,
    },
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      <Text
        style={styles.heading}
        numberOfLines={2}
        adjustsFontSizeToFit={true}
      >
        Welcome to the FCL React Native Scaffold 👋
      </Text>
      <Text style={styles.subHeading}>Please choose a wallet to continue</Text>
      <fcl.ServiceDiscovery
        fcl={fcl}
        Loading={Loading}
        Empty={Empty}
        ServiceCard={ServiceCard}
        Wrapper={Wrapper}
      />

      <ResourcesView />
    </ScrollView>
  );
}

function ListItem({
  heading,
  subHeading,
  icon,
  onPress,
}: {
  heading: string;
  subHeading: string;
  icon: any;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 1,
        height: 100,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        alignItems: "center",
        backgroundColor: "lightgrey",
      }}
      onPress={onPress}
    >
      <Image
        source={{ uri: icon }}
        style={{ width: 60, height: 60, borderRadius: 5, marginRight: 10 }}
      />

      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{ fontSize: 20, fontWeight: "500", paddingBottom: 10 }}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {heading}
        </Text>
        <Text
          style={{ fontSize: 14, fontWeight: "500" }}
          adjustsFontSizeToFit={true}
          numberOfLines={1}
        >
          {subHeading}
        </Text>
      </View>

      <Svg
        width={60}
        height={60}
        viewBox="0 0 80 512"
        style={{ marginRight: 10 }}
      >
        <Path
          fill="black"
          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
        />
      </Svg>
    </TouchableOpacity>
  );
}

function ResourcesView() {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Getting started resources 📚
      </Text>

      <ListItem
        heading="FCL Native Quickstart"
        subHeading="Get up and running in minutes"
        icon="https://placekitten.com/200/200"
        onPress={() => Linking.openURL("https://")}
      ></ListItem>

      <ListItem
        heading="FCL docs"
        subHeading="View the documentation for FCL"
        icon="https://placekitten.com/200/200"
        onPress={() =>
          Linking.openURL(
            "https://github.com/jribbink/fcl-react-native-scaffold/"
          )
        }
      ></ListItem>

      <ListItem
        heading="Scaffold Repo"
        subHeading="View the source code"
        icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6IiBmaWxsPSIjMjQyOTJmIi8+PC9zdmc+"
        onPress={() =>
          Linking.openURL(
            "https://github.com/jribbink/fcl-react-native-scaffold/"
          )
        }
      ></ListItem>
    </View>
  );
}
