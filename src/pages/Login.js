import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./Login.styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/patasEscuro.png")}
      style={{ flex: 1 }}
      resizeMode="repeat"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoCircleContainer}>
              <View style={styles.logoCircle}>
                <Image
                  source={require("../../assets/logo.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>Entrar</Text>
              <Text style={styles.subtitle}>
                Entre na sua conta para continuar
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="mail"
                    size={20}
                    color="#94A3B8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="seu@email.com"
                    placeholderTextColor="#94A3B8"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Senha</Text>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="lock"
                    size={20}
                    color="#94A3B8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="••••••••"
                    placeholderTextColor="#94A3B8"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => navigation?.navigate("HomeTutor")}
                activeOpacity={0.8}
              >
                <Text style={styles.btnPrimaryText}>Entrar</Text>
                <Feather name="arrow-right" size={20} color="#1E1B4B" />
              </TouchableOpacity>

              <View style={styles.footerLinkContainer}>
                <Text style={styles.footerText}>Não tem conta? </Text>
                <TouchableOpacity
                  onPress={() => navigation?.navigate("Cadastro")}
                >
                  <Text style={styles.footerLinkBold}>Cadastre-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}