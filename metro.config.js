const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

// Get the default Expo Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Apply NativeWind configuration
const nativeWindConfig = withNativeWind(defaultConfig, {
  input: "./global.css",
});

// Modify the transformer and resolver for SVG support
nativeWindConfig.transformer = {
  ...nativeWindConfig.transformer, // Keep existing transformers (if any)
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

nativeWindConfig.resolver = {
  ...nativeWindConfig.resolver, // Keep existing resolvers (if any)
  assetExts: nativeWindConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...nativeWindConfig.resolver.sourceExts, "svg"],
};

module.exports = nativeWindConfig;
