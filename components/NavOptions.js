import React from "react";
import { View, Text, FlatList } from "react-native";

import NavItemCard from "./NavItemCard";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "234",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "FoodScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => <NavItemCard key={item.id} data={item} />}
    />
  );
};

export default NavOptions;
