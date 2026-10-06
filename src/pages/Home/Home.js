import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardSolicitacao } from "../../components/CardSolicitacao/CardSolicitacao";
import { styles } from "./Home.styles";

// Exemplo de dados simulando requisições do naToca
const ATIVIDADES_DATA = [
  {
    id: "1",
    titulo: "Passeio com Rex (Golden)",
    status: "Pendente",
    descricao: "Horário: Hoje, 14:00 • Tutor: Mariana",
  },
  {
    id: "2",
    titulo: "Hospedagem Thor (Bulldog)",
    status: "Concluído",
    descricao: "Horário: Ontem, 09:00 • Tutor: Lucas",
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boasVindas}>Bem-vindo de volta!</Text>
        <Text style={styles.tituloPage}>PAINEL DE ATIVIDADES</Text>
      </View>

      <FlatList
        data={ATIVIDADES_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardSolicitacao item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma atividade encontrada.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}