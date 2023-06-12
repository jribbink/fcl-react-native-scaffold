import { registerRootComponent } from "expo";
import App from "./App";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import fclConfig from "./config/fcl-config";
import flowJSON from "../flow.json";

// Configure FCL
fcl.config(fclConfig).load({ flowJSON });

// Start the app
registerRootComponent(App);
