import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

//automatically pulls from index file if we do not specify
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="Tech Stack App" />
        <Text>YYEEEE</Text>
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
