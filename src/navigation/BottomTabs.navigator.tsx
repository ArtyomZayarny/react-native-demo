import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/HomeScreen';
import { Historty } from '../screens/HistoryScreen';
import { Analytics } from '../screens/AnalyticsScreen';
import { Text } from 'react-native';
import { HomeIcon } from '../components/Icons/HomeIcon';
import { AnalyticsIcon } from '../components/Icons/AnalyticsIcon';
import { HistoryIcon } from '../components/Icons/HistoryIcon';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }
          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }
          return <Text>{route.name}</Text>;
        },
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Today's Mood",
          headerTitleAlign: 'center',
        }}
      />
      <BottomTabs.Screen
        name="History"
        component={Historty}
        options={{
          title: 'Past Moods',
        }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{
          title: 'Fancy',
        }}
      />
    </BottomTabs.Navigator>
  );
};
