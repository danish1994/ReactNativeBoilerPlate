import React from 'react';

import { NativeRouter, Route } from 'react-router-native';
import Home from '../screens/home';
import About from '../screens/about';

export const Router = () => (
    <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </NativeRouter>
);
