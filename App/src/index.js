import React,{Component} from 'react';

import { createDrawerNavigator} from 'react-navigation-drawer';
import{createAppContainer} from 'react-navigation';

import Home from './componentes/Home';
import Profile from './componentes/Profile';
import Settings from './componentes/Settings';


const Routes = createAppContainer(
  createDrawerNavigator({
    Home:Home,
    Profile:Profile,
    Settings:Settings
  })
);

export default Routes;
