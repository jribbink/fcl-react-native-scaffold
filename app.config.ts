module.exports = ({ config }) => {
  // This will get the local IP address of the machine running the app
  // This is used to set the local environment for FCL
  const localIP = Object.values(require("os").networkInterfaces()).reduce(
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
      flowNetwork: process.env.FLOW_NETWORK,
      devHost: process.env.DEV_HOST || localIP,
    },
  };
};
