import VideoListScreen from '@/components/VideoListScreen';

export default function IntroductionsScreen() {
  return (
    <VideoListScreen 
      title="INTRODUCTION TO DISSECTION VIDEOS"
      categoryId={30}
      headerImage={require('@/assets/images/interfaceIcons_Artboard25.png')}
    />
  );
}
