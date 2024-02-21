import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";
import TabNavigator from "./src/navigation/TabNavigator";


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <TabNavigator />
}