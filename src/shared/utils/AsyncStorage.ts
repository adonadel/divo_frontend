import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log("AsyncStorage cleared successfully");
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};
