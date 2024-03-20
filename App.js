import { StatusBar } from "expo-status-bar";
import { AppRegistry, Text, View } from "react-native";
import { name as appName } from "./app.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00796B",
    accent: "#FDD835",
    background: "#F4F4F4",
    surface: "#FFFFFF",
    text: "#212121",
    secondaryText: "#727272",
    disabled: DefaultTheme.colors.grey600,
    placeholder: DefaultTheme.colors.grey600,
    backdrop: DefaultTheme.colors.grey900,
    notification: "#FFAB40",
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "normal",
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "medium",
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "300",
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "100",
    },
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
