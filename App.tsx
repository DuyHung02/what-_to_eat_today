import React, {useEffect} from "react";
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {OPEN_SANS_REGULAR} from "./src/constant";
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigator, NonAuthNavigator} from "./src/naivgation/navigation";
import {Provider, useSelector} from 'react-redux';
import {store} from "./src/redux/store";
import {RootState} from './src/redux/store';

SplashScreen.preventAutoHideAsync();
const AppContent = () => {
    const [loaded, error] = useFonts({
        [OPEN_SANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    const authState = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <NavigationContainer>
            {authState?.token ? <AuthNavigator/> : <NonAuthNavigator/>}
        </NavigationContainer>
    )
};

const App = () => (
    <Provider store={store}>
        <AppContent/>
    </Provider>
)

export default App;
