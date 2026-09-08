import { View, Text, StyleSheet } from 'react-native';

export default function ModelFetchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AR Model Scanner</Text>
      <Text style={styles.subtitle}>QR Code scanning coming soon...</Text>
      <Text style={styles.subtitle}>This will use expo-camera to scan QR codes</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#9D9D9C',
    textAlign: 'center',
    marginTop: 5,
  },
});
