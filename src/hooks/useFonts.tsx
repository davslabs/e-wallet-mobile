import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    QuickSand: require('../assets/fonts/Quicksand-Regular.ttf'),
    'QuickSand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
    'QuickSand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
    'QuickSand-SemiBold': require('../assets/fonts/Quicksand-SemiBold.ttf'),
    'QUickSand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
  });
};

export default useFonts;
