import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./Perfil.styles";

export default function Perfil({ navigation }) {
  const meusPets = [
    {
      id: "1",
      nome: "Autoni",
      raca: "Pássaro",
      imagem: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=200",
    },
    {
      id: "2",
      nome: "Remy",
      raca: "Roedor",
      imagem: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=200",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar com botão de sair integrado */}
      <View style={styles.topBar}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logoHeader}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={styles.btnSairHeader}
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
          })}
        >
          <Feather name="log-out" size={18} color="#E06287" />
          <Text style={styles.btnSairHeaderText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Perfil</Text>

        {/* Header do Perfil */}
        <View style={styles.profileCard}>
          <FontAwesome name="user-circle" size={60} color="#7A33D4" />
          <Text style={styles.userName}>Josefa</Text>
          <Text style={styles.userLocation}>Cerquilho - SP</Text>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Agendamentos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Avaliações</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7 meses</Text>
              <Text style={styles.statLabel}>Usando NaToca</Text>
            </View>
          </View>
        </View>

        {/* Seção Meus Pets */}
        <Text style={styles.sectionTitle}>Meus pets</Text>
        <View style={styles.petsGrid}>
          {meusPets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Image source={{ uri: pet.imagem }} style={styles.petImage} />
              <Text style={styles.petNome}>{pet.nome}</Text>
              <Text style={styles.petRaca}>{pet.raca}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.btnAddPet}>
          <Text style={styles.btnAddPetText}>+ Cadastrar meu pet</Text>
        </TouchableOpacity>

        {/* Botão Secundário de Sair no final da página */}
        <TouchableOpacity
          style={styles.btnSairCard}
          onPress={() => navigation.reset({
            index: 0,
            routes: [{ name: "Welcome" }],
          })}
        >
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Bar */}
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