import { loadAsync } from 'expo-font';
import Montserrat from '../../assets/fonts/Montserrat-Regular.ttf';
import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf';

export default function loadFonts() {
  return loadAsync({
    Montserrat: Montserrat,
    'Montserrat-bold': MontserratBold,
  });
}
