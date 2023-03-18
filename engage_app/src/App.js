// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Policy from './pages/Policy'
// import Pagenotfound from './pages/Pagenotfound'
// import Register from './pages/Auth/Register';
// import Login from './pages/Auth/Login';
// import Dashboard from './pages/user/Dashboard';
// import ForgotPassword from './pages/Auth/ForgotPassword';
// // import PrivateRoute from './components/Routes/Private'
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import AdminRoute from "./components/Routes/AdminRoute";

// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path='/' element ={ <HomePage /> } />

//       <Route path='/register' element ={ <Register /> } />
//       <Route path='/login' element ={ <Login /> } />
//       {/* <Route path='/dashboard' element ={<PrivateRoute/> }> */}
//         <Route path='/dashboard' element ={<Dashboard/>} />
//       {/* </Route> */}
//       <Route path="/dashboard" element={<AdminRoute />}>
//           <Route path="admin" element={<AdminDashboard />} />
//           {/* <Route path="admin/create-category" element={<CreateCategory />} />
//           <Route path="admin/create-product" element={<CreateProduct />} />
//           <Route path="admin/product/:slug" element={<UpdateProduct />} />
//           <Route path="admin/products" element={<Products />} />
//           <Route path="admin/users" element={<Users />} />
//           <Route path="admin/orders" element={<AdminOrders />} /> */}
//         </Route>
//       <Route path='/forgotpassword' element ={<ForgotPassword/>} />

//       <Route path='/about' element ={ <About/> } />
//       <Route path='/contact' element ={ <Contact /> } />
//       <Route path='/policy' element ={ <Policy /> } />
//       <Route path='/*' element ={ <Pagenotfound/> } />
//     </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SocialMedia from "./pages/SocialMedia";
// import NewsletterSignup from "./Newsletter/NewsletterSignup";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import UserProfile from "./pages/user/UserProfile";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import UserBlogs from "./pages/UserBlogs";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/all-blog" element={<SocialMedia />} />
        <Route path="/my-blogs" element={<UserBlogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/newsletter" element={<NewsletterSignup />} /> */}
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
