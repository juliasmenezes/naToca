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

import styles from "./Cadastro.styles";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Cadastro({ navigation }) {
  const [tipo, setTipo] = useState("Tutor");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleCadastro() {
    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      Alert.alert("Campos incompletos", "Por favor, preencha todos os campos do formulário.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Por favor, insira um endereço de e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Senha fraca", "A senha deve conter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Senhas divergentes", "A confirmação de senha não confere com a senha digitada.");
      return;
    }

    Alert.alert("Parabéns!", "Conta criada com sucesso!", [
      {
        text: "Ir para o login",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
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

        <Text style={styles.title}>Cadastrar</Text>

        <View style={styles.tipoContainer}>
          <TouchableOpacity
            style={[
              styles.tipoButton,
              tipo === "Tutor" && styles.tipoSelecionado,
            ]}
            onPress={() => setTipo("Tutor")}
          >
            <Text
              style={[
                styles.tipoTexto,
                tipo === "Tutor" && styles.tipoTextoSelecionado,
              ]}
            >
              Tutor
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tipoButton,
              tipo === "Cuidador" && styles.tipoSelecionado,
            ]}
            onPress={() => setTipo("Cuidador")}
          >
            <Text
              style={[
                styles.tipoTexto,
                tipo === "Cuidador" && styles.tipoTextoSelecionado,
              ]}
            >
              Cuidador
            </Text>
          </TouchableOpacity>
        </View>

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

          <CustomInput
            label="Confirmar senha:"
            placeholder="********"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <CustomButton
            title="Cadastrar"
            onPress={handleCadastro}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.footer}>
              Já possui conta?
              <Text style={styles.link}> Entrar</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}