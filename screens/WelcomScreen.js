import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "first_name": "Prathamesh",
      "last_name": "Pendal"
    })
  };

  const getRequestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },

  }

  const postExample = async () => {

    try {
      await fetch(
        'http://192.168.7.148:3000/rpi', requestOptions)
        .then(response => {
          response.json()
            .then(data => {

              try {
                fetch(
                  'http://192.168.7.148:5000/', getRequestOptions)
                  .then(response => {
                    response.json()
                      .then(data => {
                        console.log(JSON.stringify(data))
                      });
                  })
              }
              catch (error) {
                console.error(error);
              }
            });
        })
    }
    catch (error) {
      console.error(error);
    }
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: "#7b71f9" }}
    >
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          {" "}
          Let's get Started{" "}
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/welcome.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity className="py-3 bg-yellow-400 m-7 rounded-xl" onPress={postExample}>
            <Text className="text-xl font-bold text-center text-gray-700">
              Make An Order
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Already have as account?
            </Text>
            <TouchableOpacity
              className="px-2"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="font-semibold text-yellow-400">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
