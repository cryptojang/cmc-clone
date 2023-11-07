const CoinLine = ({ name, price, h }) => {
  return (
    <div className="flex justify-between p-3 border-b-[1px] ">
      <div className="">{name}</div>
      <div>{price}</div>
      <div>{h}</div>
    </div>
  );
};

export default CoinLine;
