import React, { useEffect, useState } from "react";
import ShoeDetails from "../ShoeDetails/ShoeDetails";

const MoreShoes = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 py-10">
      {shoes.map((shoe) => (
        <ShoeDetails key={shoe.id} shoe={shoe}></ShoeDetails>
      ))}
    </div>
  );
};

export default MoreShoes;
