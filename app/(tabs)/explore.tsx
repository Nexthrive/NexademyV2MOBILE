import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  ScrollView,
  Text,
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

export default function TabTwoScreen() {
  return (
    <ScrollView className="bg-[#FCFFFF] flex flex-col">
      <View className="flex flex-col">
        <View
          style={{ marginTop: ms(60), marginInline: ms(20), width: ms(200) }}
        >
          <ThemedText type="mBold">
            <View
              style={{
                borderBottomWidth: ms(3),
                height: mvs(30),
                borderBottomColor: "#3b6064",
              }}
            >
              <ThemedText type="mBold" style={{ fontSize: ms(24) }}>
                Assi
              </ThemedText>
            </View>

            <View
              style={{
                borderBottomWidth: ms(0),
                height: mvs(30),
                borderBottomColor: "transparent",
              }}
            >
              <ThemedText type="mBold" style={{ fontSize: ms(24) }}>
                g
              </ThemedText>
            </View>
            <View
              style={{
                borderBottomWidth: ms(3),
                height: mvs(30),
                borderBottomColor: "#3b6064",
              }}
            >
              <ThemedText type="mBold" style={{ fontSize: ms(24) }}>
                nment's
              </ThemedText>
            </View>
            <ThemedText type="mBold" style={{ fontSize: ms(24) }}>
              Archive
            </ThemedText>
          </ThemedText>
        </View>
        <View style={{ marginLeft: ms(20) }}>
          <ScrollView>
            <View
              className="flex "
              style={{ paddingRight: ms(2), width: ms(250) }}
            >
              <View className="flex flex-row justify-between ">
                <Svg width="165" height="31" viewBox="0 0 165 31" fill="none">
                  <Path
                    d="M0 14.0223V31H165C152.81 31 146.384 27.7653 139.336 20.7397C129.712 11.1469 128.749 2.65049 110.464 1.00602C91.0017 1.00602 29.3835 1.05672 14.2106 1C-0.962297 0.943428 0 11.5593 0 14.0223Z"
                    fill="#493B64"
                  />
                </Svg>

                <View
                  className="flex flex-row items-center justify-center p-2 bg-[#9183AC]"
                  style={{ paddingInline: ms(16), borderRadius: ms(8) }}
                ></View>
              </View>

              <View
                className="w-full p-5 bg-[#493B64] "
                style={{
                  height: mvs(152),
                  borderBottomLeftRadius: ms(16),
                  borderBottomRightRadius: ms(16),
                  borderTopRightRadius: ms(16),
                }}
              ></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
