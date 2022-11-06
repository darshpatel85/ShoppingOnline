/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {AuthContext} from '../App';
import ImageButton from '../Components/ImageButton';

const SignIn = ({navigation}) => {
  const {signIn} = React.useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
        height: '100%',
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
          <Text style={styles.bigText}>SIGN IN</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              flexWrap: 'wrap',
              margin: 10,
            }}>
            <Text style={styles.smallText}>Don't have an account? Please</Text>
            <Text
              style={{
                ...styles.smallText,
                fontFamily: 'FuturaPTLight',
                textDecorationLine: 'underline',
                paddingLeft: 5,
              }}
              onPress={() => navigation.navigate('SignUp')}>
              Sign Up
            </Text>
          </View>

          <View style={{marginVertical: 20, width: '90%'}}>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  fontWeight: '300',
                  paddingBottom: 10,
                }}>
                Email Address<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
              />
            </View>
            <View
              style={{
                marginVertical: 10,
              }}>
              <Text
                style={{
                  ...styles.smallText,
                  fontWeight: '300',
                  paddingBottom: 10,
                }}>
                Password<Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                style={{...styles.input}}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                autoComplete="password"
              />
            </View>
            <View style={{marginVertical: 40}}>
              <ImageButton
                onPress={() => {
                  if (email && password) {
                    signIn({email, password});
                  }
                }}
                title="SIGN IN"
              />
            </View>
          </View>
          <Text
            style={{
              ...styles.smallText,
              textDecorationLine: 'underline',
              paddingLeft: 5,
            }}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password ?
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: 350,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'FuturaPTLight',
              }}>
              Sign In to your account dashboard to view your recent orders,
              manage your shipping and billing adddressesand edit your password
              and account details.
            </Text>
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
    padding: 15,
  },
});
export default SignIn;
