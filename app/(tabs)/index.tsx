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

  const datas = [
    {
      id: "1",
      title: "Student Council",
      description: "Field trip necessities...",
      date: "09/10/24",
      bgColor: "#3B6064",
      chevronColor: "#2A4548",
    },
    {
      id: "2",
      title: "Homeroom",
      description: "Please submit your rep...",
      date: "10/10/24",
      bgColor: "#423B64",
      chevronColor: "#2E2A46",
    },
    {
      id: "3",
      title: "School",
      description: "Class meet H-4",
      date: "09/10/24",
      bgColor: "#8B5555",
      chevronColor: "#744747",
    },
  ];

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
  const renderItems = ({ item }) => (
    <View
      className="flex flex-row items-center justify-between"
      style={{
        backgroundColor: item.bgColor,
        paddingVertical: ms(14),
        borderRadius: ms(8),
        paddingLeft: ms(20),
        paddingRight: ms(10),
        marginBottom: ms(8),
        gap: ms(10),
      }}
    >
      <View className="flex flex-row items-center justify-between w-full">
        <View className="flex flex-row items-center" style={{ gap: ms(14) }}>
          <Image source={require("../../assets/images/Ellipse 1.png")} />
          <View style={{ marginRight: ms(20) }}>
            <ThemedText
              className="text-[#EBE2E2]"
              style={{
                fontSize: ms(8),
                lineHeight: ms(10),
                height: mvs(9),
              }}
            >
              {item.title}
            </ThemedText>
            <ThemedText
              className="text-white"
              type="pMedium"
              style={{ fontSize: ms(10) }}
            >
              {item.description}
            </ThemedText>
          </View>
        </View>
        <View
          className="flex flex-row items-center justify-between"
          style={{ gap: ms(10) }}
        >
          <ThemedText
            className="text-[#D5D5D5]"
            type="pMedium"
            style={{ fontSize: ms(10) }}
          >
            {item.date}
          </ThemedText>
          <Feather
            name="chevron-right"
            size={ms(15)}
            color={item.chevronColor}
          />
        </View>
      </View>
    </View>
  );
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
        className="bg-[#364958] h-full"
        scrollEnabled={!isFlatListScrolling} // Disable parent scrolling
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
                    className="text-white"
                    style={{ fontSize: ms(24), lineHeight: ms(30) }}
                    type="mBold"
                  >
                    Hello, {name}!
                  </ThemedText>
                  <ThemedText
                    className=" text-[#9FA3A7]"
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
                    <FlatList
                      data={datas}
                      renderItem={renderItems}
                      keyExtractor={(item) => item.id}
                      contentContainerStyle={{ gap: ms(1) }}
                      nestedScrollEnabled // Ensures FlatList handles its own scroll
                      onScrollBeginDrag={() => setIsFlatListScrolling(true)} // Disable ScrollView scrolling
                      onScrollEndDrag={() => setIsFlatListScrolling(false)} // Re-enable ScrollView scrolling
                      onMomentumScrollBegin={() => setIsFlatListScrolling(true)} // During momentum scrolling
                      onMomentumScrollEnd={() => setIsFlatListScrolling(false)} // After momentum scrolling
                    />
                  </View>
                </Shadow>

                <View>
                  <View
                    className="flex flex-row items-center justify-between w-full"
                    style={{ marginTop: ms(20), gap: ms(10) }}
                  >
                    <Shadow
                      distance={ms(2)}
                      startColor="rgba(0, 0, 0, 0.02)"
                      offset={[0, 2]}
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(106),
                          height: ms(106),
                          padding: ms(14),
                          borderRadius: ms(16),
                          position: "relative",
                        }}
                      >
                        <Svg
                          width="58"
                          height="96"
                          viewBox="0 0 59 96"
                          fill="none"
                          style={{ position: "absolute", top: ms(10) }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <Path
                            opacity="0.15"
                            d="M11.5073 8.32432C-12.3662 8.32432 -32.5398 28.402 -32.5398 52.1622C-32.5398 75.9223 -12.3662 96 11.5073 96C35.3858 96 55.5545 75.9223 55.5545 52.1622C55.5545 28.402 35.3858 8.32432 11.5073 8.32432ZM35.978 57.033H6.61321V27.8078H16.4015V47.2913H35.978V57.033ZM52.0895 21.5146L37.3581 6.90203L44.2687 0L59 14.6126L52.0895 21.5146ZM-21.3714 0.0146127L-14.4316 6.89228L-29.065 21.5049L-36 14.6224L-21.3714 0.0146127Z"
                            fill="#55828B"
                          />
                        </Svg>
                        <View className="flex flex-col gap-2">
                          <ThemedText type="mBold" style={{ fontSize: ms(12) }}>
                            Attend
                          </ThemedText>
                          <View>
                            <ThemedText
                              type="pSemiBold"
                              className="text-[#A9A9A9]"
                              style={{ fontSize: ms(12) }}
                            >
                              07:30
                            </ThemedText>
                            <TouchableOpacity
                              className="bg-[#3B6064] flex items-center justify-center"
                              style={{
                                borderRadius: ms(4),

                                padding: ms(5),
                              }}
                            >
                              <ThemedText
                                type="pMedium"
                                style={{ fontSize: ms(10), marginTop: ms(2) }}
                                className="text-center text-white"
                              >
                                Present
                              </ThemedText>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </Shadow>
                    <Shadow
                      distance={ms(2)}
                      startColor="rgba(0, 0, 0, 0.02)"
                      offset={[0, 2]}
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(106),
                          height: ms(106),
                          padding: ms(14),
                          borderRadius: ms(16),
                          position: "relative",
                        }}
                      >
                        <Svg
                          width="64"
                          height="96"
                          viewBox="0 0 79 96"
                          fill="none"
                          style={{ position: "absolute", top: ms(10) }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <G opacity="0.15">
                            <Path
                              d="M11.2984 28.1663C11.2984 27.2953 10.9508 26.4599 10.3319 25.844C9.71302 25.2281 8.87365 24.8821 7.99844 24.8821H-11.8016C-13.6199 24.8821 -15.1016 26.3534 -15.1016 28.1663V34.7348H11.2984V28.1663ZM-15.1016 41.3033H11.2984V51.1561H-15.1016V41.3033Z"
                              fill="#55828B"
                            />
                            <Path
                              d="M74.05 0H39.4C35.7349 0.0126713 32.2057 1.41761 29.5 3.9411C26.7943 1.41761 23.2651 0.0126713 19.6 0H-15.05C-16.3628 0 -17.6219 0.532336 -18.5502 1.4799C-19.4785 2.42747 -20 3.71264 -20 5.0527V80.8432C-20 82.1832 -19.4785 83.4684 -18.5502 84.416C-17.6219 85.3635 -16.3628 85.8959 -15.05 85.8959H13.4521C16.0765 85.9019 18.5922 86.9662 20.4514 88.8567L26.0004 94.5208C26.0449 94.5663 26.1043 94.5815 26.1488 94.6269C26.5745 95.0311 27.0497 95.3848 27.6041 95.6172H27.6141C28.8216 96.1276 30.1783 96.1276 31.3859 95.6172H31.3959C31.9502 95.3848 32.4254 95.0261 32.8511 94.6269C32.8957 94.5815 32.9551 94.5663 32.9996 94.5208L38.5486 88.8567C40.4078 86.9662 42.9235 85.9019 45.5479 85.8959H74.05C75.3628 85.8959 76.6219 85.3635 77.5502 84.416C78.4785 83.4684 79 82.1832 79 80.8432V5.0527C79 3.71264 78.4785 2.42747 77.5502 1.4799C76.6219 0.532336 75.3628 0 74.05 0ZM69.1 75.7905H45.5479C41.5923 75.8021 37.7293 77.0139 34.45 79.2718V15.1581C34.45 12.3741 36.6676 10.1054 39.4 10.1054H69.1V75.7905Z"
                              fill="#55828B"
                            />
                          </G>
                        </Svg>
                        <View className="flex flex-col " style={{ gap: ms(6) }}>
                          <View
                            className="flex flex-row items-center justify-between"
                            style={{ paddingRight: ms(2) }}
                          >
                            <ThemedText
                              type="mBold"
                              style={{ fontSize: ms(12) }}
                            >
                              Task's
                            </ThemedText>
                            <Svg
                              width="10"
                              height="10"
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
                            <ThemedText
                              type="pSemiBold"
                              className="text-[#A9A9A9]"
                              style={{ fontSize: ms(10), height: ms(12) }}
                            >
                              Total
                            </ThemedText>

                            <ThemedText
                              type="mBold"
                              style={{ fontSize: ms(40), lineHeight: ms(42) }}
                              className="text-black "
                            >
                              371
                            </ThemedText>
                          </View>
                        </View>
                      </View>
                    </Shadow>
                    <Shadow
                      distance={ms(2)}
                      startColor="rgba(0, 0, 0, 0.02)"
                      offset={[0, 2]}
                    >
                      <View
                        className="bg-white"
                        style={{
                          width: ms(106),
                          height: ms(106),
                          padding: ms(14),
                          borderRadius: ms(16),
                          position: "relative",
                        }}
                      >
                        <Svg
                          width="52"
                          height="93"
                          viewBox="0 0 63 93"
                          fill="none"
                          style={{ position: "absolute", top: ms(10) }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <G opacity="0.15">
                            <Path
                              d="M39.4106 59.8545C39.4106 58.6334 38.9131 57.4623 38.0275 56.5989C37.1419 55.7354 35.9408 55.2504 34.6884 55.2504H6.35503C3.75309 55.2504 1.63281 57.313 1.63281 59.8545V69.0629H39.4106V59.8545ZM1.63281 78.2712H39.4106V92.0837H1.63281V78.2712Z"
                              fill="#55828B"
                            />
                            <Path
                              d="M63 46.0417C63 32.3811 52.7669 21.0318 39.3889 18.831V13.8125C39.3889 6.19721 33.0328 0 25.2222 0H15.7778C7.96722 0 1.61111 6.19721 1.61111 13.8125V18.831C-11.7669 21.0318 -22 32.3811 -22 46.0417V82.875C-22 87.9534 -17.7642 92.0833 -12.5556 92.0833H-7.83333V59.8542C-7.83333 52.2389 -1.47722 46.0417 6.33333 46.0417H34.6667C42.4772 46.0417 48.8333 52.2389 48.8333 59.8542V92.0833H53.5556C58.7642 92.0833 63 87.9534 63 82.875V46.0417ZM11.0556 13.8125C11.0556 11.271 13.1758 9.20833 15.7778 9.20833H25.2222C26.4746 9.20833 27.6758 9.69341 28.5613 10.5569C29.4469 11.4203 29.9444 12.5914 29.9444 13.8125V18.4167H11.0556V13.8125Z"
                              fill="#55828B"
                            />
                          </G>
                        </Svg>
                        <View className="flex flex-col " style={{ gap: ms(6) }}>
                          <View
                            className="flex flex-row items-center justify-between"
                            style={{ paddingRight: ms(2) }}
                          >
                            <ThemedText
                              type="mBold"
                              style={{ fontSize: ms(12) }}
                            >
                              Class
                            </ThemedText>
                          </View>
                          <View className="flex flex-col ">
                            <ThemedText
                              type="pSemiBold"
                              className="text-[#A9A9A9]"
                              style={{ fontSize: ms(10), height: ms(14) }}
                            >
                              XII
                            </ThemedText>

                            <ThemedText
                              type="pBold"
                              style={{
                                fontSize: ms(36),
                                lineHeight: ms(40),
                                height: ms(26),
                              }}
                              className="text-black "
                            >
                              RPL
                            </ThemedText>
                            <ThemedText
                              className="text-[#A9A9A9] italic"
                              style={{ fontSize: ms(10) }}
                            >
                              Class 4B
                            </ThemedText>
                          </View>
                        </View>
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
    marginBottom: "20@ms",
    backgroundColor: "#364958",
    gap: "8@ms",
    paddingHorizontal: "24@ms",
  },
});
