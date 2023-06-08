import Constants from "expo-constants";
import { Platform } from "react-native";

const localhost = Platform.OS === "ios" ? "localhost:8080" : "10.0.2.2:8080";

const configs = {
  base: {
    "app.detail.title": "FCL React Native Scaffold",
    "app.detail.icon": "https://avatars.githubusercontent.com/u/62387156?v=4",
  },
  local: {
    "accessNode.api": `http://${localhost}:8888`,
    "flow.network": "https://fcl-discovery.onflow.org/local/authn",
  },
  testnet: {
    "accessNode.api": "https://access-testnet.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
    "flow.network": "testnet",
  },
  mainnet: {
    "accessNode.api": "https://access-mainnet-beta.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/mainnet/authn",
    "flow.network": "mainnet",
  },
};

const getFclConfig = (
  flowNetwork = Constants.expoConfig.extra?.flowNetwork
) => {
  return { ...configs.base, ...configs[flowNetwork] };
};

const environment = getFclConfig();
export default environment;
