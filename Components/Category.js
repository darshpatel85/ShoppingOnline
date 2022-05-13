import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Category = ({image}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        // source={image}
      />
      {/* <View style={styles.textContainer}>
        <Text>READY-TO-WEAR</Text>
      </View> */}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    width: 175,
    height: 250,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#231224',
    padding: 10,
  },
});
