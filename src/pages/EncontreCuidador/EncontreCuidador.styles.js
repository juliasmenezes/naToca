import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5FF",
  },
  topBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
  },
  logoHeader: {
    width: 90,
    height: 30,
  },
  profileIcon: {
    padding: 4,
  },
  scrollContent: {
    padding: 24,
    alignItems: "center",
  },
  heroBanner: {
    alignItems: "center",
    marginVertical: 15,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E06287",
    textAlign: "center",
  },
  heartIcon: {
    marginTop: 6,
  },
  filterCard: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EADCFB",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 14,
  },
  filterLabel: {
    fontSize: 12,
    color: "#7A33D4",
    marginBottom: 8,
    fontWeight: "600",
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  chipOption: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  chipOptionActive: {
    backgroundColor: "#7A33D4",
    borderColor: "#7A33D4",
  },
  chipText: {
    fontSize: 11,
    color: "#555",
  },
  chipTextActive: {
    color: "#FFF",
    fontWeight: "bold",
  },
  btnEncontrar: {
    backgroundColor: "#7A33D4",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  btnEncontrarText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomBar: {
    height: 55,
    backgroundColor: "#E06287",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    color: "#FFF",
    fontSize: 10,
    marginTop: 2,
  },
});