import 'react-native-reanimated';
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Image, SecureStore} from 'react-native';
import {createDrawerNavigator, useDrawerStatus} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ProductDetails from './Screens/ProductDetails';
import Home from './Screens/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import ProductList from './Screens/ProductList';
import Menu from './Screens/Menu';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPassword from './Screens/ForgotPassword';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export const AuthContext = React.createContext();
import {navigationRef} from './RootNavigation';
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
const AuthenticatedRoutes = () => {
  const [productListHeader, setProductListHeader] = React.useState('');
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#231224',
            height: 85,
          },
          headerTintColor: '#c39f95',
          headerRight: () => (
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{width: 25, height: 25, marginRight: 20}}
                source={require('./images/shopping-bag.png')}
              />
            </TouchableOpacity>
          ),
          // headerLeft: props => (
          //   <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          //     <Image
          //       resizeMode="contain"
          //       style={{width: 25, height: 25, marginLeft: 20}}
          //       source={require('./images/Group2.png')}
          //     />
          //   </TouchableOpacity>
          // ),
        }}
        drawerIcon={
          <Image
            resizeMode="contain"
            style={{width: 25, height: 25, marginLeft: 20}}
            source={require('./images/Group2.png')}
          />
        }
        drawerStyle={{
          backgroundColor: '#231224',
        }}
        drawerContent={props => (
          <Menu setProductListHeader={setProductListHeader} {...props} />
        )}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          options={{headerTitle: props => <Header title="Home" {...props} />}}
          component={Home}
        />

        <Drawer.Screen
          name="AboutUs"
          options={{
            headerTitle: props => <Header title="About" {...props} />,
          }}
          component={AboutUs}
        />
        <Drawer.Screen
          name="ContactUs"
          options={{
            headerTitle: props => <Header title="Contact" {...props} />,
          }}
          component={ContactUs}
        />
        <Drawer.Screen
          name="ProductList"
          options={{
            headerTitle: props => (
              <Header title={productListHeader} {...props} />
            ),
          }}>
          {props => (
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="List"
                component={prps => <ProductList {...prps} />}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="ProductDetails"
                component={prps => <ProductDetails {...prps} />}
              />
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
      <Footer setProductListHeader={setProductListHeader} />
    </>
  );
};

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={navigationRef}>
        {state.isLoading || state.userToken == null ? (
          <Stack.Navigator>
            {state.isLoading ? (
              // We haven't finished checking for the token yet
              <Stack.Screen name="Splash" component={SplashScreen} />
            ) : (
              // No token found, user isn't signed in
              <>
                <Stack.Screen
                  name="SignIn"
                  options={{
                    headerShown: false,
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                  component={SignIn}
                />
                <Stack.Screen
                  name="SignUp"
                  options={{
                    headerShown: false,
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                  component={SignUp}
                />
                <Stack.Screen
                  name="ForgotPassword"
                  options={{
                    headerShown: false,
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                  component={ForgotPassword}
                />
              </>
            )}
          </Stack.Navigator>
        ) : (
          <AuthenticatedRoutes />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
