import Home from './pages/Home';
import Catalog from './pages/Catalog';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login'
import Registration from './pages/Registration'
import Layout from './components/Layout';


const layoutChildren = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'home',
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
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'registration',
    element: <Registration />
  }
]

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: layoutChildren
  }
];

export default routes;