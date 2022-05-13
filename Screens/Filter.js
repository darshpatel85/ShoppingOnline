import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {Slider} from '@miblanchard/react-native-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageButton from '../Components/ImageButton';

const Filter = ({drawer}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View>
            <Text
              style={{
                color: '#231224',
                fontFamily: 'FuturaPTBold',
                fontSize: 22,
              }}>
              Filter
            </Text>
          </View>
          <View>
            <Icon
              name="close"
              onPress={() => drawer.closeDrawer()}
              size={20}
              color="#231224"
            />
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,

            padding: 10,
            borderBottomColor: '#c39f95',
          }}>
          <Text style={{color: '#231224', fontSize: 20}}>Price</Text>
          <Slider
            value={[0, 3000]}
            trackStyle={{color: '#c39f95'}}
            thumbTintColor="#c39f95"
            minimumTrackTintColor="#c39f95"
            maximumTrackTintColor="#c39f95"
            minimumValue={0}
            maximumValue={3000}
          />
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
              }}>
              AED 0
            </Text>
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
              }}>
              AED 3000
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              textAlign: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 0.49,
              }}>
              <ImageButton title="RESET" />
            </View>
            <View
              style={{
                flex: 0.49,
              }}>
              <ImageButton title="APPLY" />
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#c39f95',
          }}>
          <Text style={{color: '#231224', fontSize: 20}}>Size</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              style={{color: '#c39f95'}}
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              XS
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              S
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              M
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              L
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              XL
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#c39f95',
          }}>
          <Text style={{color: '#231224', fontSize: 18}}>Color</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              color="blue"
              uncheckedColor="black"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <RadioButton
              value="first"
              uncheckedColor="blue"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <RadioButton
              value="first"
              uncheckedColor="grey"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <RadioButton
              value="first"
              uncheckedColor="red"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <RadioButton
              value="first"
              uncheckedColor="green"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#c39f95',
          }}>
          <Text style={{color: '#231224', fontSize: 18}}>Category</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Dress
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Trousers
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Winterwear
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Partywear
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Bags
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            borderBottomColor: '#c39f95',
          }}>
          <Text style={{color: '#231224', fontSize: 18}}>Designers</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Gucci
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Valentino
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Hermes
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              value="first"
              status={'unchecked'}
              // onPress={() => setChecked('first')}
            />
            <Text
              style={{
                color: '#231224',
                fontSize: 20,
                fontFamily: 'FuturaPTLight',
              }}>
              Fendi
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
