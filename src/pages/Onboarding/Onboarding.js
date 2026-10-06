import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const SLIDES = [
  {
    id: "1",
    title: "Viaje tranquilo.",
    highlight: "Seu pet fica NaToca.",
    subtitle: "",
  },
  {
    id: "2",
    title: "Busque cuidadores",
    subtitle: "Encontre cuidadores na sua região com filtros de serviço, preço e avaliação.",
  },
  {
    id: "3",
    title: "Agende o serviço",
    subtitle: "Escolha as datas, selecione seu pet e solicite o serviço diretamente no app.",
  },
  {
    id: "4",
    title: "Acompanhe tudo",
    subtitle: "Receba fotos e atualizações do seu pet em tempo real durante o serviço.",
  },
];

export default function Onboarding({ navigation }) {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      navigation.replace("Welcome");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Caminho ajustado para subir 3 níveis até a raiz de assets */}
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.textGroup} onPress={handleNext} activeOpacity={0.8}>
          <Text style={styles.title}>{SLIDES[step].title}</Text>
          {SLIDES[step].highlight ? (
            <Text style={styles.highlight}>{SLIDES[step].highlight}</Text>
          ) : null}
          {SLIDES[step].subtitle ? (
            <Text style={styles.subtitle}>{SLIDES[step].subtitle}</Text>
          ) : null}
        </TouchableOpacity>

        <View style={styles.dotsContainer}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === step ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => navigation.replace("Welcome")}>
          <Text style={styles.pularText}>Pular</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  logo: {
    width: 180,
    height: 120,
    marginBottom: 40,
  },
  textGroup: {
    alignItems: "center",
    minHeight: 120,
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E06287",
    textAlign: "center",
  },
  highlight: {
    fontSize: 14,
    color: "#7A33D4",
    fontWeight: "bold",
    marginTop: 6,
  },
  subtitle: {
    fontSize: 13,
    color: "#666666",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 18,
  },
  dotsContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#7A33D4",
    width: 18,
  },
  inactiveDot: {
    backgroundColor: "#DDD6FE",
    width: 8,
  },
  pularText: {
    color: "#7A33D4",
    fontSize: 12,
    fontWeight: "600",
  },
});