import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./src/Home";
import Settings from "./src/Settings";
import Perfil from "./src/Perfil";

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Perfil: { nome: string };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = "";

        if (route.name === "Feed") {
          focused
            ? (iconName = "ios-information-circle")
            : (iconName = "ios-information-circle-outline");
        } else if (route.name === "Settings") {
          focused ? (iconName = "ios-list-box") : (iconName = "ios-list");
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Feed" component={Home} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: "Bem-vindo",
            headerStyle: { backgroundColor: "#121212" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
