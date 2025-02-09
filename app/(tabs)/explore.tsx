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
import Svg, { Path, G, Ellipse } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef } from "react";

export default function TabTwoScreen() {
  const datas = [
    {
      id: "1",
      title: "Matematika",
      description: "24 Total task's",
      teacher: "Aldi “Azhar” Yusron, S.Pd.",
      image: require("../../assets/images/face.jpg"),
      bgColor: "#493B64",
      dotsColor: "#9183AC",
      textColor: "#FFFFFF",
      subTextColor: "#B5B5B5",
      ellipseColor: "#382A56",
    },
    {
      id: "2",
      title: "PPKN",
      description: "12 Total task's",
      teacher: "Aldi “Azhar” Yusron, S.Pd.",
      image: require("../../assets/images/face.jpg"),
      bgColor: "#643B3B",
      dotsColor: "#AA8181",
      textColor: "#FFFFFF",
      subTextColor: "#C6C6C6",
      ellipseColor: "#4A2323",
    },
  ];

  const Card = ({ item }) => (
    <View style={{ width: ms(250) }}>
      <View className="flex flex-row justify-between ">
        <Svg
          width="165"
          height="31"
          className="absolute z-10"
          viewBox="0 0 165 31"
          fill="none"
        >
          <Path
            d="M0 14.0223V31H165C152.81 31 146.384 27.7653 139.336 20.7397C129.712 11.1469 128.749 2.65049 110.464 1.00602C91.0017 1.00602 29.3835 1.05672 14.2106 1C-0.962297 0.943428 0 11.5593 0 14.0223Z"
            fill={item.bgColor}
          />
          <TouchableOpacity
            className="bg-[#FFFFFF] flex absolute flex-row  items-center "
            style={{
              paddingBlock: ms(4),
              paddingInline: ms(12),
              top: ms(12),
              gap: ms(5),
              left: ms(14),
              borderRadius: ms(4),
            }}
          >
            <ThemedText
              type="pMedium"
              className="flex gap-5 "
              style={{ fontSize: ms(8), height: ms(12) }}
            >
              View
            </ThemedText>
            <Svg
              width="8"
              height="6"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M1.24105 9L6.25 4.5L1.24105 0L0 1.11495L3.76791 4.5L0 7.88505L1.24105 9Z"
                fill="#1E1E1E"
              />
              <Path
                d="M4.99105 9L10 4.5L4.99105 0L3.75 1.11495L7.51791 4.5L3.75 7.88505L4.99105 9Z"
                fill="#1E1E1E"
              />
            </Svg>
          </TouchableOpacity>
        </Svg>

        <View
          className="absolute right-0 flex flex-row items-center justify-center"
          style={{
            paddingInline: ms(4),
            paddingBlock: ms(2),
            borderRadius: ms(8),
            backgroundColor: item.dotsColor,
          }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="black"
          />
        </View>
      </View>

      <View
        className="relative w-full -z-10"
        style={{
          height: mvs(152),
          paddingInline: ms(12),
          paddingTop: ms(12),
          borderBottomLeftRadius: ms(16),
          borderBottomRightRadius: ms(16),
          borderTopRightRadius: ms(16),
          backgroundColor: item.bgColor,
        }}
      >
        <View style={{ marginTop: ms(5) }}>
          <ThemedText
            type="mSemiBold"
            className="text-white"
            style={{ fontSize: ms(20), color: item.textColor }}
          >
            {item.title}
          </ThemedText>
          <ThemedText
            className="text-[#B5B5B5]"
            style={{
              fontSize: ms(12),
              marginBottom: ms(5),
              color: item.subTextColor,
            }}
          >
            {item.description}
          </ThemedText>
          <Svg width={300} height={50} viewBox="0 0 300 50" fill="none">
            {[
              [
                1.01887, 15.2845, 29.5462, 43.8118, 58.0736, 72.3392, 86.6048,
                100.867, 115.132, 129.398, 143.66, 157.925, 172.191, 186.452,
                200.718, 214.984, 229.25,
              ],
              [
                1.01887, 15.2845, 29.5462, 43.8118, 58.0736, 72.3392, 86.6048,
                100.867, 115.132, 129.398, 143.66, 157.925, 172.191, 186.452,
                200.718, 214.984, 229.25,
              ],
              [
                1.01887, 15.2845, 29.5462, 43.8118, 58.0736, 72.3392, 86.6048,
                100.867, 115.132, 129.398, 143.66, 157.925, 172.191, 186.452,
                200.718, 214.984, 229.25,
              ],
            ].map((row, rowIndex) =>
              row.map((cx) => (
                <Ellipse
                  key={`${cx}-${rowIndex}`}
                  cx={cx}
                  cy={rowIndex * 14.5 + 1.03333}
                  rx={1.01887}
                  ry={1.03333}
                  fill={item.ellipseColor}
                />
              ))
            )}
          </Svg>
          <View className="flex flex-row items-center " style={{ gap: ms(10) }}>
            <View
              style={{
                width: ms(28),
                height: mvs(27),
                marginLeft: ms(4),
                borderRadius: ms(300),
                borderWidth: ms(1),
                borderColor: "#FFFFFF",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.image}
                style={{
                  width: ms(26),
                  height: mvs(25),
                  borderRadius: ms(13),
                }}
              />
            </View>
            <ThemedText
              className="italic text-white"
              style={{ fontSize: ms(10), color: item.textColor }}
            >
              {item.teacher}
            </ThemedText>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItem = ({ item }) => <Card item={item} />;

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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              className="flex flex-row"
              style={{ paddingRight: ms(20), gap: ms(20) }}
            >
              {datas.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
