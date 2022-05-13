/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Category from '../Components/Category';
import FooterBanner from '../Components/FooterBanner';
import ImageButton from '../Components/ImageButton';
import OutlinedButton from '../Components/OutlinedButton';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../images/Banner-1.png')}
            resizeMode="cover"
            style={styles.image}>
            <Text style={{...styles.bigText, fontSize: 25}}>
              UP TO {'\n'}70% OFF
            </Text>
            <View
              style={{
                padding: 20,
                width: '50%',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <ImageButton title="BAGS" />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.smallContainer}>
          <ImageBackground
            source={require('../images/background-menu.png')}
            resizeMode="cover"
            style={styles.image}>
            <View
              style={{
                flex: 1,
                // alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  ...styles.smallTextView,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../images/shopping-bag.png')}
                  style={{width: 25, height: 25, marginRight: 40}}
                />
                <Text
                  style={{
                    ...styles.smallText,
                    fontFamily: 'FuturaPTLight',
                    textAlign: 'left',
                  }}>
                  SHOP IN YOUR LOCAL CURRENCY
                </Text>
              </View>
              <View
                style={{
                  ...styles.smallTextView,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../images/calender.png')}
                  style={{width: 25, height: 25, marginRight: 40}}
                />
                <Text
                  style={{
                    ...styles.smallText,
                    fontFamily: 'FuturaPTLight',
                    textAlign: 'left',
                  }}>
                  28 DAYS RETURN PERIOD
                </Text>
              </View>
              <View
                style={{
                  ...styles.smallTextView,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../images/package.png')}
                  style={{width: 25, height: 25, marginRight: 40}}
                />
                <Text
                  style={{
                    ...styles.smallText,
                    fontFamily: 'FuturaPTLight',
                    textAlign: 'left',
                  }}>
                  CASH ON DELIVERY AVAILABLE
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <Text
            style={{
              ...styles.bigText,
              paddingTop: 20,
              color: '#000000',
            }}>
            SHOP BY CATEGORY
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
              }}>
              <Category image={require('../images/Group6.png')} />
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
              }}>
              <Category image={require('../images/Group6copy.png')} />
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
                flex: 0.5,
                alignItems: 'center',
              }}>
              <Category image={require('../images/Group6copy2.png')} />
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
              }}>
              <Category image={require('../images/Group6copy3.png')} />
            </View>
          </View>
        </View>

        <View>
          <View
            style={{
              position: 'absolute',
              height: 400,
              resizeMode: 'cover',
              width: '100%',
            }}>
            <View style={{width: '100%', height: 300}}>
              <ImageBackground
                source={require('../images/layer17.png')}
                resizeMode="cover"
                style={{
                  ...styles.image,
                }}
              />
            </View>
          </View>
          <Text
            style={{
              ...styles.bigText,
              paddingTop: 20,
              paddingHorizontal: 10,
              textAlign: 'right',
              fontSize: 24,
              fontFamily: 'FuturaPTBold',
              color: '#000000',
            }}>
            THE EDIT
          </Text>
          <Text
            style={{
              ...styles.smallText,
              fontFamily: 'FuturaPTMedium',
              color: '#000000',
              paddingHorizontal: 10,
              textAlign: 'right',
            }}>
            Get your inspo fix from the new season{'\n'}
            trends you need to know{'\n'}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingHorizontal: 10,
            }}>
            <OutlinedButton title="SHOP NOW" />
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.scrollCategories}>
              <Category image={require('../images/Rectangle4copy2.png')} />
              <Category image={require('../images/Rectangle4copy2.png')} />
              <Category image={require('../images/Rectangle4copy2.png')} />
              <Category image={require('../images/Rectangle4copy2.png')} />
              <Category image={require('../images/Rectangle4copy2.png')} />
              <Category image={require('../images/Rectangle4copy2.png')} />
            </View>
          </ScrollView>
        </View>
        <View>
          <Text style={{...styles.bigText, color: '#000000'}}>
            WOMEN'S ACCESSORIES {'\n'}& JEWELLERY
          </Text>
          <View>
            <View
              style={{
                flex: 1,
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flex: 0.5,
                  alignItems: 'center',
                }}>
                <Category image={require('../images/Group7copy3.png')} />
              </View>
              <View
                style={{
                  flex: 0.5,
                  alignItems: 'center',
                }}>
                <Category image={require('../images/Group7copy4.png')} />
              </View>
            </View>
          </View>
          <View style={{width: '90%', alignSelf: 'center', paddingBottom: 20}}>
            <ImageButton title="VIEW COLLECTIONS" />
          </View>
          <View>
            <View
              style={{
                position: 'absolute',
                height: 400,
                resizeMode: 'cover',
                width: '100%',
              }}>
              <View style={{width: '100%', height: 400}}>
                <ImageBackground
                  source={require('../images/Rectangle5.png')}
                  resizeMode="cover"
                  style={{
                    ...styles.image,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: 'rgba(255,255,255,0.5)',
                justifyContent: 'center',
                margin: 40,
                alignItems: 'center',
                flex: 1,
                padding: 20,
              }}>
              <Image
                source={require('../images/logo1.png')}
                resizeMode="contain"
                style={{width: 200, height: 100}}
              />
              <View>
                <Text
                  style={{
                    ...styles.smallText,
                    fontFamily: 'FuturaPTBook',
                    textAlign: 'center',
                    color: '#000000',
                  }}>
                  IN LOVE WITH OUR
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...styles.bigText,
                    fontSize: 26,
                    fontFamily: 'FuturaPTMedium',
                    color: '#000000',
                  }}>
                  HANDBAGS
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  padding: 20,
                }}>
                <OutlinedButton title="SHOP NOW" />
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
                <Category image={require('../images/Group7copy7.png')} />
              </View>
              <View
                style={{
                  flex: 0.4,
                  alignItems: 'center',
                }}>
                <Category image={require('../images/Group7copy8.png')} />
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
                <Category image={require('../images/Group7copy7.png')} />
              </View>
              <View
                style={{
                  flex: 0.4,
                  alignItems: 'center',
                }}>
                <Category image={require('../images/Group7copy8.png')} />
              </View>
            </View>
          </View>
        </View>
        <FooterBanner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: 400,
  },
  smallContainer: {
    flex: 1,
    height: 200,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  scrollCategories: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  bigText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'FuturaPTMedium',
  },
  smallTextView: {
    padding: 15,
    textAlign: 'left',
  },

  textContainer: {
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#231224',
    padding: 20,
    marginHorizontal: 20,
  },
});
export default Home;
