module.exports = ({ config }) => {
  const flowNetwork = process.env.FLOW_NETWORK;
  if (!flowNetwork) {
    throw new Error(
      "No Flow network specified! Please check you environment variables - are you sure you ran the correct start/build script?"
    );
  } else if (
    flowNetwork !== "local" &&
    flowNetwork !== "testnet" &&
    flowNetwork !== "mainnet"
  ) {
    throw new Error(`Network "${flowNetwork}" is not supported!`);
  }

  return {
    ...config,
    extra: {
      ...config.extra,
      flowNetwork: process.env.FLOW_NETWORK,
    },
  };
};
