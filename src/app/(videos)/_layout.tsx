import { Stack } from 'expo-router';

export default function VideosLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#bcba40',
        headerBackTitle: ' ',
      }}
    />
  );
}
