import { registerRootComponent } from "expo";
import App from "./App";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { fclConfig } from "./environments/environment";

// Configure FCL
fcl.config(fclConfig);

// Start the app
registerRootComponent(App);
