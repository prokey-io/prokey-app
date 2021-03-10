import $$ from 'dom7';
import Framework7, { getDevice } from 'framework7/bundle';

// Import F7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/animate.min.css'

// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7.html';

import ProkeyDevice from '@prokey-io/webcore'

var device = getDevice();

var app = new Framework7({
  name: 'Prokey', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'com.prokey.prokey', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,

 
  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      this.store.state.device = new ProkeyDevice.Device();
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// Number.ToCoin(decimals)
Number.prototype.ToCoin = function(decimals) {return (this / Math.pow(10, decimals)).toFixed(decimals);}

// splashscreen
setTimeout(function(){
  $$('.splashScreen').addClass('animate__animated animate__fadeOut');
  setTimeout(function(){
      $$('.splashScreen').hide();      
  },1000);
},200);

$$(document).on('page:init', function (e) {
  if ($$('.page-current').data('name') != "home") {

      if (typeof cordova != "undefined" && cordova.platformId == 'android') {
          StatusBar.overlaysWebView(true);
          StatusBar.styleDefault();
      }
  }
  $$('.navbar').on('navbar:collapse', function (e) {
      if (typeof cordova != "undefined" && cordova.platformId == 'android') {
          StatusBar.styleDefault();
      }

  });
  $$('.navbar').on('navbar:expand', function (e) {
      if (typeof cordova != "undefined" && cordova.platformId == 'android') {
          StatusBar.styleLightContent();
      }
  });
});
