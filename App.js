import * as React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <Text 
        style={{
          color: "white",
          fontSize: "30px"
        }}
      >Universal React with Expo!</Text>
    </View>
  );
}
