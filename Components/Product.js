import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Product = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          flexDirection: 'row',
          width: 175,
          height: 175,
          zIndex: 99,
          padding: 10,
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}>
        <Icon name="md-heart-outline" size={25} color="#000" />
      </View>
      <Image style={styles.image} source={require('../images/product.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.primary}>FENDI</Text>
        <Text style={styles.secondary}>High-Heeled Sandals</Text>
        <Text style={styles.primary}>AED 5,100</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 200,
    resizeMode: 'stretch',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
  },
  primary: {
    color: 'black',
    fontFamily: 'FuturaPTMedium',
    fontWeight: '600',
    fontSize: 20,
  },
  secondary: {
    color: 'black',
    fontFamily: 'FuturaPTBooked',
    fontSize: 16,
  },
  Bold: {
    color: 'black',
    lineHeight: 34,
    fontFamily: 'FuturaPTMedium',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
