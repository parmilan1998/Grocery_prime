import {Image, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}} className="bg-white py-12">
      <Text className="text-center text-8xl font-extrabold font-acme text-green-700">
        G
      </Text>
      <Text className="text-center text-2xl font-bold text-gray-500 tracking-wider">
        <Text className="text-green-900">Grocery</Text> prime
      </Text>
    </View>
  );
};

export default HomeScreen;
