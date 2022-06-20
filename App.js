import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Navigator from "./src/navigation/Navigator";
import { store } from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
