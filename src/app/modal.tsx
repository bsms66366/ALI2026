import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About ALI2026</Text>
      <Text style={styles.text}>BSMS Anatomy Learning Interface</Text>
      <Text style={styles.text}>Version 1.0.0</Text>
      <Text style={styles.text}>Expo SDK 57</Text>
      
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#bcba40',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#9D9D9C',
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#bcba40',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
