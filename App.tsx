import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Navigation } from "./src/navigation";

import Preload from "./src/screens/Preload";

import { store, persistor } from "./src/redux/store";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Preload />} persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
