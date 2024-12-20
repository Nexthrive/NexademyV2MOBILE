import {
  Image,
  StyleSheet,
  Platform,
  Text,
  Button,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Feather } from "@expo/vector-icons"; // Import Expo Icons
import { scaledFontSize } from "../../components/scaleHelper";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    console.log("Logged out");
  };
  const name = "Qalbi";
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      className="bg-[#fcffff]  h-full"
    >
      {/* <Button title="Logout" onPress={handleLogout} /> */}

      <ThemedView className="px-6 mt-16" style={styles.titleContainer}>
        <View>
          <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-col ">
              <ThemedText className="text-2xl leading-none" type="mBold">
                Hello, {name}!
              </ThemedText>
              <ThemedText className="text-sm text-[#BDCACA]">
                what should we do today?
              </ThemedText>
            </View>
            <Shadow
              offset={[0, 4]}
              distance={10}
              startColor="rgba(213, 226, 226, 0.25)"
              containerStyle={{
                width: 72,
                height: 72,
                borderRadius: 36,
                overflow: "visible",
              }}
            >
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 36,
                  borderWidth: 8,
                  borderColor: "#FFFFFF",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/images/face.jpg")}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                  }}
                />
              </View>
            </Shadow>
          </View>
          <Shadow
            offset={[0, 4]}
            distance={10}
            startColor="rgba(213, 226, 226, 0.15)"
            containerStyle={{
              width: "100%",
              borderRadius: 16,
            }}
          >
            <View className="w-full p-5 mt-5 bg-white rounded">
              <View className="flex flex-row items-center justify-between gap-20 mb-2 ">
                <ThemedText className="text-xl" type="mBold">
                  Announcement
                </ThemedText>
                <Feather name="chevron-right" size={20} color="#000" />
              </View>
              <View className="flex flex-col gap-2">
                <View className="bg-[#55828b] rounded flex flex-row items-center p-5 justify-between">
                  <Image
                    source={require("../../assets/images/Ellipse 1.png")}
                  />
                  <View>
                    <ThemedText className="text-[#EBE2E2] text-xs ">
                      School
                    </ThemedText>
                    <ThemedText className="text-sm text-white " type="pMedium">
                      Field Trip necessities...
                    </ThemedText>
                  </View>
                  <View className="flex flex-row items-center justify-between gap-3">
                    <ThemedText
                      className="text-[#D5D5D5] text-xs"
                      type="pMedium"
                    >
                      12/10/24
                    </ThemedText>
                    <Feather name="chevron-right" size={15} color="#476C74" />
                  </View>
                </View>
                <View className="bg-[#55638B] rounded flex flex-row items-center p-5 justify-between">
                  <View className="flex flex-row gap-4">
                    <Image
                      source={require("../../assets/images/Ellipse 1.png")}
                    />
                    <View className="">
                      <ThemedText className="text-[#EBE2E2] text-xs ">
                        Homeroom
                      </ThemedText>
                      <ThemedText
                        className="text-sm text-white "
                        type="pMedium"
                      >
                        Please submit your r...
                      </ThemedText>
                    </View>
                  </View>
                  <View className="flex flex-row items-center justify-between gap-3">
                    <ThemedText
                      className="text-[#D5D5D5] text-xs"
                      type="pMedium"
                    >
                      10/10/24
                    </ThemedText>
                    <Feather name="chevron-right" size={15} color="#465275" />
                  </View>
                </View>
                <View className="bg-[#8B5555] rounded flex flex-row items-center p-5 justify-between">
                  <View className="flex flex-row gap-4">
                    <Image
                      source={require("../../assets/images/Ellipse 1.png")}
                    />
                    <View className="">
                      <ThemedText className="text-[#EBE2E2] text-xs ">
                        Student Council
                      </ThemedText>
                      <ThemedText
                        className="text-sm text-white "
                        type="pMedium"
                      >
                        Class meet H-4
                      </ThemedText>
                    </View>
                  </View>
                  <View className="flex flex-row items-center justify-between gap-3">
                    <ThemedText
                      className="text-[#D5D5D5] text-xs"
                      type="pMedium"
                    >
                      09/10/24
                    </ThemedText>
                    <Feather name="chevron-right" size={15} color="#744747" />
                  </View>
                </View>
              </View>
            </View>
          </Shadow>
          <View className="flex flex-row w-full mt-5">
            {/* Left Column */}
            <View className="flex flex-col w-[40%] gap-4">
              <Shadow
                offset={[0, 4]}
                distance={10}
                startColor="rgba(213, 226, 226, 0.15)"
                containerStyle={{
                  borderRadius: 16,
                }}
              >
                <View className="flex items-center justify-center px-5 pt-5 pb-3 bg-white rounded">
                  <View>
                    <View className="flex flex-row items-center w-full gap-10 mb-2">
                      <ThemedText type="mBold" className="text-base">
                        Tasks
                      </ThemedText>
                      <MaterialCommunityIcons
                        name="book-open-blank-variant"
                        size={15}
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
                      className="text-black text-[40px] leading-tight "
                    >
                      241
                    </ThemedText>
                  </View>
                </View>
              </Shadow>

              <Shadow
                offset={[0, 4]}
                distance={10}
                startColor="rgba(213, 226, 226, 0.15)"
                containerStyle={{
                  borderRadius: 16,
                }}
              >
                <View className="flex items-center justify-center px-5 pt-5 pb-3 bg-white rounded">
                  <View>
                    <View className="flex flex-row items-center w-full gap-10 mb-2">
                      <ThemedText type="mBold" className="text-base">
                        Class
                      </ThemedText>
                      <MaterialCommunityIcons
                        name="book-open-blank-variant"
                        size={15}
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
                      className="text-black text-[32px] leading-tight "
                    >
                      OTKP
                    </ThemedText>
                    <ThemedText className="text-[#C0C0C0] leading-none italic text-sm">
                      Class 4B
                    </ThemedText>
                  </View>
                </View>
              </Shadow>

              <Shadow
                offset={[0, 4]}
                distance={10}
                startColor="rgba(213, 226, 226, 0.15)"
                containerStyle={{
                  borderRadius: 16,
                }}
              >
                <View className="flex items-center justify-center px-5 pt-5 pb-3 bg-white rounded">
                  <View>
                    <View className="flex flex-row items-center w-full mb-2 gap-7">
                      <ThemedText type="mBold" className="text-base">
                        Attend
                      </ThemedText>
                      <MaterialCommunityIcons
                        name="book-open-blank-variant"
                        size={15}
                        color="#55828B"
                      />
                    </View>
                    <ThemedText
                      type="pMedium"
                      className="text-[#CECECE] text-sm"
                    >
                      07:30
                    </ThemedText>
                    <TouchableOpacity className="bg-[#3B6064] rounded py-3">
                      <ThemedText
                        type="pMedium"
                        className="text-xs text-center text-white"
                      >
                        Present
                      </ThemedText>
                    </TouchableOpacity>
                  </View>
                </View>
              </Shadow>
            </View>

            {/* Right Column */}
            <View className="w-[58%]">
              <Shadow
                offset={[0, 4]}
                distance={10}
                startColor="rgba(213, 226, 226, 0.15)"
                containerStyle={{
                  borderRadius: 16,
                }}
              >
                <View className="p-5 bg-white rounded">
                  <View className="flex flex-row items-center justify-between">
                    <ThemedText className="text-lg" type="mBold">
                      Today's Schedule
                    </ThemedText>
                    <Feather name="chevron-right" size={20} color="#000" />
                  </View>
                  <View className="flex flex-col gap-2">
                    <View className="bg-[#F2F2F2] rounded flex flex-row items-center p-5 justify-between">
                      <View>
                        <ThemedText className="text-[#EBE2E2] text-[10px] italic">
                          Agus Slowhend, S.Bdy.
                        </ThemedText>
                        <ThemedText
                          className="text-[#C0C0C0] text-xs "
                          type="pSemiBold"
                        >
                          Seni Budaya
                        </ThemedText>
                      </View>
                      <ThemedText
                        className="text-[#C0C0C0] text-xs "
                        type="pSemiBold"
                      >
                        07:00
                      </ThemedText>
                    </View>
                  </View>
                </View>
              </Shadow>
            </View>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
