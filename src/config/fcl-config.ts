import Constants from "expo-constants";

const devHost = Constants.expoConfig.extra?.devHost;
const flowNetwork = Constants.expoConfig.extra?.flowNetwork;
if (!flowNetwork) {
  throw new Error(
    "No Flow network specified! Please check you environment variables - are you sure you ran the correct NPM script?"
  );
} else if (
  flowNetwork !== "local" &&
  flowNetwork !== "testnet" &&
  flowNetwork !== "mainnet"
) {
  throw new Error(`Network "${flowNetwork}" is not supported!`);
}

const FLOW_CONFIG = {
  // This is the base configuration for FCL shared across all environments
  base: {
    "app.detail.title": "FCL React Native Scaffold",
    "app.detail.icon": "https://avatars.githubusercontent.com/u/62387156?v=4",
  },

  // These are the environment specific configurations for FCL
  local: {
    "accessNode.api": `http://localhost:8888`,
    "discovery.wallet": `http://${devHost}:3002/local/authn`,
    "discovery.authn.endpoint": `http://${devHost}:3002/api/local/authn`,
    "flow.network": "local",
  },
  testnet: {
    "accessNode.api": "https://access-testnet.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/api/testnet/authn",
    "discovery.authn.endpoint":
      "https://fcl-discovery.onflow.org/api/testnet/authn?discoveryType=API",
    "flow.network": "testnet",
  },
  mainnet: {
    "accessNode.api": "https://access-mainnet-beta.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/mainnet/authn",
    "flow.network": "mainnet",
  },
};

export default { ...FLOW_CONFIG.base, ...FLOW_CONFIG[flowNetwork] };
