import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#7D38F6",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 35,
  },

  logoArea: {
    alignItems: "center",
    marginBottom: 15,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  logo: {
    width: 70,
    height: 70,
  },

  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  tipoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  tipoButton: {
    width: "47%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  tipoSelecionado: {
    backgroundColor: "#D9C2FF",
  },

  tipoTexto: {
    color: "#666",
    fontWeight: "600",
  },

  tipoTextoSelecionado: {
    color: "#6B2ED6",
    fontWeight: "bold",
  },

  form: {
    width: "100%",
  },

  label: {
    color: "#FFF",
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "600",
  },

  input: {
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    marginBottom: 16,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#FFC400",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  footer: {
    textAlign: "center",
    color: "#FFF",
    marginTop: 22,
    fontSize: 13,
  },

  link: {
    color: "#FFD84D",
    fontWeight: "bold",
  },

});