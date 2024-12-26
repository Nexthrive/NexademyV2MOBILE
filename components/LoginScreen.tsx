import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useAuth } from "../context/AuthContext";
import { Shadow } from "react-native-shadow-2";
import { ThemedText } from "./ThemedText";

const { height } = Dimensions.get("window");

const LoginScreen = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const animatedValue = new Animated.Value(isChecked ? 1 : 0);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);

    // Animate the checkbox selection
    Animated.timing(animatedValue, {
      toValue: isChecked ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ECECEC", "#A2A2A2"], // Grey when unselected, blue when selected
  });

  const checkMarkOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Fully opaque when selected
  });

  const handleLogin = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.scrollView}
      >
        {/* Top Section */}
        <View style={styles.topSection}>
          {/* Logo */}
          <Image
            source={require("../assets/images/nex_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* "SMK TUNAS MERDEKA" */}
          <Text style={styles.schoolName}>SMK TUNAS MERDEKA</Text>

          {/* Illustration */}
          <Image
            source={require("../assets/images/login_guy.png")}
            style={styles.illustration}
          />
        </View>

        {/* Bottom Section */}
        <Shadow
          offset={[0, -10]}
          startColor="rgba(213, 226, 226, .25)"
          distance={10}
        >
          <View style={styles.bottomSection}>
            {/* Welcome Back Section */}
            <ThemedText type="mBold" style={styles.welcomeText}>
              Welcome Back !
            </ThemedText>
            <ThemedText style={styles.detailsText}>
              Please enter your details
            </ThemedText>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              <ThemedText>
                <TextInput
                  placeholder="E-mail"
                  style={styles.inputUnderline}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </ThemedText>
              <View style={styles.passwordContainer}>
                <ThemedText>
                  <TextInput
                    placeholder="Passphrase"
                    style={styles.inputUnderline}
                    secureTextEntry={!showPassword}
                  />
                </ThemedText>
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconContainer}
                >
                  <Image
                    source={
                      showPassword
                        ? require("../assets/images/eye_icon_slash.png")
                        : require("../assets/images/eye_icon.png")
                    }
                    style={styles.eyeIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember Me Checkbox */}
            <View style={styles.rememberContainer}>
              <TouchableOpacity
                onPress={toggleCheckbox}
                style={styles.checkbox}
                activeOpacity={0.8}
              >
                <Animated.View
                  style={[styles.checkboxInner, { backgroundColor }]}
                >
                  <Animated.Text
                    style={[styles.checkMark, { opacity: checkMarkOpacity }]}
                  >
                    •
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
              <ThemedText style={styles.rememberText}>
                Remember for 30 days
              </ThemedText>
            </View>

            {/* Button Container */}
            <View style={styles.buttonContainer}>
              {/* Login Button */}
              <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                <ThemedText type="pMedium" style={styles.loginButtonText}>
                  Log In
                </ThemedText>
              </TouchableOpacity>

              {/* OR Section */}
              <View style={styles.orContainer}>
                <View style={styles.line} />
                <ThemedText style={styles.orText}>OR</ThemedText>
                <View style={styles.line} />
              </View>

              {/* Google Login Button */}
              <TouchableOpacity
                onPress={() => console.log("Google Login")}
                style={styles.googleButton}
              >
                <Image
                  source={require("../assets/images/google_logo.png")}
                  style={styles.googleLogo}
                  resizeMode="contain"
                />
                <Shadow
                  offset={[0, 2]}
                  startColor="rgba(255, 255, 255, .10)"
                  distance={10.2}
                >
                  <ThemedText type="pMedium" style={styles.googleButtonText}>
                    Log In with Google
                  </ThemedText>
                </Shadow>
              </TouchableOpacity>
            </View>
          </View>
        </Shadow>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFFFF",
  },
  scrollView: {
    flex: 1,
  },
  topSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: scale(52),
    height: scale(52),
    marginTop: verticalScale(46),
  },
  schoolName: {
    color: "#808080",
    fontSize: moderateScale(10),
    letterSpacing: moderateScale(6),
    marginTop: verticalScale(8),
  },
  illustration: {
    width: scale(240),
    height: verticalScale(205),
    marginTop: verticalScale(28),
    zIndex: 1,
  },
  bottomSection: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    borderTopLeftRadius: moderateScale(16),
    borderTopRightRadius: moderateScale(16),
    paddingHorizontal: moderateScale(46),
  },
  welcomeText: {
    color: "#1E1E1E",
    fontSize: moderateScale(30),
    letterSpacing: moderateScale(-1),
    textAlign: "center",
    marginTop: verticalScale(20),
  },
  detailsText: {
    color: "#808080",
    fontSize: moderateScale(12),
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginTop: verticalScale(16),
    gap: verticalScale(16),
  },
  buttonContainer: {
    paddingHorizontal: moderateScale(20),
    alignItems: "center",
  },
  inputUnderline: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#1E1E1E",
    fontSize: moderateScale(14),
    paddingVertical: verticalScale(8),
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
  },
  eyeIconContainer: {
    position: "absolute",
    right: moderateScale(16),
    top: "65%",
    transform: [{ translateY: -verticalScale(12) }],
  },
  eyeIcon: {
    width: scale(18),
    height: scale(18),
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  checkbox: {
    width: scale(16),
    height: scale(16),
    borderWidth: 1,
    borderColor: "#A2A2A2",
    borderRadius: moderateScale(4),
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(8),
  },
  checkboxInner: {
    width: "99%",
    height: "99%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    color: "#fff",
    fontSize: moderateScale(10),
    fontWeight: "bold",
  },
  rememberText: {
    color: "#1E1E1E",
    fontSize: moderateScale(10),
    marginLeft: moderateScale(4),
  },
  orContainer: {
    flexDirection: "row",
    width: "94%",
    alignItems: "center",
    marginVertical: verticalScale(4),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#CFCECE",
  },
  orText: {
    marginHorizontal: moderateScale(8),
    color: "#CFCECE",
    fontSize: moderateScale(12),
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#3B6064",
    borderRadius: moderateScale(26),
    paddingVertical: verticalScale(6),
    marginTop: verticalScale(12),
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(14),
    textAlign: "center",
  },
  googleButton: {
    width: "100%",
    backgroundColor: "#FAFAFA",
    borderRadius: moderateScale(26),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(6),
  },
  googleLogo: {
    width: scale(22),
    height: scale(22),
    marginRight: moderateScale(8),
  },
  googleButtonText: {
    color: "#1E1E1E",
    fontSize: moderateScale(14),
    textAlign: "center",
  },
});

export default LoginScreen;
