import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen';
import {LogBox} from "react-native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Tabs = AnimatedTabBarNavigator();

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  dashboard: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BottomTabNavigator}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
     <Stack.Screen name="dashboard" component={BottomTabNavigator}
      />
    </Stack.Navigator>
  )
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Tabs.Navigator
      appearance={{
        tabBarBackground: Colors[colorScheme].background,
      }}
      // default configuration from React Navigation
      tabBarOptions={{
        activeTintColor: "#2F7C6E",
        inactiveTintColor: "#222222",
        tabBarActiveTintColor: Colors[colorScheme].tint,

      }} >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome
            name="home"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        })}
      />
      <Tabs.Screen
        name="TabTwo"
        component={UserDetailScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome
            name="user"
            size={25}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
          />
        }}
      />
    </Tabs.Navigator>
  );
}