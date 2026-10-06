import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    backgroundColor: "#7A33D4",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  logo: {
    width: 65,
    height: 65,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 14,
    textAlign: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
    width: "100%",
  },
  toggleButton: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 8,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  toggleButtonActive: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  toggleTextBold: {
    fontSize: 14,
    fontWeight: "bold",
  },
  toggleTextActive: {
    color: "#4A154B",
  },
  toggleTextInactive: {
    color: "#FFFFFF",
  },
  toggleSubText: {
    fontSize: 9,
    marginTop: 2,
  },
  toggleSubTextActive: {
    color: "#666666",
  },
  toggleSubTextInactive: {
    color: "rgba(255, 255, 255, 0.8)",
  },
  card: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  loginLink: {
    marginTop: 10,
    alignItems: "center",
  },
  loginLinkText: {
    color: "#FFFFFF",
    fontSize: 11,
    textDecorationLine: "underline",
  },
});