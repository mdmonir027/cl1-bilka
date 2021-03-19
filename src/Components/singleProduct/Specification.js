import React from "react";

const Specification = ({ specifications }) => {
  return (
    <div className="singleProduct__specification">
      <h2 className="singleProduct__title">Specifications</h2>
      <ul className="singleProduct__specList">
        {specifications &&
          specifications.map((item) => (
            <li className="singleProduct__specItem" key={item.name}>
              <p className="singleProduct__property">{item.name}</p>
              <p className="singleProduct__value">{item.value}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Specification;
