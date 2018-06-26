import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Config from "react-native-config";

export default class App extends Component {
  componentDidMount() {
    console.log("Config : ", Config);
  }

  static navigationOptions = {
    header: {
      visible: false
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{
            uri:
              "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
          }}
        />
        <Text style={styles.welcome}>AWS Lite App</Text>
        <Text style={styles.welcomeSubtext}>
          An App with essentials of AWS Console.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 2,
    color: "#23303d"
  },
  welcomeSubtext: {
    fontSize: 12,
    textAlign: "center",
    margin: 4,
    color: "#23303d"
  },
  instructions: {
    textAlign: "center",
    color: "#23303d",
    marginBottom: 5
  }
});
