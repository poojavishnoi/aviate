import React from "react";
import "../style/home.css";
import {Link} from 'react-router-dom'
import Calculator from "../components/Calculator";

function Home() {

  return (
    <div className="home_container">
      <img
        className="image"
        src="https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&dpr=2"
        alt="home_img"
      />
      <div className="home_content">
        <h1>Bitcoin and Blockchain Explained</h1>
        <div className="cards">
          <div className="bitcoin_card card">
            <img src="https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <div className="card_content">
            <h2>BITCOIN</h2>
            <h4>Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</h4>
            <Link to="/bitcoin">
            <button className="read_btn">Read more</button>
            </Link>
            </div>
          </div>
          <div className="card blockchain_card">
            <div className="card_content">
            <h2>BLOCKCHAIN</h2>
            <h4>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. </h4>
            <Link to='/blockchain'>
            <button className="read_btn">Read more</button>
            </Link>
            </div>
            <img src="https://images.pexels.com/photos/9588213/pexels-photo-9588213.jpeg" alt="" />
          </div>
        </div>

      </div>
      <Calculator/>

    </div>
  );
}

export default Home;
