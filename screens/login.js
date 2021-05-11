import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
const Login = ({ navigation }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function signIn() {
    console.log();
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={{
          uri:
            "https://pbs.twimg.com/profile_images/1250706773876539392/pjYNbofy.jpg",
        }}
        style={{ height: 100, width: 100, margin: 10, borderRadius: 50 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          label="Email"
          value={email}
          onChangeText={(text) => setemail(text)}
          autofocus
          type="email"
        ></Input>
        <Input
          placeholder="Password"
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
          type="password"
        ></Input>
        <Button style={styles.button_pro} onPress={signIn} title="Login">
          Submit
        </Button>
        <Button
          type="outline"
          style={styles.button_pro}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ height: 100 }} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {},
  mainContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
  button_pro: {
    color: "white",
  },
});
