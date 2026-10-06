import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 100,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  logo: {
    width: 200,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4A154B",
    marginBottom: 35,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#8A2BE2",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 3,
  },
  buttonCadastrar: {
    backgroundColor: "#8A2BE2",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});