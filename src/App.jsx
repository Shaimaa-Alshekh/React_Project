
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routs/Root';
import Cart from './pages/cart/Cart';
import Signin from './pages/signIn/Signin';
import Signup from './pages/signUp/Signup';
import Product from './pages/products/Product';
import Categories from './pages/categories/Categories';
import NotFound from './pages/notfound/NotFound';
import Home from './pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement :<NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
