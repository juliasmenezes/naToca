import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
  },
  badgeConcluido: {
    backgroundColor: "#10B98120",
    borderWidth: 1,
    borderColor: "#10B981",
  },
  badgeProgresso: {
    backgroundColor: "#F59E0B20",
    borderWidth: 1,
    borderColor: "#F59E0B",
  },
  textoBadge: {
    fontSize: 11,
    fontWeight: "bold",
  },
  textoConcluido: {
    color: "#10B981",
  },
  textoProgresso: {
    color: "#F59E0B",
  },
  descricao: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 6,
    lineHeight: 18,
  },
});