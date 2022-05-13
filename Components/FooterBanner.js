import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import OutlinedButton from './OutlinedButton';

const FooterBanner = () => {
  return (
    <>
      <View style={{marginVertical: 10}}>
        <Text style={styles.bigText}>
          TAKE A CUE FROM THIS {'\n'} STYLISH LOT...
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#231224',
            fontSize: 20,
          }}>
          Share your own wardrobe wins with {'\n'}
          @Ladies love shopping and you could be {'\n'}
          featured right here.
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.scrollCategories}>
          <View style={{width: 175, height: 175, margin: 20}}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                width: 175,
                height: 175,
                zIndex: 99,
                padding: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../images/Layer33.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={{width: 175, height: 175}}>
              <ImageBackground
                source={require('../images/Rectangle6.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View style={{width: 175, height: 175, margin: 20}}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                width: 175,
                height: 175,
                zIndex: 99,
                padding: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../images/Layer33.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={{width: 175, height: 175}}>
              <ImageBackground
                source={require('../images/Rectangle6.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View style={{width: 175, height: 175, margin: 20}}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                width: 175,
                height: 175,
                zIndex: 99,
                padding: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../images/Layer33.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={{width: 175, height: 175}}>
              <ImageBackground
                source={require('../images/Rectangle6.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View style={{width: 175, height: 175, margin: 20}}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                width: 175,
                height: 175,
                zIndex: 99,
                padding: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../images/Layer33.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={{width: 175, height: 175}}>
              <ImageBackground
                source={require('../images/Rectangle6.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View style={{width: 175, height: 175, margin: 20}}>
            <View
              style={{
                position: 'absolute',
                flex: 1,
                flexDirection: 'row',
                width: 175,
                height: 175,
                zIndex: 99,
                padding: 10,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              <Image
                source={require('../images/Layer33.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <View style={{width: 175, height: 175}}>
              <ImageBackground
                source={require('../images/Rectangle6.png')}
                resizeMode="cover"
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  padding: 10,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 1,
          padding: 10,
          marginVertical: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <OutlinedButton style={{width: '70%'}} title="VIEW GALLERY" />
      </View>
    </>
  );
};

export default FooterBanner;

const styles = StyleSheet.create({
  scrollCategories: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflow: 'scroll',
  },
  bigText: {
    textAlign: 'center',
    color: '#231224',
    fontFamily: 'FuturaPTMedium',
    fontWeight: '600',
    fontSize: 24,
  },
});
