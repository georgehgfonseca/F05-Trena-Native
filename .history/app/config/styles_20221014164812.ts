import { Platform } from 'react-native';
import colors from './colors';
{    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
}