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
import { TransitionPresets } from "@react-navigation/stack";

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
      toValue: focused ? 1.4 : 1,
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
          fontSize: ms(8),
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
      <Tab.Navigator
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: true,
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS, // Smooth animation preset
          tabBarScrollEnabled: true,
          tabBarStyle: {
            height: mvs(50),
            paddingTop: ms(5),
            backgroundColor: "white",
          },

          tabBarIndicatorStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].tabIconSelected,
            height: 0, // Ensure no height for the indicator
          },
          tabBarItemStyle: {
            width: ms(120),
            alignItems: "center",
          },
        }}
      >
        {/* Other tabs */}
        <Tab.Screen
          name="no"
          component={ExploreScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              renderTabIconAndLabel(AssignmentIcon, "Assignments", focused),
          }}
        />
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
        <Tab.Screen
          name="pop"
          component={ExploreScreen}
          options={{
            tabBarLabel: ({ focused }) =>
              renderTabIconAndLabel(AssignmentIcon, "Assignments", focused),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  iconAndLabelContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
