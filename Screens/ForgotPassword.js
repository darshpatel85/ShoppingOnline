/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../App';
import ImageButton from '../Components/ImageButton';

const ForgotPassword = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        height: '100%',
        alignItems: 'center',
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
          <Text style={styles.bigText}>Forgot Password</Text>
          <Text style={styles.smallText}>
            {/* Don't have an account? Please Sign Up */}
          </Text>
          <View style={{marginVertical: 20, width: '95%'}}>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.smallText}}>
                Email Address<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View>
            {/* <View
              style={{
                marginVertical: 10,
              }}>
              <Text style={{...styles.smallText, fontSize: 15}}>
                Password *
              </Text>
              <TextInput
                style={{...styles.input}}
                //   onChangeText={onChangeNumber}
                //   value={number}
              />
            </View> */}
            <View style={{paddingVertical: 10}}>
              <ImageButton title="SEND MAIL" />
            </View>
          </View>
          <Text
            style={{
              ...styles.smallText,
              textDecorationLine: 'underline',
              paddingLeft: 5,
            }}
            onPress={() => navigation.navigate('SignIn')}>
            SignIn ?
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: 350,
            }}>
            <Text
              style={{
                ...styles.smallText,
                textAlign: 'center',
                fontFamily: 'FuturaPTLight',
              }}>
              {/* Sign In to your account dashboard to view your recent orders,
              manage your shipping and billing adddressesand edit your password
              and account details. */}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#231224',
  },
  smallText: {
    fontSize: 20,
    color: '#231224',
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
    padding: 10,
  },
});
export default ForgotPassword;
