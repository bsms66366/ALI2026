import { StyleSheet, Text, View, Image, Pressable, ViewStyle, TextStyle, ImageStyle, ScrollView, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets, type EdgeInsets } from 'react-native-safe-area-context';

const TILE_HEIGHT_PORTRAIT = 350;
const TILE_HEIGHT_LANDSCAPE = 350;

const createBoxBorderStyle = (height: number, width: number, _insets: EdgeInsets): ViewStyle => {
  const isPortrait = height > width;
  const columns = isPortrait ? 2 : 3;
  const tileWidth = Math.floor(width / columns);
  const tileHeight = isPortrait ? TILE_HEIGHT_PORTRAIT : TILE_HEIGHT_LANDSCAPE;
  return {
    width: tileWidth,
    height: tileHeight,
    borderColor: '#bcba40',
    borderStyle: 'dotted',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  };
};

export default function ModulesScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingHorizontal: 0,
          paddingBottom: insets.bottom + 22,
        }}
      >
        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push("/(modules)/Module102Screen")}> 
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard1.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 102</Text>
          </Pressable>
        </View>

        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push('/(modules)/Module103Screen')}>
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard2.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 103</Text>
          </Pressable>
        </View>

        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push('/(modules)/Module104Screen')}>
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard3.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 104</Text>
          </Pressable>
        </View>

        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push('/(modules)/Module202Screen')}>
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard4.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 202</Text>
          </Pressable>
        </View>

        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push('/(modules)/Module203Screen')}>
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard6.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 203</Text>
          </Pressable>
        </View>

        <View style={createBoxBorderStyle(height, width, insets)}>
          <Pressable onPress={() => router.push('/(modules)/Module204Screen')}>
            <Image 
              source={require('@/assets/images/interfaceIcons_Artboard5.png')} 
              style={[styles.IconStyle]} 
            />
            <Text style={styles.titleText}>Module 204</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type Styles = {
  container: ViewStyle;
  IconStyle: ImageStyle;
  titleText: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  
  IconStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#bcba40',
    textAlign: 'center',
    marginTop: 8,
  },
});
