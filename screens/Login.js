import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";

export default function Login() {
    const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: "#7B71F9" }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4" onPress={() => navigation.navigate('Welcome')}>
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
          <TouchableOpacity className="flex items-end mb-5">
            <Text>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => alert("Logged In Successfully!")}
          >
            <Text className="font-xl font-bold text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
