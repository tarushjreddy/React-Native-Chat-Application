import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { auth } from "../firebase";
const Register_screen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [imageurl, setImageurl] = useState("");

  const register = () => {
    auth
      .createuserWithEailandPassword(email, password)
      .then((authUser) => {})
      .catch((error) => alert(error.message));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back",
      headerBackTitleStyle: { color: "white" },
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={{ padding: 30 }}>
        <Text>Create a Signal Account</Text>
        <Input
          autofocus
          placeholder="Full Name"
          type="text"
          value={name}
          onChange={(text) => {
            setName(text);
          }}
        />
        <Input
          autofocus
          placeholder="Email"
          type="email"
          value={email}
          onChange={(text) => {
            setEmail(text);
          }}
        />
        <Input
          autofocus
          placeholder="Password"
          type="password"
          value={password}
          secureTextEntry
          onChange={(text) => {
            setPassword(text);
          }}
        />
        <Input
          autofocus
          placeholder="Profile Picture (URL)"
          type="text"
          value={imageurl}
          onChange={(text) => {
            setImageurl(text);
          }}
        />
        <Button
          raised
          style={styles.button_pro}
          // onPress={register}
          title="Register"
        ></Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register_screen;

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  button_pro: {
    color: "white",
  },
});
