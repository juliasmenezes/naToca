import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "./Mensagens.styles";

const CONVERSAS = [
  {
    id: "1",
    nome: "Letícia Paiva",
    tags: ["Mês fev", "Em andamento", "Passeio"],
    avatar: "https://images.unsplash.com/photo-1534361960057-19889db98d18?q=80&w=200",
    data: "Fev 2023",
  },
  {
    id: "2",
    nome: "Gabi de Moraes",
    tags: [],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    data: "Fev 2023",
  },
];

export default function Mensagens({ navigation }) {
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

      <View style={styles.content}>
        <Text style={styles.title}>Mensagens</Text>

        <FlatList
          data={CONVERSAS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.chatCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.chatInfo}>
                <Text style={styles.chatNome}>{item.nome}</Text>
                <View style={styles.tagsRow}>
                  {item.tags.map((tag, idx) => (
                    <View key={idx} style={styles.tagBadge}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <Text style={styles.chatData}>{item.data}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

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