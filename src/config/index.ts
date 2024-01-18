import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
export { publicRuntimeConfig, serverRuntimeConfig };
