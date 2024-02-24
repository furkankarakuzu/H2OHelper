import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Stats from "./src/screens/Stats";
import { Ionicons } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#35A3DD",
              marginStart: 32,
              marginEnd: 32,
              borderRadius: 8,
            },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "white",
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-circle" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Stats"
            component={Stats}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="stats-chart-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
