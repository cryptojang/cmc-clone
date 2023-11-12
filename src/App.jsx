import { useEffect, useState } from "react";
import CoinLine from "./components/CoinLine";
import axios from "axios";

const App = () => {
  const [coinPrices, setCoinPrices] = useState([]);
  const [coinList, setCoinList] = useState();

  const getCoinMarket = async () => {
    try {
      const response = await axios.get("https://api.upbit.com/v1/market/all");
      setCoinList(response.data);
      console.log(response.data, "Hi");
      console.log(response.data.length);
      let coinapi = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";

      for (let i = 1; i < response.data.length; i++) {
        if (response.data[i].market.substring(0, 3) === "KRW") {
          coinapi = coinapi + "," + response.data[i].market;
        }
      }
      console.log(coinapi);

      getCoinPrices(coinapi);
    } catch (error) {
      console.error(error);
    }
  };

  const getCoinPrices = async (address) => {
    try {
      //console.log(`${address}`);
      //console.log("https://api.upbit.com/v1/ticker?markets=KRW-BTC");
      //console.log(typeof address);
      // const response = await axios.get(
      //   "https://api.upbit.com/v1/ticker?markets=KRW-BTC"
      // );
      const response = await axios.get(address);
      console.log(response.data);
      setCoinPrices(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinMarket();
  }, []);

  return (
    <div>
      <header className="border-b-[1px] flex justify-between text-3xl p-4">
        <div>CoinMarketCap</div>
        <ul className="flex gap-6 text-4xl item-center">
          <li>🔍</li>
          <li>💎</li>
          <li>≡</li>
        </ul>
      </header>
      <ul className="flex border-b-[1px] gap-4 text-xs p-2">
        <li>
          가상자산: <span className="text-blue-600 ">2M+</span>
        </li>
        <li>
          거래소: <span className="text-blue-600 "></span>672
        </li>
        <li>
          시가총액: <span className="text-blue-600 ">$1.32T</span>
        </li>
        <li>
          24시간 거래량: <span className="text-blue-600 ">$42.27B</span>
        </li>
        <li>
          도미넌스:{" "}
          <span className="text-blue-600 ">BTC: 51/5% ETH: 17.1%</span>
        </li>
        <li>
          ETH 가스: <span className="text-blue-600 ">42 Gwei</span>
        </li>
      </ul>
      <div>
        <div className="flex justify-between p-4">
          <ul>
            <li className="text-3xl">
              오늘의 시가총액별 상위 100개의 가상자산
            </li>
            <li className="text-slate-400 pt-2">
              글로벌 가상자산 시가총액은 $1.32T,로 지난 하루 동안{" "}
              <span className="text-red-500">▼ 0.98%</span> 하락했습니다.{" "}
              <span className="underline-offset-2 ">숨기기</span>{" "}
            </li>
          </ul>
          <button>하이라이트</button>
        </div>
        <div className="flex justify-between">
          <div className="bg-red-100 w-96 h-48 rounded-xl shadow-md p-4">
            <h2 className="text-xl pb-2 ">🔥 인기 가상자산 TOP3 </h2>
            <ul>
              <div className="flex justify-between p-2">
                <div>
                  1 🎃 XRP <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 4.74%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  2 🎃 Memecoin <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 6.94%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  3 🎃 Solana <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-green-500">▲ 1.34%</div>
              </div>
            </ul>
          </div>
          <div className="bg-red-100 w-96 h-48 rounded-xl shadow-md p-4">
            <h2 className="text-xl pb-2 ">🔥 인기 가상자산 TOP3 </h2>
            <ul>
              <div className="flex justify-between p-2">
                <div>
                  1 🎃 XRP <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 4.74%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  2 🎃 Memecoin <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 6.94%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  3 🎃 Solana <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-green-500">▲ 1.34%</div>
              </div>
            </ul>
          </div>
          <div className="bg-red-100 w-96 h-48 rounded-xl shadow-md p-4">
            <h2 className="text-xl pb-2 ">🔥 인기 가상자산 TOP3 </h2>
            <ul>
              <div className="flex justify-between p-2">
                <div>
                  1 🎃 XRP <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 4.74%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  2 🎃 Memecoin <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-red-500">▼ 6.94%</div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  3 🎃 Solana <span className="text-slate-400">XRP</span>{" "}
                </div>
                <div className="text-green-500">▲ 1.34%</div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div></div>
      <section className=" py-3 px-12">
        <ul className="border-b-[1px] p-4 flex gap-4">
          <li>⚃가상자산</li>
          <li>≔카테고리</li>

          <li>🔥Bitcoin Ecosystem</li>

          <li>🔥Telegram Bot</li>
        </ul>
        <div className="border-b-[1px] flex px-3 py-1">
          <div className="w-8">#</div>
          <div className="w-48">이름</div>
          <div className="w-40">가격(₩)</div>
          <div className="w-40">변화</div>
          <div className="w-36">변화율</div>
          <div>거래량</div>
        </div>

        <div>
          {coinPrices.map((v, i) => {
            return (
              <CoinLine
                key={i}
                coinPrices={v}
                coinList={coinList[i]}
                numb={i}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default App;
