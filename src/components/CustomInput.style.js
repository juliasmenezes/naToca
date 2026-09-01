import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    color: "#FFF",
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    height: 48,
    paddingHorizontal: 18,
    fontSize: 15,
    color: "#333",
  },
  inputError: {
    borderWidth: 2,
    borderColor: "#FF4D4D",
  },
  error: {
    color: "#FFE2E2",
    marginTop: 5,
    marginLeft: 8,
    fontSize: 12,
  },
});