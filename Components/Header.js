import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
const {width: screenWidth} = Dimensions.get('window');

const Header = ({title}) => {
  return title === 'Home' ? (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        position: 'relative',
        paddingLeft: '40%',
      }}>
      <ImageBackground
        resizeMode="center"
        source={require('../images/logo.png')}>
        <View
          style={{
            width: 100,
            alignSelf: 'center',
            padding: 5,
            height: StatusBar.currentHeight + 10,
          }}
        />
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.header}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '25%',
    justifyContent: 'center',
  },
});
