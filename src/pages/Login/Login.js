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
  ScrollView,
  StatusBar,
} from "react-native";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./Login.styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <ImageBackground
      source={require("../../../assets/patasEscuro.png")}
      style={styles.backgroundImage}
      resizeMode="repeat"
    >
      <StatusBar barStyle="light-content" backgroundColor="#7A33D4" />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <Image
                  source={require("../../../assets/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Text style={styles.title}>Entrar</Text>

            <View style={styles.card}>
              <CustomInput
                label="Email:"
                value={email}
                onChangeText={setEmail}
                placeholder="exemplo@email.com"
                keyboardType="email-address"
              />

              <CustomInput
                label="Senha:"
                value={senha}
                onChangeText={setSenha}
                placeholder="••••••••"
                secureTextEntry
              />

              <CustomButton
                title="Entrar"
                onPress={() => navigation?.navigate("HomeTutor")}
              />

              <TouchableOpacity style={styles.forgotPassButton}>
                <Text style={styles.forgotPassText}>Não possui conta? Crie agora!</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}