const CoinLine = ({ coinPrices, coinList, numb }) => {
  return (
    <div className="flex p-3 border-b-[1px] ">
      <div className="w-8">{numb + 1}</div>
      <div className="w-48"> {coinList.korean_name}</div>

      <div className="w-40"> {coinPrices.trade_price}</div>
      <div className="w-40">{coinPrices.change}</div>
      <div className="w-36"> {coinPrices.change_rate}</div>
      <div>{coinPrices.trade_volume}</div>
    </div>
  );
};

export default CoinLine;
