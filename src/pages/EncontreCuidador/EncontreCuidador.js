import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./EncontreCuidador.styles";

export default function EncontreCuidador({ navigation }) {
  const [petSelecionado, setPetSelecionado] = useState("Cachorro");
  const [servicoSelecionado, setServicoSelecionado] = useState("Hospedagem");

  const pets = ["Cachorro", "Gato", "Pássaro", "Roedor"];
  const servicos = ["Domicílio", "Hospedagem"];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar */}
      <View style={styles.topBar}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoHeader}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.profileIcon}
          onPress={() => navigation.navigate("Perfil")}
        >
          <FontAwesome name="user-circle" size={26} color="#E06287" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroBanner}>
          <Text style={styles.heroTitle}>Encontre o cuidador ideal!</Text>
          <Feather name="heart" size={22} color="#E06287" style={styles.heartIcon} />
        </View>

        <View style={styles.filterCard}>
          <Text style={styles.sectionTitle}>Selecione os filtros</Text>

          {/* Cuidador para */}
          <Text style={styles.filterLabel}>Cuidador para:</Text>
          <View style={styles.optionsGrid}>
            {pets.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chipOption,
                  petSelecionado === item && styles.chipOptionActive,
                ]}
                onPress={() => setPetSelecionado(item)}
              >
                <Text
                  style={[
                    styles.chipText,
                    petSelecionado === item && styles.chipTextActive,
                  ]}
                >
                  • {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tipo de Serviço */}
          <Text style={styles.filterLabel}>Tipo de serviço:</Text>
          <View style={styles.optionsGrid}>
            {servicos.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.chipOption,
                  servicoSelecionado === item && styles.chipOptionActive,
                ]}
                onPress={() => setServicoSelecionado(item)}
              >
                <Text
                  style={[
                    styles.chipText,
                    servicoSelecionado === item && styles.chipTextActive,
                  ]}
                >
                  • {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.btnEncontrar}
            onPress={() => navigation.navigate("HomeTutor")}
          >
            <Text style={styles.btnEncontrarText}>Encontrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("HomeTutor")}
        >
          <Feather name="search" size={20} color="#FFF" />
          <Text style={styles.tabText}>Procurar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("EncontreCuidador")}
        >
          <Feather name="heart" size={20} color="#FFF" />
          <Text style={styles.tabText}>Encontrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Mensagens")}
        >
          <Feather name="message-square" size={20} color="#FFF" />
          <Text style={styles.tabText}>Mensagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Feather name="user" size={20} color="#FFF" />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}