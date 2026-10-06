import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CustomButton.style";

export default function CustomButton({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}