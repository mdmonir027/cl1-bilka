import React, { useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/header/Header";
import Home from "./pages/Home";
import Footer from "./Components/footer/Footer";
import SingleProduct from "./Components/singleProduct/SingleProduct";
import products from "./fakeData/products";
import { FETCH_PRODUCTS_DATA } from "./store/actions";
import { useDataLayer } from "./store/dataLayer";

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
          <Route path="/product/:id" exact component={SingleProduct} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
