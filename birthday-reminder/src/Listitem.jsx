import React from "react";

const Listitem = ({ item }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={item.image} />
      </div>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="age">{item.age} years</div>
      </div>
    </div>
  );
};

export default Listitem;
