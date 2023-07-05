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
    "accessNode.api": `http://${devHost}:8888`,

    // for DEEPLINK
    "discovery.wallet": `http://${devHost}:8701/fcl/authn`,
    "discovery.wallet.method": "MOBILE_BROWSER/DEEPLINK",

    // for POST/HTTP
    // "discovery.wallet": `http://${devHost}:8701/api/authn`,
    // "discovery.wallet.method": "HTTP/POST",

    "discovery.authn.endpoint": `http://${devHost}:8701/api/discovery`,
    "flow.network": "local",
  },
  testnet: {
    "accessNode.api": "https://access-testnet.onflow.org",
    "discovery.authn.endpoint":
      "https://fcl-discovery.onflow.org/api/testnet/authn",
    "flow.network": "testnet",
  },
  mainnet: {
    "accessNode.api": "https://access-mainnet-beta.onflow.org",
    "discovery.authn.endpoint":
      "https://fcl-discovery.onflow.org/api/mainnet/authn",
    "flow.network": "mainnet",
  },
};

export default { ...FLOW_CONFIG.base, ...FLOW_CONFIG[flowNetwork] };
