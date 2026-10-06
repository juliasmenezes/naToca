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
import styles from "./Cadastro.styles";

export default function Cadastro({ navigation }) {
  const [tipoPerfil, setTipoPerfil] = useState("Tutor"); // "Tutor" ou "Cuidador"
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

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

            <Text style={styles.title}>Cadastrar</Text>

            {/* Toggle Tutor / Cuidador com textos e cores dinâmicas */}
            <View style={styles.toggleContainer}>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  tipoPerfil === "Tutor" && styles.toggleButtonActive,
                ]}
                onPress={() => setTipoPerfil("Tutor")}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.toggleTextBold,
                    tipoPerfil === "Tutor"
                      ? styles.toggleTextActive
                      : styles.toggleTextInactive,
                  ]}
                >
                  Tutor
                </Text>
                <Text
                  style={[
                    styles.toggleSubText,
                    tipoPerfil === "Tutor"
                      ? styles.toggleSubTextActive
                      : styles.toggleSubTextInactive,
                  ]}
                >
                  Sou dono de pet(s)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  tipoPerfil === "Cuidador" && styles.toggleButtonActive,
                ]}
                onPress={() => setTipoPerfil("Cuidador")}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.toggleTextBold,
                    tipoPerfil === "Cuidador"
                      ? styles.toggleTextActive
                      : styles.toggleTextInactive,
                  ]}
                >
                  Cuidador
                </Text>
                <Text
                  style={[
                    styles.toggleSubText,
                    tipoPerfil === "Cuidador"
                      ? styles.toggleSubTextActive
                      : styles.toggleSubTextInactive,
                  ]}
                >
                  Sou cuidador de pet(s)
                </Text>
              </TouchableOpacity>
            </View>

            {/* Card com os formulários */}
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

              <CustomInput
                label="Confirmar senha:"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                placeholder="••••••••"
                secureTextEntry
              />

              <CustomButton
                title="Cadastrar"
                onPress={() =>
                  navigation?.navigate(
                    tipoPerfil === "Tutor" ? "HomeTutor" : "HomeCuidador"
                  )
                }
              />

              <TouchableOpacity
                style={styles.loginLink}
                onPress={() => navigation?.navigate("Login")}
              >
                <Text style={styles.loginLinkText}>
                  Já possui uma conta? Entre!
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}