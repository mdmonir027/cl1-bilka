import React from "react";
import DashboardTopBar from "../../Components/dashboard/dashboard/DashboardTopBar";
import DashboardBanner from "./../../Components/dashboard/dashboard/DashboardBanner";
import "./style/OredetProducts.scss";

const OrderedProduct = () => {
  const [items, setItems] = React.useState([
    {
      id: 1,
      title: "product title",
      amount: 2,
      price: 200,
      orderedAt: new Date(),
    },
    {
      id: 2,
      title: "product title",
      amount: 2,
      price: 200,
      orderedAt: new Date(),
    },
    {
      id: 3,
      title: "product title",
      amount: 2,
      price: 200,
      orderedAt: new Date(),
    },
  ]);
  return (
    <div className="dashboard">
      <DashboardBanner title="Ordered Item" />
      <DashboardTopBar />
      <div className="ordertItems">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Ordered At</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{item.orderedAt.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedProduct;
