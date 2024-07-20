import Home from './pages/Home';
import Catalog from './pages/Catalog';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import Layout from './components/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'catalog',
        element: <Catalog />
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      }
    ]
  }
];

export default routes;