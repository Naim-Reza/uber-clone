import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const NavItemCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(data.screen)}
      style={tw`px-4 py-6 bg-gray-200 m-2 w-40`}
    >
      <View>
        <Image source={{ uri: data.image }} style={styles.image} />
        <Text style={tw`mt-2 text-lg font-semibold`}>{data.title}</Text>
        <Icon
          name="arrowright"
          color="white"
          type="antdesign"
          style={tw`bg-black p-2 w-10 mt-4 rounded-full`}
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavItemCard;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
