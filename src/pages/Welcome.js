import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";

import { styles } from "./Welcome.style";

export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ImageBackground
        source={require("../../assets/patas.png")}
        resizeMode="repeat"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.content}>

          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            Bem-vindo(a)!
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>

          <Text style={styles.smallText}>
            Já possui uma conta? Entre!
          </Text>

          <TouchableOpacity
            style={[styles.button, { marginTop: 25 }]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonText}>
              Cadastrar
            </Text>
          </TouchableOpacity>

          <Text style={styles.smallText}>
            Não possui conta? Crie agora!
          </Text>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}