import {
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import * as RootNavigation from '../RootNavigation';

const Footer = ({setProductListHeader}) => {
  return (
    <View style={styles.Footer}>
      <View>
        <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
          <Image
            source={require('../images/store.png')}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            setProductListHeader('Designer');
            RootNavigation.navigate('ProductList');
          }}>
          <Image
            source={require('../images/fashion.png')}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            setProductListHeader('Clothing');
            RootNavigation.navigate('ProductList');
          }}>
          <Image
            source={require('../images/wedding.png')}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            setProductListHeader('Accesories');
            RootNavigation.navigate('ProductList');
          }}>
          <Image
            source={require('../images/accessory.png')}
            style={{width: 25, height: 25}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Footer: {
    flex: 1,
    padding: 10,
    maxHeight: StatusBar.currentHeight + 10,
    backgroundColor: '#231224',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
