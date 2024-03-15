import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




import HomeScreen from './Screens/HomeScreen';
import NotificationScreen from './Screens/NotificationScreen';
import MessegeScreen from './Screens/MessegeScreen';
import { colors } from './Constants/Color/Color';
import ExploreScreen from './Screens/ExploreScreen';
import AddPostScreen from './Screens/AddPostScreen';
import IconButton from './Component/Buttons/IconButton';
import ProfileScreen from './Screens/ProfileScreen';
import CustomBottomTab from './Component/Buttons/CustomBottomTab';
import ChatPage from './Component/Message/ChatPage';
import CameraScreen from './Screens/CameraScreen';
import StoryView from './Component/stories/StoryView';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SettingsView from './Component/Settings/SettingsView';

const Tab = createBottomTabNavigator();



function BottomTabnavigation() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.secondary.icon,
          tabBarActiveTintColor: colors.primary.pink,
        }}
          sceneContainerStyle={{
            backgroundColor: colors.primary.white
          }}
        >
          <Tab.Screen
            name='home'
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <IconButton type={'AntDesign'} name={'home'} size={30} color={color} />
              }
            }}
          />
          <Tab.Screen
            name='search'
            component={ExploreScreen}
            options={{

              tabBarIcon: ({ color, size }) => {
                return <IconButton type={'AntDesign'} name={'search1'} size={28} color={color} />
              }
            }}
          />
          <Tab.Screen
            name='addPost'
            component={AddPostScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <IconButton type={'FontAwesome'} name='plus-square-o' size={32} color={colors.primary.white} />
              ),
              tabBarButton: (props) => (
                <CustomBottomTab {...props} />
              ),
            }}
          />
          <Tab.Screen
            name='notification'
            component={NotificationScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <IconButton type={'Ionicons'} name={'notifications-outline'} size={28} color={color} />
              }
            }}
          />
          <Tab.Screen
            name='profile'
            component={ProfileScreen}
            options={{
              headerShown: true,
              title: false,
              tabBarIcon: ({ color, size }) => {
                return <IconButton type={'Feather'} name={'user'} size={28} color={color} />
              },
              headerRightContainerStyle: { paddingHorizontal: 10 },
              headerStyle: { backgroundColor: colors.primary.pink }
            }}
          />
        </Tab.Navigator>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}


const Stack = createNativeStackNavigator();

function Navigation() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.primary.white }
        }}
      >
        <Stack.Screen name='bottomTab' component={BottomTabnavigation} />
        <Stack.Screen
          name='messege'
          component={MessegeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name='chat'
          component={ChatPage}
          options={{ headerShown: true }}

        />
        <Stack.Screen
          name='story'
          component={StoryView}
        />
        <Stack.Screen
          name='camera'
          component={CameraScreen}

        />
        <Stack.Screen
          name='settings'
          component={SettingsView}
          options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

function App() {
  return (
    <>
      <Navigation />
    </>
  );
}


export default App;
