import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/components/ThemedText";
import AssignmentIcon from "@/assets/icons/Book.svg";
import HomeIcon from "@/assets/icons/Vector.svg";
import TemplateScreen from "./template";
import IndexScreen from "./index";
import ExploreScreen from "./explore";
import { ms, mvs } from "react-native-size-matters";

const Tab = createMaterialTopTabNavigator();

interface AnimatedTabItemProps {
  focused: boolean;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const AnimatedTabItem: React.FC<AnimatedTabItemProps> = ({
  focused,
  IconComponent,
  label,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.timing(scale, {
      toValue: focused ? 1.2 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={[
        styles.iconAndLabelContainer,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <IconComponent
        width={ms(20)}
        height={ms(20)}
        color={focused ? "#3B6064" : "#CECECE"}
      />
      <ThemedText
        type="default"
        style={{
          color: focused ? "#3B6064" : "#CECECE",
          fontSize: ms(10),
        }}
      >
        {label}
      </ThemedText>
    </Animated.View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const renderTabIconAndLabel = (
    IconComponent: React.FC<React.SVGProps<SVGSVGElement>>,
    label: string,
    focused: boolean
  ) => (
    <AnimatedTabItem
      focused={focused}
      IconComponent={IconComponent}
      label={label}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.shadowContainer}>
        <Tab.Navigator
          tabBarPosition="bottom"
          screenOptions={{
            tabBarActiveTintColor:
              Colors[colorScheme ?? "light"].tabIconSelected,

            tabBarInactiveTintColor:
              Colors[colorScheme ?? "light"].tabIconDefault,
            swipeEnabled: true,
            tabBarStyle: {
              height: mvs(70),
              paddingBottom: 0,
              paddingTop: ms(15),
              backgroundColor: "white",
            },
            tabBarIndicatorStyle: {
              backgroundColor: Colors[colorScheme ?? "light"].tabIconSelected,
            },
          }}
        >
          <Tab.Screen
            name="template"
            component={TemplateScreen}
            options={{
              tabBarLabel: ({ focused }) =>
                renderTabIconAndLabel(AssignmentIcon, "Assignments", focused),
            }}
          />
          <Tab.Screen
            name="index"
            component={IndexScreen}
            options={{
              tabBarLabel: ({ focused }) =>
                renderTabIconAndLabel(HomeIcon, "Home", focused),
            }}
          />
          <Tab.Screen
            name="explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: ({ focused }) =>
                renderTabIconAndLabel(AssignmentIcon, "Assignments", focused),
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  shadowContainer: {
    flex: 1,
    backgroundColor: "white",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 8,
  },
});
