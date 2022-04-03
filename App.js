import React from 'react';
import { Text, View } from 'react-native';
const HelloWorldApp = () => {
 const x = "Hello world"
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color:"blue"
      }}>
      <Text>Hello, 
        {x}</Text>
    </View>
  )
}
export default HelloWorldApp; 