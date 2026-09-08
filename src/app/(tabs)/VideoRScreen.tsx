import { StyleSheet, Text, View, TouchableOpacity, Image, ViewStyle, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets, type EdgeInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const TILE_HEIGHT_PORTRAIT = 225;
const TILE_HEIGHT_LANDSCAPE = 225;

const createBoxBorderStyle = (height: number, width: number, insets: EdgeInsets): ViewStyle => {
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
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    };
};

export default function VideoRScreen() {
    const { height, width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={styles.v_container} edges={["bottom"]}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={{
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingHorizontal: 0,
                    paddingBottom: insets.bottom + 24,
                }}
            >
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/IntroductionsScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard25.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>INTRODUCTION TO...</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/HeadNeckScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard4.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>HEAD AND NECK</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/ENTScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard35.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>EAR NOSE AND THROAT</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/ThoraxScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard2.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>THORAX</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/AbdoPelvisScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard24.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>ABDOMEN AND PELVIS</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/BackLimbsScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard6.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>BACK AND LIMBS</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/EmbryologyScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard1.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>EMBRYOLOGY</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(videos)/Video360Screen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard28.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>360 VIDEO</Text>
                    </TouchableOpacity>
                </View>
                <View style={createBoxBorderStyle(height, width, insets)}>
                    <TouchableOpacity style={styles.tileButton} onPress={() => router.push('/(courses)/PubDisScreen')}>
                        <Image source={require('@/assets/images/interfaceIcons_Artboard34.png')} style={styles.IconStyle} />
                        <Text style={styles.titleText}>PUBLIC DISPLAY</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    IconStyle: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    v_container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#000000',
    },
    tileButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    titleText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#bcba40',
        textAlign: 'center',
        paddingHorizontal: 5,
        flexShrink: 1,
    },
});
