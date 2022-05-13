/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Checkbox from 'react-native-check-box';
import ImageButton from '../Components/ImageButton';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
      }}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            padding: 10,
          }}>
          <Image
            source={require('../images/logo.png')}
            resizeMode="contain"
            style={{width: '80%', height: 200}}
          />
          <Text style={styles.bigText}>SIGN UP</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              flexWrap: 'wrap',
              marginTop: 10,
              width: '95%',
            }}>
            <Text style={styles.smallText}>
              Already have an account? Please
            </Text>
            <Text
              style={{
                ...styles.smallText,
                fontFamily: 'FuturaPTLight',
                textDecorationLine: 'underline',
                paddingLeft: 5,
              }}
              onPress={() => navigation.navigate('SignIn')}>
              Sign in
            </Text>
          </View>
          <View style={{width: '95%'}}>
            <View
              style={{
                marginVertical: 5,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  paddingVertical: 5,
                }}>
                First Name<Text style={{color: 'red'}}>*</Text>
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Dropdown
                  data={[
                    {
                      label: 'Mr',
                      value: 'mr',
                    },
                    {
                      label: 'Ms',
                      value: 'ms',
                    },
                  ]}
                  value="mr"
                  labelField="label"
                  valueField="value"
                  maxHeight={125}
                  onChange={() => {}}
                  selectedTextStyle={{color: '#231224'}}
                  style={{
                    ...styles.input,
                    paddingLeft: 15,
                    color: '#231224',
                    flex: 0.2,
                  }}
                />

                <TextInput
                  style={{...styles.input, flex: 0.75}}
                  //   onChangeText={onChangeNumber}
                  //   value={number}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  paddingVertical: 5,
                }}>
                Last Name<Text style={{color: 'red'}}>*</Text>
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
              <Text
                style={{
                  ...styles.smallText,
                  paddingVertical: 5,
                }}>
                Email Address<Text style={{color: 'red'}}>*</Text>
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
              <Text
                style={{
                  ...styles.smallText,
                  paddingVertical: 5,
                }}>
                Password<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{...styles.input}}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
              <Text
                style={{
                  ...styles.smallText,
                  fontFamily: 'FuturaPTLight',
                  paddingVertical: 5,
                  fontSize: 15,
                }}>
                Password Strength: No Password
              </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  paddingVertical: 5,
                }}>
                Confirm Password<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{...styles.input}}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
                width: '95%',
              }}>
              <Checkbox
                onClick={() => {}}
                rightTextStyle={{
                  color: '#231224',
                  fontSize: 14,
                  lineHeight: 16,
                  textAlign: 'left',
                  fontFamily: 'FuturaPTMedium',
                }}
                rightText={
                  "Let's get personal! We'll send you only the good stuff,Exclusive early access to Sale, new arrivals and promotions."
                }
              />
            </View>
            <View
              style={{
                marginVertical: 10,
                width: 350,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'FuturaPTLight',
                }}>
                By registering an account you can view your any recent orders,
                manage your shipping and billing adddressesand edit your
                password and account details.
              </Text>
            </View>
            <View style={{marginVertical: 30}}>
              <ImageButton title="SIGN UP" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
  },
  smallText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000000',
  },
  input: {
    borderColor: '#000000',
    color: '#000000',
    borderWidth: 1,
  },
  textContainer: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#231224',
    padding: 10,
  },
});
export default SignUp;
