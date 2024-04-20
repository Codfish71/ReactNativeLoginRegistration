import { useNavigation } from "@react-navigation/native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: "#7B71F9" }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-left" size={20} color="#900" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/welcome.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            value="Prathamesh Pendal"
            placeholder="Enter First Name and Last Name"
          ></TextInput>
          <Text className="text-gray-700 ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            value="pratham@gmail.com"
            placeholder="Enter Email"
          ></TextInput>
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
            secureTextEntry
            value="password"
            placeholder="Enter Email"
          ></TextInput>
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => alert("Signed Up Successfully!")}
          >
            <Text className="font-xl font-bold text-center">Sign Up</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-700 font-semibold">
              Alread Have an Account?
            </Text>
            <TouchableOpacity
              className="flex mb-5"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="font-semibold text-yellow-500 mx-2">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
