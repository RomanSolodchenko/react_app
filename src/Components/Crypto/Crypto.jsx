import React from "react";
import "./Crypto.css";


const Crypto = () => {
  return (

    <div className="News_block">

{/*       
      <div className="News">
        
      <div class="container">
        <div class="coin-price">
            <div class="logo"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEi32rDKQR2Swi7YfHjDzyZUBGEmxTz77OClnm24SZl7kWuls7fsVCIfAObY_JRJIReQnBWZIPSVfDLSqDvqeu4CCXCoNQIoUGK-OSDUGMtDJFxh9vmU6WGajIgXH4CsR_-sXU0qWbyJTJl7N0BSTB8HcAGSpCJ54G1daZPnU6h2oANo2CTGsbHCoaGJHQ" /></div>
            <div>
                <h1>$<span id="bitcoin"></span></h1>
                <h1>Bitcoin</h1>
            </div>
        </div>
        <div class="coin-price">
            <div class="logo"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEhrUFoHC68rLHQYMV41awqGtoeU6qI-CkSVmcYK-KBCrOvL-jzwLOx8pN-5B8aALsHh1Zc9mmDm8LVQSSpdpsw0v6vrJsv4r9_lv0ic5aYbogc3i3h9mG6ZGMc7g9_cGSRh_soaKmXtpMEOxBFIsmiTa_wticu9T07MbqQ42J9NwowHp8tn8OUIBlhjqA" /></div>
            <div>
                <h1>$<span id="litecoin"></span></h1>
                <h1>Litecoin</h1>
            </div>
        </div>
       
        <div class="coin-price">
            <div class="logo"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEgfcodOJm7ZIXw2kiqdo5abN4cUvFYgyqpKt91zHI8710ltPK5Ny_S5X93w9LSDsF5jW61frn3C8a_8w2GXu4bf0clzxuJljoQ8n6az5EI5zQOcl5W2LScP-1-41NQwPW5A3JWT9EwejtOnHsd3q2-llUsJJQ3Z74v_2FOPn0TrI2529NS9_hmFbvModw" /></div>
            <div>
                <h1>$<span id="ethereum"></span></h1>
                <h1>Ethereum</h1>
            </div>
        </div>
        <div class="coin-price">
            <div class="logo"><img src="https://blogger.googleusercontent.com/img/a/AVvXsEj9YzGIFUSMpRoWE4IjGl_o2zpdPkvtUS6jzIgZWEWl7ztYyV20oXu80A52v0R_nXpt_qXVBzxnfse2_pfeIbVHwQSR3oLqqAyMqVqnzJpdbSCBHA2b_zlheiLY3Bb0PYCEXQny7q-FnGE01ZtxVFVC8DbLWW-ZC1PC-gaqL7IC7ZfRxFOZufcv8lcY1g"/ ></div>
            <div>
                <h1>$<span id="dogecoin"></span></h1>
                <h1>Dogecoin</h1>
            </div>
        </div>

    </div>





      <span>emjngjnrtjng</span>
      </div>
      const btc = document.getElementById("bitcoin");
const ltc = document.getElementById("litecoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

let liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

}); */}

    </div>








  );
};

export default Crypto;
