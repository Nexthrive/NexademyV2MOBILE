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

export default function HomeScreen() {
  const [isFlatListScrolling, setIsFlatListScrolling] = useState(false);

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
      className={`flex flex-row items-center ${
        item.isHighlighted ? "bg-[#55828B]" : "bg-[#F2F2F2]"
      } `}
      style={{
        borderRadius: ms(4),
        padding: ms(13),
        width: ms(160),
      }}
    >
      <View className="" style={{ width: ms(110) }}>
        <ThemedText
          className={`font-light italic ${
            item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
          }`}
          style={{ fontSize: ms(8) }}
        >
          {item.name}
        </ThemedText>
        <ThemedText
          className={`${
            item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
          }`}
          type="pSemiBold"
          style={{ fontSize: ms(10), height: mvs(13) }}
        >
          {item.subject}
        </ThemedText>
      </View>
      <ThemedText
        className={`${
          item.isHighlighted ? "text-[#FFFFFF]" : "text-[#C0C0C0]"
        }`}
        type="pSemiBold"
        style={{ fontSize: ms(10) }}
      >
        {item.time}
      </ThemedText>
    </View>
  );
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    console.log("Logged out");
  };
  const name = "Qalbi";
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      className="bg-[#fcffff]  h-full"
      onStartShouldSetResponder={() => !isFlatListScrolling}
      onMoveShouldSetResponder={() => !isFlatListScrolling}
    >
      {/* <Button title="Logout" onPress={handleLogout} /> */}

      <ThemedView style={styles.titleContainer}>
        <View className="flex flex-col items-center justify-between w-full gap-3">
          <View
            className="flex flex-col items-center justify-center"
            style={{ maxWidth: ms(500) }}
          >
            <View className="flex flex-row items-center justify-between w-full">
              <View className="flex flex-col ">
                <ThemedText
                  className=""
                  style={{ fontSize: ms(24), lineHeight: ms(30) }}
                  type="mBold"
                >
                  Hello, {name}!
                </ThemedText>
                <ThemedText
                  className=" text-[#BDCACA]"
                  style={{ fontSize: ms(14) }}
                >
                  what should we do today?
                </ThemedText>
              </View>

              <View className="flex flex-row items-center justify-between gap-3">
                <Shadow
                  offset={[0, ms(4)]}
                  distance={ms(10)}
                  startColor="rgba(213, 226, 226, 0.25)"
                  containerStyle={{
                    width: ms(72),
                    height: ms(72),
                    borderRadius: ms(36),
                    overflow: "visible",
                  }}
                >
                  <View
                    style={{
                      width: ms(72),
                      height: ms(72),
                      borderRadius: ms(36),
                      borderWidth: ms(8),
                      borderColor: "#FFFFFF",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/face.jpg")}
                      style={{
                        width: ms(56),
                        height: mvs(56),
                        borderRadius: ms(28),
                      }}
                    />
                  </View>
                </Shadow>
              </View>
            </View>

            <Shadow
              offset={[0, ms(4)]}
              distance={ms(10)}
              startColor="rgba(213, 226, 226, 0.15)"
              containerStyle={{
                width: "100%",
                borderRadius: ms(16),
              }}
            >
              <View
                className="w-full p-5 mt-5 bg-white rounded"
                style={{ height: mvs(260) }}
              >
                <View
                  className="flex flex-row items-center justify-between"
                  style={{
                    rowGap: ms(20),
                    columnGap: ms(20),
                    marginBottom: ms(2),
                  }}
                >
                  <ThemedText
                    className=""
                    type="mBold"
                    style={{ fontSize: ms(24) }}
                  >
                    Announcement
                  </ThemedText>
                  <Feather name="chevron-right" size={ms(20)} color="#000" />
                </View>
                <View className="flex flex-col " style={{ gap: ms(8) }}>
                  <View
                    className="bg-[#55828b] rounded flex flex-row justify-between items-center "
                    style={{
                      paddingBlock: ms(14),
                      paddingInline: ms(22),
                      gap: ms(10),
                    }}
                  >
                    <View className="flex flex-row items-center gap-4">
                      <Image
                        source={require("../../assets/images/Ellipse 1.png")}
                      />
                      <View style={{ marginRight: ms(20) }}>
                        <ThemedText
                          className="text-[#EBE2E2]  "
                          style={{ fontSize: ms(8) }}
                        >
                          School
                        </ThemedText>
                        <ThemedText
                          className="text-white "
                          type="pMedium"
                          style={{ fontSize: ms(10) }}
                        >
                          Field Trip necessities...
                        </ThemedText>
                      </View>
                    </View>
                    <View className="flex flex-row items-center justify-between gap-3">
                      <ThemedText
                        className="text-[#D5D5D5] "
                        type="pMedium"
                        style={{ fontSize: ms(10) }}
                      >
                        12/10/24
                      </ThemedText>
                      <Feather
                        name="chevron-right"
                        size={ms(15)}
                        color="#465275"
                      />
                    </View>
                  </View>

                  <View
                    className="bg-[#55638B] rounded flex flex-row justify-between items-center "
                    style={{
                      paddingBlock: ms(14),
                      paddingInline: ms(22),
                      gap: ms(10),
                    }}
                  >
                    <View className="flex flex-row items-center gap-4">
                      <Image
                        source={require("../../assets/images/Ellipse 1.png")}
                      />
                      <View style={{ marginRight: ms(20) }}>
                        <ThemedText
                          className="text-[#EBE2E2]  "
                          style={{ fontSize: ms(8) }}
                        >
                          Homeroom
                        </ThemedText>
                        <ThemedText
                          className="text-white "
                          type="pMedium"
                          style={{ fontSize: ms(10) }}
                        >
                          Please submit your r...
                        </ThemedText>
                      </View>
                    </View>
                    <View className="flex flex-row items-center justify-between gap-3">
                      <ThemedText
                        className="text-[#D5D5D5] "
                        type="pMedium"
                        style={{ fontSize: ms(10) }}
                      >
                        12/10/24
                      </ThemedText>
                      <Feather
                        name="chevron-right"
                        size={ms(15)}
                        color="#465275"
                      />
                    </View>
                  </View>
                  <View
                    className="bg-[#8B5555] rounded flex flex-row items-center "
                    style={{
                      paddingBlock: ms(14),
                      paddingInline: ms(22),
                      gap: ms(10),
                    }}
                  >
                    <View className="flex flex-row justify-between w-full">
                      <View className="flex flex-row items-center gap-4">
                        <Image
                          source={require("../../assets/images/Ellipse 1.png")}
                        />
                        <View style={{ marginRight: ms(20) }}>
                          <ThemedText
                            className="text-[#EBE2E2]  "
                            style={{ fontSize: ms(8) }}
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
            <View
              className="flex flex-row w-full "
              style={{
                gap: ms(10),
                marginTop: ms(20),

                maxHeight: mvs(360),
              }}
            >
              {/* Left Column */}
              <View className="flex flex-col" style={{ gap: ms(14) }}>
                <Shadow
                  offset={[0, ms(4)]}
                  distance={ms(10)}
                  startColor="rgba(213, 226, 226, 0.15)"
                  containerStyle={{
                    borderRadius: ms(16),
                  }}
                >
                  <View
                    className="flex items-center justify-center bg-white"
                    style={{ padding: ms(16), borderRadius: ms(4) }}
                  >
                    <View>
                      <View
                        className="flex flex-row items-center w-full "
                        style={{ gap: ms(40) }}
                      >
                        <ThemedText
                          type="mBold"
                          className=""
                          style={{ fontSize: ms(16) }}
                        >
                          Tasks
                        </ThemedText>
                        <MaterialCommunityIcons
                          name="book-open-blank-variant"
                          size={ms(12)}
                          color="#55828B"
                        />
                      </View>
                      <ThemedText
                        type="pSemiBold"
                        className="text-[#C0C0C0] text-sm"
                      >
                        Total
                      </ThemedText>
                      <ThemedText
                        type="pSemiBold"
                        className="text-black "
                        style={{
                          fontSize: ms(40),
                          lineHeight: ms(46),
                          height: mvs(32),
                        }}
                      >
                        241
                      </ThemedText>
                    </View>
                  </View>
                </Shadow>

                <Shadow
                  offset={[0, ms(4)]}
                  distance={ms(10)}
                  startColor="rgba(213, 226, 226, 0.15)"
                  containerStyle={{
                    borderRadius: ms(16),
                  }}
                >
                  <View
                    className="flex items-center justify-center bg-white"
                    style={{ padding: ms(16), borderRadius: ms(4) }}
                  >
                    <View>
                      <View
                        className="flex flex-row items-center w-full "
                        style={{ gap: ms(40) }}
                      >
                        <ThemedText
                          type="mBold"
                          className=""
                          style={{ fontSize: ms(16) }}
                        >
                          Class
                        </ThemedText>
                        <MaterialCommunityIcons
                          name="book-open-blank-variant"
                          size={ms(12)}
                          color="#55828B"
                        />
                      </View>
                      <ThemedText
                        type="pSemiBold"
                        className="text-[#C0C0C0] text-sm"
                      >
                        XII
                      </ThemedText>
                      <ThemedText
                        type="pSemiBold"
                        className="text-black "
                        style={{
                          fontSize: ms(32),
                          lineHeight: ms(38),
                          height: mvs(30),
                        }}
                      >
                        OTKP
                      </ThemedText>
                      <ThemedText
                        className="text-[#C0C0C0] italic"
                        style={{
                          fontSize: ms(12),
                        }}
                      >
                        Class 4B
                      </ThemedText>
                    </View>
                  </View>
                </Shadow>

                <Shadow
                  offset={[0, ms(4)]}
                  distance={ms(10)}
                  startColor="rgba(213, 226, 226, 0.15)"
                  containerStyle={{
                    borderRadius: ms(16),
                  }}
                >
                  <View
                    className="flex items-center justify-center bg-white"
                    style={{ padding: ms(16), borderRadius: ms(4) }}
                  >
                    <View>
                      <View
                        className="flex flex-row items-center w-full "
                        style={{ gap: ms(26), marginBottom: ms(8) }}
                      >
                        <ThemedText
                          type="mBold"
                          className=""
                          style={{ fontSize: ms(16), lineHeight: ms(15) }}
                        >
                          Attend
                        </ThemedText>
                        <MaterialCommunityIcons
                          name="book-open-blank-variant"
                          size={ms(12)}
                          color="#55828B"
                        />
                      </View>
                      <ThemedText
                        type="pMedium"
                        className="text-[#CECECE] "
                        style={{ fontSize: ms(12) }}
                      >
                        07:30
                      </ThemedText>
                      <TouchableOpacity
                        className="bg-[#3B6064] rounded "
                        style={{ paddingVertical: ms(7) }}
                      >
                        <ThemedText
                          type="pMedium"
                          className="text-center text-white "
                          style={{ fontSize: ms(12), height: mvs(15) }}
                        >
                          Present
                        </ThemedText>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Shadow>
              </View>

              {/* Right Column */}
              <View style={{ height: "100%" }}>
                <Shadow
                  offset={[0, 4]}
                  distance={10}
                  startColor="rgba(213, 226, 226, 0.15)"
                  containerStyle={{
                    borderRadius: ms(16),
                  }}
                >
                  <View>
                    <View
                      className="w-full h-full bg-white"
                      style={{
                        padding: ms(12),
                        paddingBottom: ms(15),
                        borderRadius: ms(4),
                      }}
                    >
                      <View
                        className="flex flex-row items-center justify-between"
                        style={{ gap: ms(10), marginBottom: ms(10) }}
                      >
                        <ThemedText
                          className=""
                          type="pBold"
                          style={{ fontSize: ms(15) }}
                        >
                          Today's Schedule
                        </ThemedText>
                        <Feather
                          name="chevron-right"
                          size={ms(15)}
                          color="#000"
                        />
                      </View>

                      {/* Wrap the content that can overflow in a ScrollView */}
                      <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ flexGrow: 1, gap: ms(8) }}
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
                </Shadow>
              </View>
            </View>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "64@ms",
    marginBottom: "20@ms",

    gap: "8@ms",
    paddingHorizontal: "24@ms",
  },
});
