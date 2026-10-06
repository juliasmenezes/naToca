import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoHeader: {
    width: 90,
    height: 30,
  },
  profileIcon: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7A33D4",
    marginBottom: 10,
  },
  profileCard: {
    alignItems: "center",
    backgroundColor: "#F8F5FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  userLocation: {
    fontSize: 11,
    color: "#888",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#EAE0FA",
    paddingTop: 12,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  statLabel: {
    fontSize: 10,
    color: "#888",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7A33D4",
    marginBottom: 12,
  },
  petsGrid: {
    flexDirection: "row",
    gap: 12,
  },
  petCard: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 10,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  petImage: {
    width: "100%",
    height: 100,
    borderRadius: 12,
  },
  petNome: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginTop: 6,
  },
  petRaca: {
    fontSize: 10,
    color: "#888",
  },
  btnAddPet: {
    marginTop: 16,
    alignSelf: "center",
  },
  btnAddPetText: {
    fontSize: 11,
    color: "#7A33D4",
    fontWeight: "600",
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