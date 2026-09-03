import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: "#6C27FF",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingVertical: 32,
    flexGrow: 1,
    justifyContent: "center",
  },
  logoCircleContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  logo: {
    width: 75,
    height: 75,
  },
  headerTextContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 10,
  },
  roleSelectorRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  roleCard: {
    flex: 1,
    backgroundColor: "#F3EEFF",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#E2D5FF",
  },
  roleCardActiveTutor: {
    borderColor: "#6C27FF",
    backgroundColor: "#EFE6FF",
  },
  roleCardActiveCuidador: {
    borderColor: "#E91E63",
    backgroundColor: "#FDE8EF",
  },
  roleTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666666",
    marginTop: 4,
  },
  roleTextActive: {
    color: "#111111",
  },
  roleSub: {
    fontSize: 11,
    color: "#888888",
    marginTop: 2,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3EEFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2D5FF",
    paddingHorizontal: 16,
    height: 48,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333333",
    fontSize: 14,
  },
  btnPrimary: {
    backgroundColor: "#FFC400",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
    marginBottom: 16,
  },
  btnPrimaryText: {
    color: "#1E1B4B",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#666666",
    fontSize: 14,
  },
  footerLinkBold: {
    color: "#6C27FF",
    fontWeight: "bold",
    fontSize: 14,
  },
});