import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./HomeCuidador.styles";

export default function HomeCuidador({ navigation }) {
  const [disponivel, setDisponivel] = useState(true);

  const solicitacoes = [
    {
      id: "1",
      tutor: "Mariana Silva",
      pet: "Rex",
      raca: "Golden Retriever",
      servico: "Passeio",
      horario: "Hoje, 14:00",
      valor: "R$ 45",
      imagemPet: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=300",
    },
    {
      id: "2",
      tutor: "Lucas Mendes",
      pet: "Thor",
      raca: "Bulldog Francês",
      servico: "Hospedagem",
      horario: "Amanhã, 09:00",
      valor: "R$ 120",
      imagemPet: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=300",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TopBar */}
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
          <View style={styles.badgeContainer}>
            <FontAwesome5 name="paw" size={12} color="#7A33D4" />
            <Text style={styles.badgeText}>Painel do Cuidador</Text>
          </View>

          <Text style={styles.heroTitle}>
            Gerencie suas <Text style={styles.heroHighlight}>hospedagens</Text> e passeios
          </Text>

          <View style={styles.statusCard}>
            <View style={styles.statusInfo}>
              <View style={[styles.statusDot, { backgroundColor: disponivel ? "#10B981" : "#EF4444" }]} />
              <View>
                <Text style={styles.statusLabel}>STATUS ATUAL</Text>
                <Text style={styles.statusValue}>
                  {disponivel ? "Disponível para chamados" : "Indisponível no momento"}
                </Text>
              </View>
            </View>
            <Switch
              trackColor={{ false: "#CBD5E1", true: "#DDD6FE" }}
              thumbColor={disponivel ? "#7A33D4" : "#94A3B8"}
              onValueChange={() => setDisponivel(!disponivel)}
              value={disponivel}
            />
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>18</Text>
              <Text style={styles.statLabel}>Atendimentos</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>4.9★</Text>
              <Text style={styles.statLabel}>Sua Nota</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>R$ 840</Text>
              <Text style={styles.statLabel}>Ganhos no Mês</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Solicitações Pendentes</Text>
          <Text style={styles.sectionSub}>Tutores aguardando sua confirmação</Text>
        </View>

        {solicitacoes.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Image source={{ uri: item.imagemPet }} style={styles.petAvatar} />
              <View style={styles.cardHeaderInfo}>
                <Text style={styles.petNome}>{item.pet} <Text style={styles.petRaca}>({item.raca})</Text></Text>
                <Text style={styles.tutorNome}>Tutor(a): {item.tutor}</Text>
              </View>
              <View style={styles.badgeServico}>
                <Text style={styles.badgeServicoText}>{item.servico}</Text>
              </View>
            </View>

            <View style={styles.cardDivider} />

            <View style={styles.cardDetailsRow}>
              <View style={styles.detailItem}>
                <Ionicons name="time-outline" size={16} color="#64748B" />
                <Text style={styles.detailText}>{item.horario}</Text>
              </View>
              <Text style={styles.valorText}>{item.valor}</Text>
            </View>

            <View style={styles.cardActionsRow}>
              <TouchableOpacity style={styles.btnRecusar} activeOpacity={0.8}>
                <Text style={styles.btnRecusarText}>Recusar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnAceitar} activeOpacity={0.8}>
                <Feather name="check" size={16} color="#FFF" />
                <Text style={styles.btnAceitarText}>Aceitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}