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
import Svg, { Path } from "react-native-svg";
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
  return (
    <>
      <Animated.ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        className="bg-[#364958]  h-full"
        onStartShouldSetResponder={() => !isFlatListScrolling}
        onMoveShouldSetResponder={() => !isFlatListScrolling}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16} // Ensures smooth animation
      >
        {/* <Button title="Logout" onPress={handleLogout} /> */}

        <ThemedView style={styles.titleContainer}>
          <View
            className="flex flex-col items-center justify-between w-full "
            style={{ gap: ms(10) }}
          >
            <View
              className="flex flex-col items-center justify-center"
              style={{ maxWidth: ms(500) }}
            >
              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-col ">
                  <ThemedText
                    className="text-white "
                    style={{ fontSize: ms(24), lineHeight: ms(30) }}
                    type="mBold"
                  >
                    Hello, {name}!
                  </ThemedText>
                  <ThemedText
                    className=" text-[#283641]"
                    style={{ fontSize: ms(14) }}
                  >
                    what should we do today?
                  </ThemedText>
                </View>

                <View className="flex flex-row items-center justify-between ">
                  <View>
                    <View
                      style={{
                        width: ms(51),
                        height: mvs(50),
                        borderRadius: ms(300),
                        borderWidth: ms(2),
                        borderColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={require("../../assets/images/face.jpg")}
                        style={{
                          width: ms(47),
                          height: mvs(46),
                          borderRadius: ms(28),
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{ marginTop: ms(20), position: "relative", zIndex: 2 }}
              >
                <View
                  className="flex flex-row items-center justify-between "
                  style={{ paddingRight: ms(2) }}
                >
                  <Svg width="273" height="36" viewBox="0 0 273 36" fill="none">
                    <Path
                      d="M0 17.0223L3.99382e-05 36L273 36C252.829 36 242.197 31.9537 230.534 23.5663C214.61 12.1142 213.017 1.97097 182.76 0.00775466C150.557 0.00775466 50.2124 0.0752923 25.1062 0.00775466C-7.15133e-05 -0.059783 -3.27288e-07 -0.0597926 0 17.0223Z"
                      fill="white"
                    />
                    <ThemedText
                      className="text-black "
                      style={{
                        paddingLeft: ms(14),
                        paddingTop: ms(10),
                        letterSpacing: ms(-1),

                        fontSize: ms(20),
                      }}
                      type="mSemiBold"
                    >
                      Announcement's
                    </ThemedText>
                  </Svg>
                  <View
                    className="flex flex-row items-center justify-center p-2 bg-white"
                    style={{ paddingInline: ms(16), borderRadius: ms(8) }}
                  >
                    <Svg
                      width="8"
                      height="7"
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
                  </View>
                </View>
                <Shadow
                  distance={2} // Vertical offset
                  startColor="rgba(0, 0, 0, 0.06)" // Shadow color with 6% opacity
                  offset={[0, 2]} // X=0, Y=2
                >
                  <View
                    className="w-full p-5 bg-white "
                    style={{
                      height: mvs(210),
                      borderBottomLeftRadius: ms(16),
                      borderBottomRightRadius: ms(16),
                      borderTopRightRadius: ms(16),
                    }}
                  >
                    <View className="flex flex-col" style={{ gap: ms(8) }}>
                      <View
                        className="bg-[#3B6064] flex flex-row justify-between items-center "
                        style={{
                          paddingBlock: ms(14),
                          borderRadius: ms(8),
                          paddingLeft: ms(20),
                          paddingRight: ms(10),
                          gap: ms(10),
                        }}
                      >
                        <View className="flex flex-row items-center justify-between w-full ">
                          <View
                            className="flex flex-row items-center"
                            style={{ gap: ms(14) }}
                          >
                            <Image
                              source={require("../../assets/images/Ellipse 1.png")}
                            />
                            <View style={{ marginRight: ms(20) }}>
                              <ThemedText
                                className="text-[#EBE2E2]  "
                                style={{
                                  fontSize: ms(8),
                                  lineHeight: ms(10),
                                  height: mvs(9),
                                }}
                              >
                                School
                              </ThemedText>
                              <ThemedText
                                className="text-white "
                                type="pMedium"
                                style={{ fontSize: ms(10) }}
                              >
                                Field trip necessities...
                              </ThemedText>
                            </View>
                          </View>
                          <View className="flex flex-row items-center justify-between gap-3">
                            <ThemedText
                              className="text-[#D5D5D5] "
                              type="pMedium"
                              style={{ fontSize: ms(10) }}
                            >
                              09/10/24
                            </ThemedText>
                            <Feather
                              name="chevron-right"
                              size={ms(15)}
                              color="#2A4548"
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        className="bg-[#423B64]  flex flex-row justify-between items-center "
                        style={{
                          paddingBlock: ms(14),
                          borderRadius: ms(8),
                          paddingLeft: ms(20),
                          paddingRight: ms(10),
                          gap: ms(10),
                        }}
                      >
                        <View className="flex flex-row items-center justify-between w-full ">
                          <View
                            className="flex flex-row items-center"
                            style={{ gap: ms(14) }}
                          >
                            <Image
                              source={require("../../assets/images/Ellipse 1.png")}
                            />
                            <View style={{ marginRight: ms(20) }}>
                              <ThemedText
                                className="text-[#EBE2E2]  "
                                style={{
                                  fontSize: ms(8),
                                  lineHeight: ms(10),
                                  height: mvs(9),
                                }}
                              >
                                Homeroom
                              </ThemedText>
                              <ThemedText
                                className="text-white "
                                type="pMedium"
                                style={{ fontSize: ms(10) }}
                              >
                                Please submit your rep...
                              </ThemedText>
                            </View>
                          </View>
                          <View className="flex flex-row items-center justify-between gap-3">
                            <ThemedText
                              className="text-[#D5D5D5] "
                              type="pMedium"
                              style={{ fontSize: ms(10) }}
                            >
                              10/10/24
                            </ThemedText>
                            <Feather
                              name="chevron-right"
                              size={ms(15)}
                              color="#2E2A46"
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        className="bg-[#8B5555]  flex flex-row justify-between items-center "
                        style={{
                          paddingBlock: ms(14),
                          borderRadius: ms(8),
                          paddingLeft: ms(20),
                          paddingRight: ms(10),
                          gap: ms(10),
                        }}
                      >
                        <View className="flex flex-row items-center justify-between w-full ">
                          <View
                            className="flex flex-row items-center"
                            style={{ gap: ms(14) }}
                          >
                            <Image
                              source={require("../../assets/images/Ellipse 1.png")}
                            />
                            <View style={{ marginRight: ms(20) }}>
                              <ThemedText
                                className="text-[#EBE2E2]  "
                                style={{
                                  fontSize: ms(8),
                                  lineHeight: ms(10),
                                  height: mvs(9),
                                }}
                              >
                                Student Council
                              </ThemedText>
                              <ThemedText
                                className="text-white "
                                type="pMedium"
                                style={{ fontSize: ms(10) }}
                              >
                                Class meet H-4
                              </ThemedText>
                            </View>
                          </View>
                          <View className="flex flex-row items-center justify-between gap-3">
                            <ThemedText
                              className="text-[#D5D5D5] "
                              type="pMedium"
                              style={{ fontSize: ms(10) }}
                            >
                              09/10/24
                            </ThemedText>
                            <Feather
                              name="chevron-right"
                              size={ms(15)}
                              color="#744747"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Shadow>
                <View>
                  <View
                    className="flex flex-row items-center justify-between w-full"
                    style={{ marginTop: ms(20), gap: ms(10) }}
                  >
                    <Shadow
                      distance={ms(5)}
                      startColor="rgba(0, 0, 0, 0.06)" // Shadow color with 6% opacity
                      offset={[0, 2]} // X=0, Y=2
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(100),
                          height: ms(100),
                          borderRadius: ms(16),
                        }}
                      >
                        <Text></Text>
                      </View>
                    </Shadow>
                    <Shadow
                      distance={ms(5)}
                      startColor="rgba(0, 0, 0, 0.06)" // Shadow color with 6% opacity
                      offset={[0, 2]} // X=0, Y=2
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(100),
                          height: ms(100),
                          borderRadius: ms(16),
                        }}
                      >
                        <Text></Text>
                      </View>
                    </Shadow>
                    <Shadow
                      startColor="rgba(0, 0, 0, 0.06)" // Shadow color with 6% opacity
                      distance={ms(5)}
                      offset={[0, 2]} // X=0, Y=2
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(100),
                          height: ms(100),
                          borderRadius: ms(16),
                        }}
                      >
                        <Text></Text>
                      </View>
                    </Shadow>
                  </View>
                  <View
                    className="bg-[#FFFFFF] w-full"
                    style={{
                      marginTop: ms(20),
                      paddingBlock: ms(12),
                      paddingInline: ms(14),
                      borderRadius: ms(16),
                    }}
                  >
                    <View>
                      <View className="flex flex-row items-center justify-between">
                        <ThemedText
                          type="mSemiBold"
                          style={{ fontSize: ms(20), letterSpacing: ms(-1) }}
                        >
                          Today's Schedule
                        </ThemedText>
                        <Svg
                          width="15"
                          height="15"
                          style={{}}
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
                      </View>
                      <View>
                        <FlatList
                          data={data}
                          renderItem={renderItem}
                          keyExtractor={(item) => item.id}
                          contentContainerStyle={{
                            flexGrow: 1,
                            gap: ms(8),
                            marginTop: ms(10),
                          }}
                          showsVerticalScrollIndicator={false}
                          nestedScrollEnabled={true} // Mengaktifkan scroll nested
                          scrollEnabled={true} // Memastikan FlatList dapat di-scroll
                          onScrollBeginDrag={() => setIsFlatListScrolling(true)} // Deteksi mulai scroll
                          onScrollEndDrag={() => setIsFlatListScrolling(false)} // Deteksi selesai scroll
                          onMomentumScrollEnd={() =>
                            setIsFlatListScrolling(false)
                          } // Akhiri gesture scroll
                          onMomentumScrollBegin={() =>
                            setIsFlatListScrolling(true)
                          } // Gesture scroll dimulai
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ThemedView>
        <Animated.View
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderTopRightRadius: ms(20),

            borderTopLeftRadius: ms(20),
            backgroundColor: "#FAFDFD",
            transform: [{ translateY }], // Animate the `top` position
            zIndex: 1,
          }}
        />
      </Animated.ScrollView>
    </>
  );
}

const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "64@ms",
    backgroundColor: "#364958",
    gap: "8@ms",
    paddingHorizontal: "24@ms",
  },
});
