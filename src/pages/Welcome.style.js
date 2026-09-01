import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  background: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },

  logo: {
    width: 230,
    height: 230,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7A33D4",
    marginBottom: 45,
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#7A33D4",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "600",
  },

  smallText: {
    fontSize: 11,
    color: "#A36AE6",
    marginTop: 4,
  },

});