import loadable from '@loadable/component';
const NotFound = loadable(() => import('./pages/404'));
const HomePage = loadable(() => import('./pages/home-page'));
const AboutPage = loadable(() => import('./pages/about-page'));

export default [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '*',
    component: NotFound
  }
];