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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSortAmountAsc,
  faSortAmountDesc,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FaSortAmountUp } from "@fortawesome/free-solid-svg-icons";

export default function TabTwoScreen() {
  const [isFlatListScrolling, setIsFlatListScrolling] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isContentScrolling, setIsContentScrolling] = useState(false);
  const contentScrollRef = useRef<ScrollView>(null);
  const translateY = scrollY.interpolate({
    inputRange: [0, 620], // Adjust the range based on how far you want the effect
    outputRange: [ms(350), ms(200)], // Start at 260 and move to 100
    extrapolate: "clamp", // Prevents the value from going beyond the defined range
  });
  const translateYY = scrollY.interpolate({
    inputRange: [0, 300], // Adjust the range based on how far you want the effect
    outputRange: [ms(60), ms(0)], // Start at 260 and move to 100
    extrapolate: "clamp", // Prevents the value from going beyond the defined range
  });
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
    <>
      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-[#FCFFFF] h-full"
        scrollEnabled={!isContentScrolling}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/* <Button title="Logout" onPress={handleLogout} /> */}

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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
        <Animated.View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderTopRightRadius: ms(24),
            paddingInline: ms(24),
            paddingTop: ms(34),

            borderTopLeftRadius: ms(24),
            backgroundColor: "#FFFFFF",
            transform: [{ translateY }], // Animate the `top` position
            zIndex: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5, // Untuk Android
          }}
        ></Animated.View>
        <Animated.View
          style={{
            paddingInline: ms(18),
            position: "relative",
            transform: [{ translateY: translateYY }], // Use translateY here as well

            zIndex: 2,
          }}
        >
          <View
            className="flex flex-row items-center justify-between"
            style={{ marginBottom: ms(18) }}
          >
            <ThemedText type="mSemiBold" style={{ fontSize: ms(22) }}>
              All Task's
            </ThemedText>
            <View className="flex flex-row " style={{ gap: ms(18) }}>
              <View
                style={{
                  width: ms(40),
                  height: mvs(38),

                  borderRadius: ms(300),
                  borderWidth: ms(2),
                  borderColor: "#3B6064",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={30}
                  color="#3B6064"
                />
              </View>
              <View
                className="bg-[#55828B]"
                style={{
                  width: ms(40),
                  height: mvs(38),

                  borderRadius: ms(300),
                  borderWidth: ms(2),
                  borderColor: "#3B6064",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSortAmountUp}
                  size={20}
                  style={{ color: "#3B6064" }}
                />
              </View>
              <View
                style={{
                  width: ms(40),
                  height: mvs(38),

                  borderRadius: ms(300),
                  borderWidth: ms(2),
                  borderColor: "#3B6064",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSortAmountDesc}
                  style={{ color: "#3B6064" }}
                  size={20}
                />
              </View>
            </View>
          </View>
          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11].map((_, index) => (
            <View key={index} style={{ marginBottom: ms(16) }}>
              <View
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.28,
                  shadowRadius: 10,
                  elevation: 4, // Untuk Android
                  borderRadius: ms(14),
                }}
              >
                <View
                  className="flex flex-col justify-between "
                  style={{
                    width: "100%",
                    backgroundColor: "#FBFBFB",

                    borderRadius: ms(14),
                  }}
                >
                  <View
                    className="flex flex-row items-center justify-between"
                    style={{
                      marginTop: ms(18),
                      marginInline: ms(18),
                      marginBottom: ms(18),
                    }}
                  >
                    <View>
                      <ThemedText type="mBold" style={{ fontSize: ms(14) }}>
                        Kerjakan buku halaman 12 ba...
                      </ThemedText>
                      <ThemedText
                        type="pMedium"
                        className="italic "
                        style={{
                          fontSize: ms(12),
                          lineHeight: ms(15),
                          color: "#A9A9A9",
                        }}
                      >
                        Matematika
                      </ThemedText>
                    </View>
                    <Svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path
                        d="M1.86157 15L9.375 7.5L1.86157 0L0 1.85824L5.65186 7.5L0 13.1418L1.86157 15Z"
                        fill="#1E1E1E"
                      />
                      <Path
                        d="M7.48657 15L15 7.5L7.48657 0L5.625 1.85824L11.2769 7.5L5.625 13.1418L7.48657 15Z"
                        fill="#1E1E1E"
                      />
                    </Svg>
                  </View>
                  <View
                    className="bg-[#493B64] flex flex-row items-center justify-between "
                    style={{
                      borderBottomLeftRadius: ms(12),
                      borderBottomRightRadius: ms(12),
                      paddingInline: ms(20),
                      paddingBlock: ms(10),
                    }}
                  >
                    <View
                      className="flex flex-row items-center"
                      style={{
                        gap: ms(10),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="calendar-month"
                        size={20}
                        color="#FEFEFE"
                      />
                      <View
                        className="flex flex-row items-center "
                        style={{ gap: ms(8) }}
                      >
                        <ThemedText
                          type="pMedium"
                          style={{ fontSize: ms(10), color: "#FEFEFE" }}
                        >
                          5/10/24
                        </ThemedText>
                        <Svg
                          width="23"
                          height="9"
                          viewBox="0 0 23 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <Path
                            d="M22.3536 5.00077C22.5488 4.80551 22.5488 4.48893 22.3536 4.29366L19.1716 1.11168C18.9763 0.916421 18.6597 0.916421 18.4645 1.11168C18.2692 1.30695 18.2692 1.62353 18.4645 1.81879L21.2929 4.64722L18.4645 7.47564C18.2692 7.67091 18.2692 7.98749 18.4645 8.18275C18.6597 8.37801 18.9763 8.37801 19.1716 8.18275L22.3536 5.00077ZM0 5.14722H22V4.14722H0V5.14722Z"
                            fill="#FEFEFE"
                          />
                        </Svg>
                        <ThemedText
                          type="pMedium"
                          style={{ fontSize: ms(10), color: "#FEFEFE" }}
                        >
                          10/10/24
                        </ThemedText>
                      </View>
                    </View>
                    <View
                      className=""
                      style={{
                        paddingInline: ms(14),
                        paddingBlock: ms(4),
                        borderRadius: ms(12),
                        backgroundColor: "#3E354F",
                      }}
                    >
                      <ThemedText
                        type="pMedium"
                        style={{ fontSize: ms(8), color: "#FFFFFF" }}
                      >
                        Unfinished
                      </ThemedText>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
}
