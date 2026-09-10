import { Image, StyleSheet, Text, View } from 'react-native';

export default function TabHomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/Asset_8.png')} style={styles.IconStyle} />
      <Text style={styles.subtitleText}>Welcome to the BSMS Anatomy Learning Interface</Text>
      <Text style={styles.subtitleText}>The dissection table companion</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  IconStyle:{
    width: 210, 
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color:'#bcba40',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  subtitleText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
    color:'#9D9D9C',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});
