import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/" />;
  const handleLogin = async () => {
    const result = await login();
    if (result) {
      console.log("Login Success");
      refetch();
    } else {
      Alert.alert("Error", "failed to login");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-center text-black-200 uppercase font-rubik text-base">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-rubik-bold mt-2 text-black-300 text-center ">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300"> Your Ideal Home</Text>
          </Text>
          <Text className="text-black-200 text-center font-rubik mt-12">
            Login To Restate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="mt-5 py-4 bg-white shadow-md shadow-zinc-300 rounded-full flex-row justify-center items-center"
          >
            <Image source={icons.google} className="w-6 h-6" />
            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
