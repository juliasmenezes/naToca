import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import styles from "./Login.styles";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Campos incompletos", "Por favor, preencha o e-mail e a senha.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Por favor, digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha inválida", "A senha deve conter pelo menos 6 caracteres.");
      return;
    }

    navigation.navigate("Welcome");
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={require("../../assets/patasEscuro.png")}
          resizeMode="repeat"
          style={styles.background}
          imageStyle={styles.backgroundImage}
        />

        <View style={styles.logoArea}>
          <View style={styles.logoCircle}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.title}>Entrar</Text>

        <View style={styles.form}>
          <CustomInput
            label="Email:"
            placeholder="nome@aluno.senai.br"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <CustomInput
            label="Senha:"
            placeholder="********"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <CustomButton
            title="Entrar"
            onPress={handleLogin}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.footer}>
              Não possui conta?
              <Text style={styles.link}> Cadastre-se!</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}