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
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import styles from "./Cadastro.styles";

export default function Cadastro({ navigation }) {
  const [tipoConta, setTipoConta] = useState("tutor");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    if (tipoConta === "tutor") {
      navigation.navigate("HomeTutor");
    } else {
      navigation.navigate("HomeCuidador");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/patasEscuro.png")}
      style={styles.backgroundImage}
      resizeMode="repeat"
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Logo dentro do Círculo Branco */}
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
              <Text style={styles.title}>Crie sua conta</Text>
              <Text style={styles.subtitle}>
                Junte-se a nós!
              </Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.sectionLabel}>Eu sou um...</Text>

              <View style={styles.roleSelectorRow}>
                <TouchableOpacity
                  style={[
                    styles.roleCard,
                    tipoConta === "tutor" && styles.roleCardActiveTutor,
                  ]}
                  onPress={() => setTipoConta("tutor")}
                  activeOpacity={0.8}
                >
                  <Feather
                    name="user"
                    size={22}
                    color={tipoConta === "tutor" ? "#6C27FF" : "#888888"}
                  />
                  <Text
                    style={[
                      styles.roleTitle,
                      tipoConta === "tutor" && styles.roleTextActive,
                    ]}
                  >
                    Tutor
                  </Text>
                  <Text style={styles.roleSub}>Tenho um pet</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.roleCard,
                    tipoConta === "cuidador" && styles.roleCardActiveCuidador,
                  ]}
                  onPress={() => setTipoConta("cuidador")}
                  activeOpacity={0.8}
                >
                  <FontAwesome5
                    name="paw"
                    size={20}
                    color={tipoConta === "cuidador" ? "#E91E63" : "#888888"}
                  />
                  <Text
                    style={[
                      styles.roleTitle,
                      tipoConta === "cuidador" && styles.roleTextActive,
                    ]}
                  >
                    Cuidador
                  </Text>
                  <Text style={styles.roleSub}>Cuido de pets</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nome completo</Text>
                <View style={styles.inputWrapper}>
                  <Feather
                    name="user"
                    size={20}
                    color="#94A3B8"
                    style={styles.inputIcon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Seu nome"
                    placeholderTextColor="#94A3B8"
                    value={nome}
                    onChangeText={setNome}
                  />
                </View>
              </View>

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
                onPress={handleCadastro}
                activeOpacity={0.8}
              >
                <Text style={styles.btnPrimaryText}>Criar conta</Text>
                <Feather name="arrow-right" size={20} color="#1E1B4B" />
              </TouchableOpacity>

              <View style={styles.footerLinkContainer}>
                <Text style={styles.footerText}>Já tem conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.footerLinkBold}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}