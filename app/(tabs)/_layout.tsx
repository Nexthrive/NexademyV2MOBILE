import { Tabs } from "expo-router";
import React from "react";
import { Platform, Image } from "react-native";
import { SvgUri } from "react-native-svg";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import "../../global.css";
import HomeIcon from "@/assets/icons/Vector.svg";
import AssignmentIcon from "@/assets/icons/Book.svg";
import { ThemedText } from "@/components/ThemedText";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 70, // Increase the height of the tab bar
            paddingBottom: 10, // Adjust spacing inside the tab bar
            paddingTop: 10, // Add padding to ensure the content is centered
            backgroundColor: colorScheme === "light" ? "#000" : "white",
          },
          default: {
            height: 70, // Increase the height of the tab bar
            paddingBottom: 10, // Adjust spacing inside the tab bar
            paddingTop: 10, // Add padding to ensure the content is centered
            backgroundColor: colorScheme === "light" ? "#000" : "white",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => (
            <ThemedText
              type="default"
              style={{ color: focused ? "#3B6064" : "#CECECE" }}
            >
              Home
            </ThemedText>
          ),
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              width={focused ? 38 : 20}
              height={focused ? 38 : 20}
              color={focused ? "#3B6064" : "#CECECE"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: ({ focused }) => (
            <ThemedText
              type="default"
              style={{ color: focused ? "#3B6064" : "#CECECE" }}
            >
              Assignments
            </ThemedText>
          ),
          tabBarIcon: ({ focused }) => (
            <AssignmentIcon
              width={focused ? 38 : 20}
              height={focused ? 38 : 20}
              color={focused ? "#3B6064" : "#CECECE"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
