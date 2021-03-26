import NotFound from './pages/404';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';

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