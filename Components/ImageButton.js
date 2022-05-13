import {
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const ImageButton = props => {
  return (
    <View styles={[styles.outlined, props.style]}>
      <ImageBackground
        resizeMode="cover"
        resizeMethod="resize"
        source={require('../images/background-menu.png')}>
        <TouchableOpacity {...props}>
          <Text style={styles.outlined}>{props.title}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ImageButton;

const styles = StyleSheet.create({
  outlined: {
    // margin: 10,
    alignSelf: 'center',
    fontSize: 15,
    padding: 15,
    color: '#fff',
  },
});
