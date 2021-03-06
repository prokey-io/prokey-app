
import HomePage from '../pages/home.f7.html';
import AboutPage from '../pages/about.f7.html';
import AssetsPage from '../pages/assets.f7.html';
import ConnectPage from '../pages/connect.f7.html';
import DashboardPage from '../pages/dashboard.f7.html';
import FormPage from '../pages/form.f7.html';
import CatalogPage from '../pages/catalog.f7.html';
import ProductPage from '../pages/product.f7.html';
import ReceivePage from '../pages/receive.f7.html';
import SendPage from '../pages/send.f7.html';
import SettingsPage from '../pages/settings.f7.html';

import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/home/',
    component: HomePage,
    tabs: [
      {
        path: '/',
        id: 'view-dashboard',
        component: DashboardPage
      },
      {
        path: '/assets/',
        id: 'view-assets',
        component: AssetsPage
      },
      {
        path: '/send/',
        id: 'view-send',
        component: SendPage
      },
      {
        path: '/receive/',
        id: 'view-receive',
        component: ReceivePage
      }

    ]
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/connect/',
    component: ConnectPage
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;