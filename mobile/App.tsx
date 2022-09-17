import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { getPushNotificationToken } from './src/services/getPushNotificationToken'
import { Subscription } from 'expo-modules-core'
import './src/services/notificationConfigs';
import * as Notification from 'expo-notifications';





export default function App() {

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationListener.current = Notification.addNotificationReceivedListener(notication => {
      console.log("🚀 ~ notication", notication)
    });

    responseNotificationListener.current = Notification.addNotificationReceivedListener(response => {
      console.log(response);
    })

    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notification.removeNotificationSubscription(getNotificationListener.current)
        Notification.removeNotificationSubscription(responseNotificationListener.current)

      }
    }
  }, [])
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Background >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}



