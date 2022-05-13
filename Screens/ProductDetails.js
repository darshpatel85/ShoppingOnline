/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: screenWidth} = Dimensions.get('window');
import FooterBanner from '../Components/FooterBanner';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import Product from '../Components/Product';

const data = [
  {
    illustration: require('../images/product.png'),
  },
  {
    illustration: require('../images/Rectangle6.png'),
  },
  {
    illustration: require('../images/product.png'),
  },
  {
    illustration: require('../images/Rectangle6.png'),
  },
];
const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  let ref = useRef();

  const _renderItem = ({item, index}, parallaxProps) => {
    return (
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.illustration}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#ffffff',
      }}>
      <ScrollView>
        <View style={{marginVertical: 20}}>
          <View>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                height: screenWidth - 60,
              }}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 75,
                    width: 75,
                    zIndex: 99,
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      ref.snapToPrev();
                    }}>
                    <Icon name="angle-left" size={50} color="#000" />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    height: 75,
                    zIndex: 99,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      ref.snapToNext();
                    }}>
                    <Icon name="angle-right" size={50} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 10}
                itemHeight={screenWidth - 60}
                data={data}
                onScroll={event => setCurrentProduct(ref.currentIndex)}
                ref={c => {
                  ref = c;
                }}
                renderItem={_renderItem}
              />
            </View>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <View style={styles.scrollCategories}>
                {data.map((item, ind) => (
                  <Image
                    key={ind}
                    source={item.illustration}
                    resizeMode="cover"
                    style={
                      ind === currentProduct
                        ? {
                            borderWidth: 1,
                            borderColor: '#000',
                            width: 70,
                            height: 70,
                            margin: 10,
                          }
                        : {width: 70, height: 70, margin: 10}
                    }
                  />
                ))}
              </View>
            </ScrollView>
            <View style={{alignSelf: 'center', width: '95%'}}>
              <Text
                style={{
                  color: '#231224',
                  fontFamily: 'FuturaPTThin',
                  fontSize: 22,
                }}>
                FENDI
              </Text>
              <Text
                style={{
                  color: '#231224',
                  fontFamily: 'FuturaPTBook',
                  fontSize: 20,
                  paddingVertical: 10,
                }}>
                Wide-Leg Sweatpants
              </Text>
              <Text
                style={{
                  color: '#231224',
                  fontFamily: 'FuturaPTMedium',
                  fontSize: 24,
                }}>
                AED 2,750.00
              </Text>
              <View style={{flex: 1, flexDirection: 'row', marginVertical: 20}}>
                <View style={{flex: 0.2, alignSelf: 'center'}}>
                  <Text
                    style={{
                      color: '#231224',
                      fontSize: 18,
                      fontFamily: 'FuturaPTMedium',
                    }}>
                    Size
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.25,
                    marginHorizontal: 10,
                    padding: 10,
                    borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      color: '#231224',
                      alignSelf: 'center',
                      fontFamily: 'FuturaPTMedium',
                      fontSize: 18,
                    }}>
                    44 IT
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              flex: 0.45,
            }}>
            <ImageBackground
              resizeMode="cover"
              resizeMethod="resize"
              source={require('../images/background-menu.png')}>
              <View
                style={{
                  alignItems: 'center',
                  paddingVertical: 15,
                  borderWidth: 1,
                  fontSize: 14,
                  color: '#fff',
                }}>
                {/* <TouchableOpacity onPress={() => drawer.openDrawer()}> */}
                <Text style={styles.outlined}>ADD TO CART</Text>
                {/* </TouchableOpacity> */}
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              paddingVertical: 15,
              alignItems: 'center',
              borderWidth: 1,
              flex: 0.45,
              alignSelf: 'center',
              fontSize: 14,
            }}>
            <Text style={{color: '#231224'}}>ADD TO WISHLIST</Text>
          </View>
        </View>
        <View style={{padding: 20, flex: 1}}>
          <Text
            style={{
              color: '#231224',
              fontSize: 22,
              paddingVertical: 10,
              fontFamily: 'FuturaPTMedium',
            }}>
            Details
          </Text>
          <Text
            style={{
              fontFamily: 'FuturaPTBook',
              color: '#231224',
              fontSize: 18,
              lineHeight: 24,
            }}>
            These loose pleated seatpants with voluminous wide legs, high
            waits,elasticated drawstring waistband,logo embellished side panels,
            andkanal stitching give you a laid - back elegance in your look.
            {'\n\n'}
            Fendi offers a sophisticated look and comfortable feel in all months
            with its unique patterns,tailoring,and aesthetic silhouettes.
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              lineHeight: 40,
              color: '#231224',
              fontFamily: 'FuturaPTBold',
              fontSize: 22,
            }}>
            YOU MAY ALSO LIKE
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.scrollCategories}>
            <View style={{margin: 15}}>
              <Product />
            </View>
            <View style={{margin: 15}}>
              <Product />
            </View>
            <View style={{margin: 15}}>
              <Product />
            </View>
            <View style={{margin: 15}}>
              <Product />
            </View>
            <View style={{margin: 15}}>
              <Product />
            </View>
          </View>
        </ScrollView>
        <Text>{'\n'}</Text>
        <FooterBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCategories: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  img: {
    width: screenWidth,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    // borderRadius: 8,
  },
  outlined: {
    // margin: 10,
    alignSelf: 'center',
    fontSize: 15,
    color: '#fff',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
});
export default ProductDetails;
