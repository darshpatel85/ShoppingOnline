import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import FooterBanner from '../Components/FooterBanner';
import Product from '../Components/Product';
import Icon from 'react-native-vector-icons/FontAwesome';
import Filter from './Filter';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
const ProductList = ({navigation}) => {
  let drawer = useRef(null);
  return (
    <DrawerLayout
      ref={refDrawer => {
        drawer = refDrawer;
      }}
      drawerWidth={300}
      drawerPosition={DrawerLayout.positions.Left}
      drawerType="front"
      renderNavigationView={() => <Filter drawer={drawer} />}
      onDrawerSlide={() => {}}>
      <SafeAreaView
        style={{
          backgroundColor: '#ffffff',
        }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 0.5}}>
              <ImageBackground
                resizeMode="cover"
                resizeMethod="resize"
                source={require('../images/background-menu.png')}>
                <View
                  style={{
                    alignItems: 'center',
                    padding: 20,
                  }}>
                  <TouchableOpacity onPress={() => drawer.openDrawer()}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Icon
                        style={{alignSelf: 'center', alignItems: 'center'}}
                        name="plus"
                        size={20}
                        color="#fff"
                      />
                      <Text style={styles.outlined}>FILTER</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
            <View style={{flex: 0.5}}>
              <ImageBackground
                resizeMode="cover"
                resizeMethod="resize"
                source={require('../images/background-menu.png')}>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: 'center',
                    padding: 20,
                    borderLeftWidth: 2,
                    borderColor: 'white',
                  }}>
                  <TouchableOpacity>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Text style={styles.outlined}>SORT BY</Text>
                      <Icon
                        style={{alignSelf: 'center', alignItems: 'center'}}
                        name="angle-down"
                        size={20}
                        color="#fff"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <View
              style={{
                flex: 0.6,
              }}>
              <View style={styles.searchSection}>
                <TextInput
                  style={styles.input}
                  placeholder="Search"
                  placeholderTextColor="#231224"
                  underlineColorAndroid="transparent"
                />
                <Icon
                  style={styles.searchIcon}
                  name="search"
                  size={20}
                  color="#000"
                />
              </View>
            </View>
            <View
              style={{
                flex: 0.4,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: '#231224',
                  textAlign: 'right',
                  fontSize: 16,
                }}>
                Items 1-48 of 738
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetails')}>
                <Product />
              </TouchableOpacity>
            </View>
          </View>
          <FooterBanner />
        </ScrollView>
      </SafeAreaView>
    </DrawerLayout>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 18,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  searchSection: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  outlined: {
    // margin: 10,
    alignSelf: 'center',
    fontSize: 20,
    paddingHorizontal: 5,
    color: '#fff',
  },
});
