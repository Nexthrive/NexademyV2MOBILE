import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

export type ThemedTextProps = TextProps & {
  type?: "default" | "mBold" | "pBold" | "pMedium" | "pSemiBold" | "pExtraBold";
};

export function ThemedText({
  type = "default",
  style,
  ...rest
}: ThemedTextProps) {
  let fontFamily;

  switch (type) {
    case "mBold":
      fontFamily = "Montserrat";
      break;
    case "pBold":
      fontFamily = "Poppins-Bold";
      break;
    case "pExtraBold":
      fontFamily = "Poppins-ExtraBold";
      break;
    case "pMedium":
      fontFamily = "Poppins-Medium";
      break;
    case "pSemiBold":
      fontFamily = "Poppins-SemiBold";
      break;
    default:
      fontFamily = "Poppins";
  }

  return <Text style={[{ fontFamily }, style]} {...rest} />;
}
