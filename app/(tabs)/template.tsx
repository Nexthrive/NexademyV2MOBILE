import {
  Image,
  StyleSheet,
  Platform,
  Text,
  Button,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Feather } from "@expo/vector-icons"; // Import Expo Icons
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScaledSheet, ms, s, vs, mvs } from "react-native-size-matters";
import { useStoreRootState } from "expo-router/build/global-state/router-store";
import Svg, { Path, G } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";

export default function HomeScreen() {
  const [isFlatListScrolling, setIsFlatListScrolling] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 300], // Adjust the range based on how far you want the effect
    outputRange: [ms(260), ms(100)], // Start at 260 and move to 100
    extrapolate: "clamp", // Prevents the value from going beyond the defined range
  });
  const data = [
    {
      id: "1",
      name: "Agus Slowhend, S.Bdy.",
      subject: "Seni Budaya",
      time: "07:00",
      isHighlighted: false,
    },
    {
      id: "2",
      name: "Agus Slowhend, S.Bdy.",
      subject: "Seni Budaya",
      time: "07:00",
      isHighlighted: false,
    },
    {
      id: "3",
      name: "Miyarti, S.Pd.,",
      subject: "Matematika",
      time: "13:00",
      isHighlighted: true,
    },
    {
      id: "4",
      name: "Prof. Asep Elmen",
      subject: "IPA",
      time: "14:00",
      isHighlighted: false,
    },
    {
      id: "5",
      name: "Anton Maulana, S.Kom.,",
      subject: "TIK",
      time: "15:00",
      isHighlighted: false,
    },
    {
      id: "6",
      name: "Anton Maulana, S.Kom.,",
      subject: "TIK",
      time: "15:00",
      isHighlighted: false,
    },
  ];
  const renderItem = ({ item }) => (
    <View
      className={` flex flex-row items-center justify-between w-full ${
        item.isHighlighted ? "bg-[#55828B]" : "bg-[#F2F2F2]"
      }`}
      style={{
        paddingInline: ms(20),

        paddingBlock: ms(14),
        borderRadius: ms(8),
      }}
    >
      <View>
        <ThemedText
          className={`italic font-light ${
            item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
          }`}
          style={{ fontSize: ms(10) }}
        >
          {item.name}
        </ThemedText>
        <ThemedText
          type="pSemiBold"
          className={` ${
            item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
          }`}
          style={{ fontSize: ms(12) }}
        >
          {item.subject}
        </ThemedText>
      </View>
      <View>
        <ThemedText
          type="pSemiBold"
          className={` ${
            item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
          }`}
          style={{ fontSize: ms(12) }}
        >
          {item.time}
        </ThemedText>
      </View>
    </View>
  );
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    console.log("Logged out");
  };
  const name = "Qalbi";
  return <></>;
}

const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "64@ms",
    marginBottom: "20@ms",
    backgroundColor: "#364958",
    gap: "8@ms",
    paddingHorizontal: "24@ms",
  },
});
