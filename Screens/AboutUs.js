/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FooterBanner from '../Components/FooterBanner';

const AboutUs = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
      }}>
      <ScrollView>
        <View style={{padding: 20, flex: 1}}>
          <Image
            source={require('../images/Rectangle5.png')}
            resizeMode="cover"
            style={{
              width: '100%',
              height: 300,
              padding: 20,
              marginVertical: 20,
            }}
          />
          <Text
            style={{
              fontFamily: 'FuturaPTMedium',
              color: '#231224',
              fontSize: 18,
              lineHeight: 25,
            }}>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.{'\n'}
            {'\n'} Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.{'\n'}
            {'\n'} Praesent dapibus, neque id cursus faucibus, tortor neque
            egestas auguae, eu vulputate magna eros eu erat. Aliquam erat
            volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
            luctus, metus.{'\n'}
            {'\n'} Donec nec justo eget felis facilisis fermentum. Aliquam
            porttitor mauris sit amet orci.{'\n'}
            {'\n'} Morbi in sem quis dui placerat ornare. Pellentesque odio
            nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
            consequat.
          </Text>
        </View>
        <FooterBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollCategories: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },

  bigText: {
    color: 'white',
    fontSize: 38,
    lineHeight: 54,
    textAlign: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'right',
    fontFamily: 'FuturaPTMedium',
  },
  smallTextView: {
    padding: 15,
    textAlign: 'left',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#231224',
    padding: 10,
  },
});
export default AboutUs;
