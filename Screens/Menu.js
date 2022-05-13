import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {AuthContext} from '../App';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = ({navigation, setProductListHeader}) => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/background-menu.png')}
        resizeMode="cover">
        <ScrollView>
          <View
            style={{
              padding: 10,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{flex: 0.25}}>
              <Image
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/02/74/77/35/360_F_274773563_zOhj4BISY2sF39FQ131LWF2LXC5eL6TA.jpg',
                }}
                resizeMode="cover"
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                }}
              />
            </View>
            <View style={{flex: 0.6}}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#c39f95',
                  fontFamily: 'FuturaPTMedium',
                }}>
                ROSELYN FELTON
              </Text>
            </View>
            <View style={{flex: 0.1}}>
              <View>
                <Icon
                  name="close"
                  onPress={() => navigation.closeDrawer()}
                  size={20}
                  color="#c39f95"
                />
              </View>
            </View>
          </View>
          <View style={{padding: 10}}>
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Home
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  setProductListHeader('New In');
                  navigation.navigate('ProductList');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  New In
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  setProductListHeader('Designers');
                  navigation.navigate('ProductList');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Designers
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  setProductListHeader('Clothing');
                  navigation.navigate('ProductList');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Clothing
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  setProductListHeader('Accessories');
                  navigation.navigate('ProductList');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Accessories
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  About us
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Craftsmanship
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Blog
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Become a stockist
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Press and pr enquiries
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Klarna payments
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Delivery information{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Returns{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  policy{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  After sales service
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Terms & conditions
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Pop up store{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Contact us{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Visit by appointment
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 10}}>
              <TouchableOpacity onPress={() => signOut()}>
                <Text
                  style={{
                    fontSize: 18,
                    color: '#c39f95',
                    fontFamily: 'FuturaPTMedium',
                  }}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              flex: 1,
              justifyContent: 'flex-start',
              flexDirection: 'row',
            }}>
            <View
              style={{
                margin: 5,
                borderRadius: 100,
                borderWidth: 2,
                alignSelf: 'center',
                alignItems: 'center',
                borderColor: '#c39f95',
              }}>
              <Icon
                name="facebook"
                style={{
                  padding: 10,
                  paddingHorizontal: 15,
                }}
                // onPress={() => navigation.closeDrawer()}
                size={25}
                color="#c39f95"
              />
            </View>
            <View
              style={{
                margin: 5,
                borderRadius: 100,
                borderWidth: 2,
                alignSelf: 'center',
                alignItems: 'center',
                borderColor: '#c39f95',
              }}>
              <Icon
                name="twitter"
                style={{
                  padding: 10,
                }}
                // onPress={() => navigation.closeDrawer()}
                size={25}
                color="#c39f95"
              />
            </View>
            <View
              style={{
                margin: 5,
                borderRadius: 100,
                borderWidth: 2,
                alignSelf: 'center',
                alignItems: 'center',
                borderColor: '#c39f95',
              }}>
              <Icon
                name="instagram"
                style={{
                  padding: 10,
                  paddingLeft: 12,
                }}
                // onPress={() => navigation.closeDrawer()}
                size={25}
                color="#c39f95"
              />
            </View>
            {/* <Text>
            <Icon name="fa-brands fa-facebook" color="#c39f95" />
          </Text>
          <Text>T</Text>
          <Text>I</Text> */}
          </View>
          <View style={{padding: 5}}>
            <Text
              style={{
                fontSize: 10,
                color: '#c39f95',
                fontFamily: 'FuturaPTMedium',
              }}>
              &copy; 2022 LADIES LOVE SHOPPING
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231224',
  },
});
