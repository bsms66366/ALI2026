import { View, Text, StyleSheet } from 'react-native';

export default function Video360Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video360Screen</Text>
      <Text style={styles.subtitle}>Content coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
});
