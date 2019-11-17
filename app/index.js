import React from 'react';
import { Router } from './router';
import { SafeAreaView, StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import store from './store/index';

export const AppRoot = props => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Router />
            </SafeAreaView>
        </Provider>
    );
};
