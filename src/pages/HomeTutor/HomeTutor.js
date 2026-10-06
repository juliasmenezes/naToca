import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./HomeTutor.styles";

export default function HomeTutor({ navigation }) {
  const cuidadores = [
    {
      id: "1",
      nome: "Florêncio Caxias",
      local: "Presidente Prudente - SP",
      preco: "R$ 65,00",
      imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600",
      numero: "#1",
    },
    {
      id: "2",
      nome: "Letícia Paiva",
      local: "Presidente Prudente - SP",
      preco: "R$ 100,00",
      imagem: "https://images.unsplash.com/photo-1534361960057-19889db98d18?q=80&w=600",
      numero: "#2",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com logo e botão de perfil */}
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

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Feather name="search" size={18} color="#999" />
        <TextInput
          placeholder="Procurando algo?"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Cuidadores:</Text>

        {cuidadores.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardImageArea}>
              <Image source={{ uri: item.imagem }} style={styles.cardImage} />
              
              <TouchableOpacity style={styles.favoriteButton}>
                <Ionicons name="heart" size={20} color="#E06287" />
              </TouchableOpacity>

              <View style={styles.badgeNumero}>
                <Text style={styles.badgeNumeroText}>{item.numero}</Text>
              </View>

              <View style={styles.overlayInfo}>
                <View>
                  <Text style={styles.cardNome}>{item.nome}</Text>
                  <Text style={styles.cardLocal}>{item.local}</Text>
                </View>
                <Text style={styles.cardPreco}>{item.preco}/dia</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Bar Funcional */}
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