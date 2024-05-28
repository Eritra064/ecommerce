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
        url: "/product/:productId",
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
    },
    {
        url: "/login",
        component: lazy(() => import('../components/Login/Login'))
    },
    {
        url: "/cart",
        component: lazy(() => import('../components/CartList/CartList'))
    },
    {
        url: "/wishlist",
        component: lazy(() => import('../components/WishList/WishList'))
    },
    {
        url: "/category/:categoryId",
        component: lazy(() => import('../components/Category/CategoryProducts'))
    }

]

export default routeList;