import { lazy } from 'react';
import Home from '../components/Home/Home';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import NotFound from '../helper/NotFound';
const routeList = [
    {
        url: "/",
        component: lazy(() => import('../components/Home/Home'))
    },
    {
        url: "/product/:id",
        component: lazy(() => import('../components/ProductDetail/ProductDetail'))
    },
    {
        url: "/contact",
        component: lazy(() => import('../helper/NotFound'))
    },
    {
        url: "/about",
        component: lazy(() => import('../helper/NotFound'))
    },
    {
        url: "/signup",
        component: lazy(() => import('../components/SignUp/SignUp'))
    }

]

export default routeList;