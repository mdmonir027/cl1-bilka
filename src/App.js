import React, { useEffect } from "react";
import "./App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home";
import Footer from "./Components/footer/Footer";
import SingleProduct from "./Components/singleProduct/SingleProduct";
import products from "./fakeData/products";
import { FETCH_PRODUCTS_DATA } from "./store/actions";
import { useDataLayer } from "./store/dataLayer";
import AllProducts from "./pages/AllProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderedProduct from "./pages/dashboard/OrderedProduct";

const App = () => {
  const [_, dispatch] = useDataLayer();

  // useEffect
  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS_DATA,
      payload: { products },
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/product/:id" component={SingleProduct} />
        </Switch>
        <Switch>
          <Route path="/products" exact component={AllProducts} />
        </Switch>
        <Switch>
          <Route path="/admin/dashboard" exact component={Dashboard} />
        </Switch>
        <Switch>
          <Route path="/admin/ordered-items" exact component={OrderedProduct} />
        </Switch>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
