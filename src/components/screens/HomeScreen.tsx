import {Button, Image, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}} className="bg-gray-200 py-12">
      <Text className="text-center text-8xl font-extrabold font-acme text-green-700">
        G
      </Text>
      <Text className="text-center text-2xl font-bold text-gray-500 tracking-wider">
        <Text className="text-green-900">Grocery</Text> prime
      </Text>
      <View className="py-8 flex justify-center items-center">
        <Image source={require('../../assets/img.png')} />
      </View>
      <Text className="text-center text-2xl py-2 text-green-700 font-bold">
        Swift!
      </Text>
      <Text className="text-center justify-center text-xl mx-6 font-medium text-gray-700">
        Our grocery app brings convenience to your doorstep with a wide
        selection of quality items and easy ordering.
      </Text>
      <View className="flex flex-row py-12 mx-auto">
        <Button
          className="px-5 py-2 mx-2 border border-green-700 rounded text-green-700 hover:bg-green-700 hover:text-white text-lg"
          // onPress={onPressLearnMore}
          title="Log In"
        />
        <Button
          // onPress={onPressLearnMosre}
          title="Sign Up"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
