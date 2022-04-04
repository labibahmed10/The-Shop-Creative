import React from "react";

const ShoeDetails = ({ shoe }) => {
  console.log(shoe);

  const { img, name, price, category } = shoe;
  return (
    <div className="w-[22rem] p-2 border-2 mx-auto text-[#84A59D]">
      <img src={img} alt="" />
      <div>
        <h2 className="text-xl pt-3 pb-4">Name : {name.length > 30 ? name.slice(0, 20) : name}</h2>
        <p className="text-xl">Price : ${price}</p>
        <p className="text-xl py-1">Category : {category}</p>
      </div>
    </div>
  );
};

export default ShoeDetails;
