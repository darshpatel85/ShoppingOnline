/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import FooterBanner from '../Components/FooterBanner';
import ImageButton from '../Components/ImageButton';
const {width: screenWidth} = Dimensions.get('window');

const ContactUs = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ScrollView>
        <View style={{paddingVertical: 20, width: '90%', alignSelf: 'center'}}>
          <View>
            <Text style={styles.bigText}>Store Address</Text>
            <Text style={styles.secondaryText}>
              Ladies Love Shopping,Dubai,
              {'\n'}United Arab Emirates
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.primaryText}>Phone :</Text>
              <Text style={styles.secondaryText}>+971 4 895 7856</Text>
            </View>
            <Text style={styles.primaryText}>Customer Care</Text>
            <Text style={styles.secondaryText}>Available from 9am - 6pm</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.primaryText}>Whatsapp: </Text>
              <Text style={styles.secondaryText}>+971 4 895 7856</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.primaryText}>Email: </Text>
              <Text style={styles.secondaryText}>
                info@ladieslloveshopping.com
              </Text>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <View style={{alignSelf: 'center', width: '90%'}}>
            <Text
              style={{
                ...styles.bigText,
                textAlign: 'left',
              }}>
              Get in Touch With Us
            </Text>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.primaryText, fontSize: 20}}>
                Name<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.primaryText, fontSize: 20}}>
                Email<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.primaryText, fontSize: 20}}>
                Phone Number
              </Text>
              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.primaryText, fontSize: 20}}>
                What's on your mind?<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={6}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            <View style={{marginVertical: 20}}>
              <ImageButton title="SUBMIT" />
            </View>
            <View
              style={{
                marginVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../images/map.png')}
                resizeMode="contain"
                style={{width: screenWidth - 60, height: screenWidth - 60}}
              />
            </View>
          </View>
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
  input: {
    borderColor: '#231224',
    color: '#231224',
    borderWidth: 1,
  },
  textContainer: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#231224',
    padding: 20,
  },
  bigText: {
    color: '#231224',
    fontSize: 32,
    fontFamily: 'FuturaPTBold',
    textAlign: 'left',
  },
  primaryText: {
    color: '#231224',
    fontSize: 20,
    paddingVertical: 5,
    fontFamily: 'FuturaPTMedium',
  },
  secondaryText: {
    color: '#231224',
    fontSize: 20,
    paddingVertical: 5,
    fontFamily: 'FuturaPTBook',
  },
  primaryView: {
    padding: 15,
    textAlign: 'left',
  },
});
export default ContactUs;
