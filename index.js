import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setCustomText, setCustomTextInput} from 'react-native-global-props';
import {setCustomView} from 'react-native-global-props/src';

const customTextProps = {
  style: {
    fontFamily: 'FuturaPTMedium',
  },
};

const customTextInputProps = {
  style: {
    fontFamily: 'FuturaPTMedium',
    paddingLeft: 10,
  },
};
setCustomText(customTextProps);
setCustomTextInput(customTextInputProps);
AppRegistry.registerComponent(appName, () => App);
