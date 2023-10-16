import React from "react";

const WalletItem = ({ name, icon }) => {
  return (
    <div className="border-2 border-primary text-gray-500 hover:text-white transition duration-150 ease-in-out rounded-xl mt-3 cursor-pointer inline-flex items-center w-full overflow-hidden p-3">
      <img src={icon} alt="wallet" className="md:w-12 w-9 rounded-lg" />
      <h1 className="p-3 text-sm">{name}</h1>
    </div>
  );
};

export default WalletItem;
