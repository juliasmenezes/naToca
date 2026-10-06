import React from "react";
import { View, Text } from "react-native";
import { styles } from "./CardSolicitacao.styles";

export function CardSolicitacao({ item }) {
  const isConcluido = item.status === "Concluído" || item.status === "Aceito";

  return (
    <View style={styles.card}>
      <View style={styles.headerCard}>
        <Text style={styles.titulo}>{item.titulo || item.pet}</Text>
        <View
          style={[
            styles.badge,
            isConcluido ? styles.badgeConcluido : styles.badgeProgresso,
          ]}
        >
          <Text
            style={[
              styles.textoBadge,
              isConcluido ? styles.textoConcluido : styles.textoProgresso,
            ]}
          >
            {item.status}
          </Text>
        </View>
      </View>
      {item.descricao && (
        <Text style={styles.descricao}>{item.descricao}</Text>
      )}
    </View>
  );
}