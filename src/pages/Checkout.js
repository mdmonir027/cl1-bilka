import React, { useState, useEffect } from "react";
import DashboardBanner from "./../Components/dashboard/dashboard/DashboardBanner";
import "./style/Checkout.scss";
import { useDataLayer } from "./../store/dataLayer";
import { totalPrice, moneySeparator } from "./../utils/mathUtils";
import CheckoutProductTable from "../Components/checkout/CheckoutProductTable";
import validator from "validator";

import Modal from "@material-ui/core/Modal";
import { CHECKOUT_PRODUCTS } from "./../store/actions";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    postCode: "",
    phone: "",
    upzila: "",
    zila: "",
  });
  const [errors, setErrors] = useState({});
  const [shippingFee, setShippingFee] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [messageModal, setMessageModal] = useState(false);

  const [{ cart }, dispatch] = useDataLayer();

  useEffect(() => setShippingFee(cart.length > 0 ? 100 : 0), [cart]);

  const subTotalsSum = () => {
    if (!cart || cart.length < 1) return 0;
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].totalPrice;
    }
    return sum + shippingFee;
  };

  const inputChangeHandler = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const checkoutProduct = () => {
    console.log("check");
    const validate = validation();

    if (validate.isValid) {
      setErrors({});
      dispatch({
        type: CHECKOUT_PRODUCTS,
      });
      setMessageModal(true);
      setUser({
        name: "",
        email: "",
        address: "",
        postCode: "",
        phone: "",
        upzila: "",
        zila: "",
      });
    } else {
      setErrors(validate.errors);
    }
  };

  const validation = () => {
    const errors = {};
    const { name, email, address, phone, postCode, upzila, zila } = user;

    if (!name) {
      errors.name = emptyMessage("name");
    }

    if (!email) {
      errors.email = emptyMessage("email");
    } else if (!validator.isEmail(email)) {
      errors.email = "Please enter a valid email";
    }

    if (!phone) {
      errors.phone = emptyMessage("phone no");
    }

    if (!postCode) {
      errors.postCode = emptyMessage("post code");
    }

    if (!address) {
      errors.address = emptyMessage("address");
    }
    if (!zila) {
      errors.zila = emptyMessage("zila");
    }
    if (!upzila) {
      errors.upzila = emptyMessage("upzila");
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  const emptyMessage = (value) => `Please enter your ${value}`;

  //  modal

  return (
    <div className="checkout">
      <DashboardBanner title="Checkout" />
      <div className="checkout__wrapper">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="checkout__form"
        >
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`form__control ${errors?.name ? "is-invalid" : ""}`}
              placeholder="Enter full name"
              value={user.name}
              onChange={inputChangeHandler}
            />
            {errors?.name && (
              <div className="invalid-feedba">{errors?.name}</div>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`form__control ${errors?.email ? "is-invalid" : ""}`}
              placeholder="Enter emaill address"
              value={user.email}
              onChange={inputChangeHandler}
            />

            {errors?.email && (
              <div className="invalid-feedba">{errors?.email}</div>
            )}
          </div>
          <div className="form__group">
            <label htmlFor="address" className="form__label">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className={`form__control ${errors?.email ? "is-invalid" : ""}`}
              placeholder="Enter your address"
              value={user.address}
              onChange={inputChangeHandler}
            />

            {errors?.email && (
              <div className="invalid-feedba">{errors?.email}</div>
            )}
          </div>
          <div className="form__groupy">
            <div className="form__group">
              <label htmlFor="postCode" className="form__label">
                Post Code
              </label>
              <input
                type="number"
                name="postCode"
                id="postCode"
                className={`form__control ${
                  errors?.postCode ? "is-invalid" : ""
                }`}
                placeholder="Enter post code"
                value={user.postCode}
                onChange={inputChangeHandler}
              />

              {errors?.postCode && (
                <div className="invalid-feedba">{errors?.postCode}</div>
              )}
            </div>
            <div className="form__group">
              <label htmlFor="phone" className="form__label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className={`form__control ${errors?.phone ? "is-invalid" : ""}`}
                placeholder="Enter phone number"
                value={user.phone}
                onChange={inputChangeHandler}
              />

              {errors?.phone && (
                <div className="invalid-feedba">{errors?.phone}</div>
              )}
            </div>
          </div>
          <div className="form__groupy">
            <div className="form__group">
              <label htmlFor="upzila" className="form__label">
                Upzila
              </label>
              <input
                type="text"
                name="upzila"
                id="upzila"
                className={`form__control ${
                  errors?.upzila ? "is-invalid" : ""
                }`}
                placeholder="Your upzila"
                value={user.upzila}
                onChange={inputChangeHandler}
              />

              {errors?.upzila && (
                <div className="invalid-feedba">{errors?.upzila}</div>
              )}
            </div>
            <div className="form__group">
              <label htmlFor="zila" className="form__label">
                Zila
              </label>
              <input
                type="text"
                name="zila"
                id="zila"
                className={`form__control ${errors?.zila ? "is-invalid" : ""}`}
                placeholder="Enter zila"
                value={user.zila}
                onChange={inputChangeHandler}
              />

              {errors?.zila && (
                <div className="invalid-feedba">{errors?.zila}</div>
              )}
            </div>
          </div>
        </form>
        <div className="checkout__products">
          <h3 className="checkout__productsTitle">
            Check your details and products before go furhter
          </h3>
          <CheckoutProductTable />
          <div className="checkout__orderSummary">
            <h3 className="summary__title">Order Summarry</h3>
            <div className="summary__item">
              <span className="name">{`SubTotal (${cart.length} items)`}</span>
              <span className="value">{`$${totalPrice(cart)}`}</span>
            </div>
            <div className="summary__item">
              <span className="name">Shipping Fee </span>
              <span className="value">{`+ $${shippingFee}`}</span>
            </div>
            <div className="summary__item">
              <span className="name">Promotions </span>
              <span className="value">{`$${0}`}</span>
            </div>
            <div className="coupon__inputBox">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="coupon__input"
                placeholder="Enter your coupon code"
              />
              <button className="coupon__applyBtn">Apply</button>
            </div>
            <div className="summary__item">
              <span className="name">Total Price </span>
              <span className="value">${moneySeparator(subTotalsSum())}</span>
            </div>
          </div>

          <button onClick={checkoutProduct} className="checkout__btn">
            Process to Checkout
          </button>
        </div>
      </div>

      <div>
        <Modal
          open={messageModal}
          onClose={() => setMessageModal(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={` checkout__modal`}>
            <h2 id="simple-modal-title">Thanks for ordering our product</h2>
            <p id="simple-modal-description">
              We will shift your product in 7 bussiness days
            </p>
            content
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Checkout;
