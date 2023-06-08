import { registerRootComponent } from "expo";
import App from "./App";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import fclConfig from "./config/fcl-config";
import flowJson from "../flow.json";

// Configure FCL
fcl.config(fclConfig).load(flowJson);

// Start the app
registerRootComponent(App);
