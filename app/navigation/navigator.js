import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

import Home from "../screens/home";
import AddBook from "../screens/addBook";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddBook}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
