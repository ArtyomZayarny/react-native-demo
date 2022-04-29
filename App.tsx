import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/App.provider';
import { BottomTabsNavigator } from './src/navigation/BottomTabs.navigator';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
