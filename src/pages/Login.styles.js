import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#7D38F6",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
  },

  logoArea: {
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
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 30,
  },

  form: {
    width: "100%",
  },

  label: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 6,
    marginLeft: 5,
    fontWeight: "600",
  },

  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 25,
    height: 48,
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 15,
  },

  button: {
    backgroundColor: "#FFC400",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 5,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  footer: {
    color: "#FFF",
    marginTop: 25,
    textAlign: "center",
    fontSize: 13,
  },

  link: {
    fontWeight: "bold",
    color: "#FFD84D",
  },

});