import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  label: {
    color: "#FFFFFF",
    marginBottom: 4,
    fontSize: 12,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    height: 42,
    paddingHorizontal: 16,
    fontSize: 13,
    color: "#333333",
  },
  inputError: {
    borderWidth: 1.5,
    borderColor: "#FF4D4D",
  },
  error: {
    color: "#FFD7D7",
    marginTop: 3,
    marginLeft: 8,
    fontSize: 11,
  },
});