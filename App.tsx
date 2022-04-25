import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './src/navigation/BottomTabs.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
