import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import ProductDetail from '../pages/ProductDetail';
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
import AdminDashboard from '../pages/AdminDashboard';
// import AdminUsers from '../pages/AdminUsers';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';

const RouteConfig = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/product/:id" component={ProductDetail} /> */}

        {/* <PrivateRoute path="/cart" component={Cart} /> */}
        {/* <PrivateRoute path="/checkout" component={Checkout} /> */}

        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        {/* <AdminRoute path="/admin/users" component={AdminUsers} /> */}
      </Routes>
    </Router>
  );
};

export default RouteConfig;
