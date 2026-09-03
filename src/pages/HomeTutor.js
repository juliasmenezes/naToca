import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./HomeTutor.styles";

export default function HomeTutor({ navigation }) {
  const cuidadores = [
    {
      id: "1",
      nome: "Marina Costa",
      local: "São Paulo, SP",
      nota: "4.9",
      avaliacoes: "127",
      preco: "R$ 65",
      tags: ["Hospedagem", "Passeio", "Creche"],
      superCuidador: true,
      imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600",
    },
    {
      id: "2",
      nome: "Diego Martins",
      local: "Curitiba, PR",
      nota: "5.0",
      avaliacoes: "89",
      preco: "R$ 55",
      tags: ["Passeio", "Hospedagem"],
      superCuidador: true,
      imagem: "https://images.unsplash.com/photo-1534361960057-19889db98d18?q=80&w=600",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoHeader}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="menu" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.badgeCount}>
            <Ionicons name="sparkles" size={14} color="#6C38CC" />
            <Text style={styles.badgeCountText}>Mais de 10.000 pets cuidados</Text>
          </View>

          <Text style={styles.heroTitle}>
            Seu pet em <Text style={styles.heroTitleHighlight}>boas mãos</Text>, em qualquer lugar
          </Text>

          <Text style={styles.heroSub}>
            Encontre cuidadores verificados e apaixonados por animais perto de você. Hospedagem, passeios e creche com segurança e carinho.
          </Text>

          <TouchableOpacity style={styles.btnPrimary} activeOpacity={0.8}>
            <Feather name="search" size={18} color="#FFF" />
            <Text style={styles.btnPrimaryText}>Encontrar cuidador</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSecondary} activeOpacity={0.8}>
            <Feather name="heart" size={18} color="#7A33D4" />
            <Text style={styles.btnSecondaryText}>Fazer match</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cuidadores em destaque</Text>
          <Text style={styles.sectionSub}>Os melhores avaliados da plataforma</Text>
        </View>

        {cuidadores.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardImageArea}>
              <Image source={{ uri: item.imagem }} style={styles.cardImage} />
              {item.superCuidador && (
                <View style={styles.superBadge}>
                  <Feather name="shield" size={13} color="#333" />
                  <Text style={styles.superBadgeText}>Super Cuidador</Text>
                </View>
              )}
              <TouchableOpacity style={styles.favoriteButton}>
                <Feather name="heart" size={16} color="#7A33D4" />
              </TouchableOpacity>
            </View>

            <View style={styles.cardBody}>
              <View style={styles.cardRow}>
                <Text style={styles.cardNome}>{item.nome}</Text>
                <View style={styles.notaArea}>
                  <Ionicons name="star" size={14} color="#FFC400" />
                  <Text style={styles.cardNota}>{item.nota}</Text>
                </View>
              </View>

              <View style={styles.localArea}>
                <Ionicons name="location-outline" size={13} color="#777" />
                <Text style={styles.cardLocal}>{item.local}</Text>
              </View>

              <View style={styles.tagsRow}>
                {item.tags.map((tag, idx) => (
                  <View key={idx} style={styles.tagBadge}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.cardPrecoLabel}>
                  a partir de <Text style={styles.cardPreco}>{item.preco}</Text>/diária
                </Text>
                <Text style={styles.cardAvaliacoes}>{item.avaliacoes} avaliações</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}