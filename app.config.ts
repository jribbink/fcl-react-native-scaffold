module.exports = ({ config }) => {
  const flowNetwork = process.env.FLOW_NETWORK;
  if (!flowNetwork) {
    /*throw new Error(
      "No Flow network specified! Please check you environment variables - are you sure you ran the correct start/build script?"
    );*/
    // TODO: Move this to inside the app
  } else if (
    flowNetwork !== "local" &&
    flowNetwork !== "testnet" &&
    flowNetwork !== "mainnet"
  ) {
    throw new Error(`Network "${flowNetwork}" is not supported!`);
  }

  // Get host of dev environment
  const devHost = Object.values(require("os").networkInterfaces()).reduce(
    (r: any[], list: any[]) =>
      r.concat(
        list.reduce(
          (rr, i) =>
            rr.concat((i.family === "IPv4" && !i.internal && i.address) || []),
          []
        )
      ),
    []
  )[0] as string;

  return {
    ...config,
    extra: {
      ...config.extra,
      flowNetwork,
      devHost,
    },
  };
};
