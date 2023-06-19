import { registerRootComponent } from "expo";
import App from "./App";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import fclConfig from "./config/fcl-config";
import flowJSON from "../flow.json";

// This is a temporary workaround for a bug in React Native & should/will
// be removed from the scaffold when the bug is fixed upstream.
// See: https://github.com/onflow/fcl-js/issues/1692
// See: https://github.com/onflow/fcl-js/pull/1693
const _URL = globalThis.URL;
class URL extends _URL {
  constructor(url: string | URL, base: string | URL, ...args: any[]) {
    // @ts-ignore
    super(url, base, ...args);

    // @ts-ignore
    if (this._url && !url.endsWith("/") && this._url.endsWith("/")) {
      // @ts-ignore
      this._url = this._url.slice(0, -1);
    }
  }
}
globalThis.URL = URL;

// Configure FCL
fcl.config(fclConfig).load({ flowJSON });

// Start the app
registerRootComponent(App);
