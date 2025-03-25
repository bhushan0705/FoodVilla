import { lazy, Suspense } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
// import About from './components/About';
import Contact from "./components/Contact";
// import Home from './Home';
import Page404 from "./components/Page404";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shrimmer from "./components/Shrimmer";
import UserContext from "./utils/UserContext";
import DarkModeToggle from "./components/DarkModeToggle";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import { logout } from "./utils/authSlice";

// import InstMart from './components/InstMart';

// this is lazy loading (this is not a normal import it is a function herde)
const InstaMart = lazy(() => import("./components/InstMart"));
const About = lazy(() => import("./components/About"));

function App() {
  // useSelector is bridge between the store to component (it will get data from slices/ store)
  const cartItems = useSelector((store) => store.cart.item);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const {user} = useContext(UserContext)
  // const [user, setUser] = useState(
  //   {
  //     name:"rahul",
  //     mail: "rahul@ac.in"
  //   }
  // )

  // const [logInUser, setLogInUser] = useState(true);

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <nav className="border-2 border-green-500 flex justify-between items-center p-4 bg-black text-white dark:border-green-400">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://foodvilla.ng/wp-content/uploads/2021/02/whitey.png"
              alt="logo"
              className="h-[70px]"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-20 text-lg text-white dark:text-gray-100">
            <li>
              <Link
                to="/"
                className="hover:text-green-500 dark:hover:text-green-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-green-500 dark:hover:text-green-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-green-500 dark:hover:text-green-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/instamart"
                className="hover:text-green-500 dark:hover:text-green-300"
              >
                InstaMart
              </Link>
            </li>

            {/* Cart Icon (Only when Authenticated) */}
            {isAuthenticated && (
              <li className="relative cursor-pointer">
                <Link
                  to="/cart"
                  className="hover:text-green-500 dark:hover:text-green-300"
                >
                  🛒
                  <span className="absolute bottom-3 left-4 bg-yellow-400 dark:bg-yellow-500 rounded-full text-xs h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
            )}
          </ul>

          {/* Auth Buttons & Dark Mode Toggle */}
          <div className="flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 border border-red-500 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-300"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 border border-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-300"
                >
                  Signup
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-500 hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-300"
              >
                Logout
              </button>
            )}

            {/* Dark Mode Toggle */}
            {/* <DarkModeToggle /> */}
          </div>
        </nav>

        <div>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {isAuthenticated ? (
              <>
                <Route path="/" element={<Body />} />
                <Route
                  path="/about"
                  element={
                    <Suspense fallback={<Shrimmer />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="/restaurant/:id" element={<RestaurantMenu />} />
                <Route
                  path="/instamart"
                  element={
                    <Suspense fallback={<Shrimmer />}>
                      <InstaMart />
                    </Suspense>
                  }
                />
                <Route path="/cart" element={<Cart />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
