import React from "react";
import { useDataLayer } from "./../../store/dataLayer";
import { moneySeparator } from "./../../utils/mathUtils";

const CheckoutProductTable = () => {
  const [{ cart }] = useDataLayer();
  return (
    <table className="table ">
      <thead>
        <tr>
          <th>No.</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart &&
          cart?.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <div className="checkout__productImage">
                  <img src={product.image} alt={product.title} />
                </div>
              </td>
              <td>{`$${moneySeparator(product.price)}`}</td>
              <td>{product.quantity}</td>
              <td>{`$${moneySeparator(product.price * product.quantity)}`}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CheckoutProductTable;
