import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodTracker } from '../components/MoodTracker';

const imgUrl =
  'https://images.unsplash.com/photo-1650617711972-d2be5861407a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80';

export const Home: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ImageBackground style={styles.container} source={{ uri: imgUrl }}>
      <MoodTracker handleSelectMood={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
