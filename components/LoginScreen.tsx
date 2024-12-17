import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const { login } = useAuth(); // Access the login function

  const handleLogin = () => {
    login(); // Set userToken and update state
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
