import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Animated,
  ScrollView,
  Text,
  Modal,
  Pressable,
} from "react-native";
import { MotiView, MotiText } from "moti";

import { Shadow } from "react-native-shadow-2";
import { Feather } from "@expo/vector-icons"; // Import Expo Icons
import { useState, useMemo, useCallback } from "react";
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
import LoadingOverlay from "@/components/LoadingOverlay";
import {
  faSortAmountAsc,
  faSortAmountDesc,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";
import { FaSortAmountUp } from "@fortawesome/free-solid-svg-icons";
const statusColor = {
  unfinished: "#3E354F", // Add # for hex colors
  done: "#3B6064",
  due: "#C99F2C",
  overdue: "#8C3838",
};
const subjectData = [
  {
    id: "1",
    title: "Me Wanna Cleeep",
    description: "Matematika",

    date1: "5/10/24",
    date2: "10/10/24",
    stripColor: "#493B64",
    status: "Done",
    grade: "95",
    gradeColor: "#3E354F",
    statusColor: statusColor.done,
    subTextColor: "#A4A4A4",
    textColor: "#000000",
    subsubTextColor: "FEFEFE",
  },
  {
    id: "4",
    title: "Me Wanna Cleeep",
    description: "PPKN",

    date1: "5/10/24",
    date2: "10/10/24",
    stripColor: "#643B3B",
    status: "Done",
    grade: "95",
    gradeColor: "#4F3535",
    statusColor: statusColor.done,
    subTextColor: "#A4A4A4",
    textColor: "#000000",
    subsubTextColor: "FEFEFE",
  },
  {
    id: "2",
    title: "Me Wanna Cleeep",
    description: "Matematika",
    date1: "5/10/24",
    date2: "10/10/24",
    stripColor: "#493B64",
    status: "Done",
    grade: "95",
    gradeColor: "#3E354F",
    statusColor: statusColor.done,
    subTextColor: "#A4A4A4",
    textColor: "#000000",
    subsubTextColor: "FEFEFE",
  },
  {
    id: "3",
    title: "Me Wanna Cleeep",
    description: "Matematika",
    date1: "5/10/24",
    date2: "10/10/24",
    stripColor: "#493B64",
    status: "Due",
    grade: "",
    gradeColor: "#3E354F",
    statusColor: statusColor.due,
    subTextColor: "#A4A4A4",
    textColor: "#000000",
    subsubTextColor: "FEFEFE",
  },
];
const SubjectCard = ({ item }) => (
  <View style={{ marginBottom: ms(16) }}>
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
              {item.title}
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
              {item.description}
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
          className="flex flex-row items-center justify-between "
          style={{
            backgroundColor: item.stripColor,
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
                {item.date1} | {item.date2}
              </ThemedText>
            </View>
          </View>
          <View className="flex flex-row items-center " style={{ gap: ms(6) }}>
            {item.grade && (
              <View
                className=""
                style={{
                  paddingInline: ms(14),
                  paddingBlock: ms(4),
                  borderRadius: ms(12),
                  backgroundColor: item.gradeColor,
                }}
              >
                <ThemedText
                  type="pMedium"
                  style={{ fontSize: ms(8), color: "#FFFFFF" }}
                >
                  {item.grade}
                </ThemedText>
              </View>
            )}

            <View
              className=""
              style={{
                paddingInline: ms(14),
                paddingBlock: ms(4),
                borderRadius: ms(12),
                backgroundColor: item.statusColor,
              }}
            >
              <ThemedText
                type="pMedium"
                style={{ fontSize: ms(8), color: "#FFFFFF" }}
              >
                {item.status}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
);
const ModalContent = React.memo(({ popupData, onClose }) => {
  const filteredSubjectData = subjectData.filter(
    (item) => item.description === popupData.title
  );

  return (
    <MotiView
      from={{ translateY: -100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 50 }}
      style={{
        flex: 1,
        backgroundColor: popupData.bgColor,
        padding: ms(20),
        paddingBlock: ms(50),
      }}
    >
      {/* <View
        shouldRasterizeIOS
        renderToHardwareTextureAndroid
        style={{
          position: "absolute",
          zIndex: 1,
          right: 0,
          left: 0,
          marginLeft: ms(12),
        }}
      >
        <Svg width={900} height={900} viewBox="0 0 900 900" fill="none">
          {Array.from({ length: 30 }, (_, rowIndex) =>
            [
              2.82655, 42.4023, 81.9672, 121.543, 161.108, 200.684, 240.259,
              279.824, 319.4, 358.976, 398.541, 438.116, 477.691, 517.266,
            ].map((cx) => (
              <Ellipse
                key={`${cx}-${rowIndex}`}
                cx={cx}
                cy={rowIndex * 40 + 2.86667}
                rx={2.82655}
                ry={2.86667}
                fill={popupData.ellipseColor}
              />
            ))
          )}
        </Svg>
      </View> */}
      <View
        className="flex flex-col "
        style={{ position: "relative", zIndex: 2 }}
      >
        <View className="flex flex-row items-center justify-between">
          <MotiText
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 200 }}
            style={{
              fontSize: ms(30),
              height: ms(33),
              fontFamily: "Montserrat-SemiBold",
              color: popupData.textColor,
            }}
          >
            {popupData.title}
          </MotiText>
          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor: "#FFF",
              paddingBlock: ms(1),
              paddingInline: ms(7),

              borderRadius: ms(8),
            }}
          >
            <Text style={{ color: "#000" }}>
              <MaterialCommunityIcons name="arrow-left" size={ms(20)} />
            </Text>
          </TouchableOpacity>
        </View>
        <MotiText
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 300 }}
          style={{
            color: popupData.subTextColor,
            marginTop: ms(8),
            fontSize: ms(12),
          }}
        >
          {popupData.description}
        </MotiText>
      </View>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 400 }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: ms(18),
        }}
      >
        <View
          style={{
            width: ms(28),
            height: mvs(27),
            borderRadius: ms(300),
            borderWidth: ms(1),
            borderColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={popupData.image}
            style={{
              width: ms(26),
              height: mvs(25),
              borderRadius: ms(13),
            }}
          />
        </View>
        <MotiText
          style={{
            fontStyle: "italic",
            color: popupData.textColor,
            fontSize: ms(10),
          }}
        >
          {popupData.teacher}
        </MotiText>
      </MotiView>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 400 }}
        style={{
          paddingBottom: ms(60),
        }}
      >
        <ScrollView
          style={{
            marginTop: ms(24),
            position: "relative",
            zIndex: 2,
          }}
        >
          <View>
            {filteredSubjectData.map((item) => (
              <SubjectCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </MotiView>
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 400 }}
        className="flex flex-row items-center justify-center bg-white "
        style={{
          width: "74%",
          padding: ms(10),
          borderRadius: ms(12),
          position: "absolute",
          left: ms(70),
          right: 0,
          bottom: ms(30),
        }}
      >
        <View className="flex flex-row justify-center" style={{ gap: ms(18) }}>
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
            <MaterialCommunityIcons name="close" size={30} color="#3B6064" />
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
            <MaterialCommunityIcons
              name="check-all"
              size={26}
              color="#3B6064"
            />
          </View>
          <View
            className=""
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
      </MotiView>
    </MotiView>
  );
});
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
  const statusColor = {
    unfinished: "#3E354F", // Add # for hex colors
    done: "#3B6064",
    due: "#C99F2C",
    overdue: "#8C3838",
  };

  const assignData = [
    {
      id: "1",
      title: "Kerjakan buku halaman 12 ba...",
      description: "Matematika",

      date1: "5/10/24",
      date2: "10/10/24",
      stripColor: "#493B64",
      status: "Unfinished",
      statusColor: statusColor.unfinished,
      subTextColor: "#A4A4A4",
      textColor: "#000000",
      subsubTextColor: "FEFEFE",
    },
    {
      id: "2",
      title: "HAM is overrated AF",
      description: "PPKN",

      date1: "5/10/24",
      date2: "10/10/24",
      stripColor: "#643B3B",
      status: "Due",
      statusColor: statusColor.due,
      subTextColor: "#A4A4A4",
      textColor: "#000000",
      subsubTextColor: "FEFEFE",
    },

    {
      id: "3",
      title: "Teks Puisi",
      description: "Bahasa Indonesia",

      date1: "5/10/24",
      date2: "10/10/24",
      stripColor: "#EC9D1D",
      status: "Overdue",
      statusColor: statusColor.overdue,
      subTextColor: "#A4A4A4",
      textColor: "#000000",
      subsubTextColor: "FEFEFE",
    },
  ];

  const datas = [
    {
      id: "1",
      title: "Matematika",
      description: "24 Total task's",
      teacher: `Aldi "Azhar" Yusron, S.Pd.`,
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
      teacher: `Aldi "Azhar" Yusron, S.Pd.`,
      image: require("../../assets/images/face.jpg"),
      bgColor: "#643B3B",
      dotsColor: "#AA8181",
      textColor: "#FFFFFF",
      subTextColor: "#C6C6C6",
      ellipseColor: "#4A2323",
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);

  const [popupData, setPopupData] = useState({});
  const touchableRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const openPopup = useCallback(
    (
      bgColor: string,
      title: string,
      description: string,
      teacher: string,
      image: any,
      textColor: string,
      subTextColor: string,
      ellipseColor: string
    ) => {
      if (touchableRef.current) {
        touchableRef.current.measure((fx, fy, width, height, px, py) => {
          setPosition({ x: px, y: py, width, height });
          setPopupData({
            bgColor,
            title,
            description,
            teacher,
            image,
            textColor,
            subTextColor,
            ellipseColor,
          });
          setTimeout(() => {
            setIsModalVisible(true);
            setTimeout(() => setIsModalLoading(false), 300);
          }, 500);
        });
      }
    },
    [setPosition, setIsModalVisible, setPopupData]
  );
  const closePopup = useCallback(() => {
    setIsModalLoading(true); // Show loading when starting to close
    setTimeout(() => {
      setIsModalVisible(false);
      setIsModalLoading(false); // Hide loading after modal is closed
    }, 300); // Reduced delay for faster transition
  }, []);
  const AssignCard = ({ item }) => (
    <View style={{ marginBottom: ms(16) }}>
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
                {item.title}
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
                {item.description}
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
            className="flex flex-row items-center justify-between "
            style={{
              backgroundColor: item.stripColor,
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
                  {item.date1}
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
                  {item.date2}
                </ThemedText>
              </View>
            </View>
            <View
              className=""
              style={{
                paddingInline: ms(14),
                paddingBlock: ms(4),
                borderRadius: ms(12),
                backgroundColor: item.statusColor,
              }}
            >
              <ThemedText
                type="pMedium"
                style={{ fontSize: ms(8), color: "#FFFFFF" }}
              >
                {item.status}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  const Card = ({ item }) => (
    <View style={{ width: ms(250) }}>
      <View className="flex flex-row justify-between ">
        <Svg
          width="163"
          height="30"
          className="absolute z-10"
          viewBox="0 0 163 30"
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
      <Pressable
        className="relative w-full -z-10"
        ref={touchableRef}
        onPress={() => {
          setIsModalLoading(true);
          openPopup(
            item.bgColor,
            item.title,
            item.description,
            item.teacher,
            item.image,
            item.textColor,
            item.subTextColor,
            item.ellipseColor
          );
        }}
      >
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
            <Svg width={800} height={50} viewBox="0 0 800 50" fill="none">
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
            <View
              className="flex flex-row items-center "
              style={{ gap: ms(10) }}
            >
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
      </Pressable>
    </View>
  );
  const memoizedPopupData = useMemo(() => popupData, [popupData]);

  return (
    <>
      {isModalLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2000, // Higher than modal
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)", // Semi-transparent background
          }}
        >
          <LoadingOverlay visible={isModalLoading} />
        </View>
      )}
      {isModalVisible && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0, // Leave space for tab bar (adjust based on your tab bar height)
            zIndex: 1000, // Ensure this is higher than other elements
            display: isModalVisible ? "flex" : "none", // Show/hide using display
          }}
        >
          <ModalContent
            popupData={memoizedPopupData}
            onClose={() => {
              setIsModalLoading(false);
              closePopup();
            }}
          />
        </View>
      )}
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
          <View style={{ paddingBottom: ms(50) }}>
            {assignData.map((item) => (
              <AssignCard key={item.id} item={item} />
            ))}
          </View>
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
}
