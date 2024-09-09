import { useEffect, useState } from "react";

export default function CurrencyComponent() {
  const [currency, setCurrency] = useState([]);
  //   const [jpyCurrency, setJpyCurrency] = useState([]);
  useEffect(() => {
    getData();
    handleBuy();
  }, []);

  const getData = async () => {
    try {
      const dataApi = await fetch(
        "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=8447595d56424b38970b57ed979314c0"
      );
      const result = await dataApi.json();
      //   setCurrencyData(result);
      //   console.log(result.rates?.CAD);
      setCurrency(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuy = (currency) => {
    let manipulateDiscount = currency * 0.05;
    let result = Number(currency) + Number(manipulateDiscount);
    // console.log(manipulateDiscount);
    // console.log(jpyCurrency);
    // console.log(result);

    return result;
  };
  const handleSell = (currency) => {
    let manipulateDiscount = currency * 0.05;
    let result = Number(currency) - Number(manipulateDiscount);
    // console.log(manipulateDiscount);
    // console.log(jpyCurrency);
    // console.log(result);

    return result;
  };

  return (
    <>
      <table
        className="table table-hover text-center text-white"
        style={{ backgroundColor: "#E47947" }}
      >
        <tr>
          <th></th>
          <th>WE BUY</th>
          <th>EXCHANGE RATE</th>
          <th>WE SELL</th>
        </tr>
        <tr>
          <td className="font-weight-bold">CAD</td>
          <td>{handleBuy(Number(currency?.rates?.CAD))}</td>
          <td>{Number(currency?.rates?.CAD)}</td>
          <td>{handleSell(Number(currency?.rates?.CAD))}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">IDR</td>
          <td>{handleBuy(currency?.rates?.IDR)}</td>
          <td>{currency?.rates?.IDR}</td>
          <td>{handleSell(currency?.rates?.IDR)}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">JPY</td>
          <td>{handleBuy(currency?.rates?.JPY)}</td>
          <td>{currency?.rates?.JPY}</td>
          <td>{handleSell(currency?.rates?.JPY)}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">CHF</td>
          <td>{handleBuy(currency?.rates?.CHF)}</td>
          <td>{currency?.rates?.CHF}</td>
          <td>{handleSell(currency?.rates?.CHF)}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">EUR</td>
          <td>{handleBuy(currency?.rates?.EUR)}</td>
          <td>{currency?.rates?.EUR}</td>
          <td>{handleSell(currency?.rates?.EUR)}</td>
        </tr>
        <tr>
          <td className="font-weight-bold">USD</td>
          <td>{handleBuy(currency?.rates?.USD)}</td>
          <td>{currency?.rates?.USD}</td>
          <td>{handleSell(currency?.rates?.USD)}</td>
        </tr>
      </table>
    </>
  );
}
