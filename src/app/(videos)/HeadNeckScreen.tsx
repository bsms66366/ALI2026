import VideoListScreen from '@/components/VideoListScreen';

export default function HeadNeckScreen() {
  return (
    <VideoListScreen 
      title="HEAD AND NECK"
      categoryId={19}
      headerImage={require('@/assets/images/interfaceIcons_Artboard4.png')}
    />
  );
}
