import React, { useEffect, useState } from "react";
import '../style/calculator.css'

function Calculator() {
  const API = "https://blockchain.info/ticker";
  const [countryCurrency, setCountryCurrency] = useState([]);
  const [userCurrency, setUserCurrency] = useState("");
  const [userValue, setUserValue] = useState();
  const [convertedValue, setConvertedValue] = useState();

  async function fetchHandler() {
    const data = await fetch(API);
    const result = await data.json();
    setCountryCurrency(Object.keys(result));
  }

  useEffect(() => {
    fetchHandler();
  }, [API]);

  async function submitHandler() {
    const convertingUrl = `https://blockchain.info/tobtc?currency=${userCurrency}&value=${userValue}`;
    const data = await fetch(convertingUrl);
    const result = await data.json();
    setConvertedValue(result);
  }

  return (
    <div className="currency_exchange_calci">
      <h1>CURRENCY EXCHANGE CALCULATOR</h1>
      <p>
        Enter the amount in your country's currency and get the converted value
        in bitcoin
      </p>
      <input
        placeholder="Enter the amount"
        type="number"
        onChange={(e) => setUserValue(e.target.value)}
      ></input>
      <input
        list="currency"
        placeholder="Enter the currency"
        onSelect={(e) => setUserCurrency(e.target.value)}
      />
      <datalist id="currency" value="currency">
        {countryCurrency.map((currency) => {
          return <option key={currency} value={currency} />;
        })}
      </datalist>
      <button className="btn" onClick={submitHandler}>Convert</button>
      {convertedValue ? <h1 className="output">{convertedValue} bitcoin</h1> : ""}


    </div>
  );
}

export default Calculator;
