import {Image, Text, View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import CustomButton from '../atoms/CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={tw`bg-gray-200 py-12`}>
      <Text
        style={tw`text-center text-8xl font-extrabold font-platypi text-green-700`}>
        G
      </Text>
      <Text
        style={tw`text-center text-3xl font-bold text-gray-500 tracking-wider`}>
        <Text style={tw`text-green-900`}>Grocery</Text> prime
      </Text>
      <View style={tw`py-16 flex justify-center items-center`}>
        <Image source={require('../../assets/img.png')} />
      </View>
      <Text style={tw`text-center text-xl py-2 text-green-700 font-bold`}>
        Swift!
      </Text>
      <Text
        style={tw`text-center justify-center text-lg mx-6 font-medium text-gray-700`}>
        Our grocery app brings convenience to your doorstep with a wide
        selection of quality items and easy ordering.
      </Text>
      <View style={tw`flex flex-row py-12 mx-auto gap-4`}>
        <CustomButton
          title="Log In"
          onPress={() => navigation.navigate('Login')}
          style={tw`px-12 py-2.5 border text-gray-600 border-green-700 rounded-lg`}
        />
        <CustomButton
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          style={tw`px-12 py-2.5 border text-gray-200 border-green-700 rounded-lg bg-green-700`}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
