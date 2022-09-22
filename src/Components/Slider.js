import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="grey-section">
        <div className="slider">
          <div className="slider-img">
            <marquee behavior="scroll" direction="left" scrollamount="10">
              <img
                src="https://openweathermap.org/themes/openweathermap/assets/img/owm-clients-logos-2.png"
                alt=""
                srcset=""
              />
            </marquee>
          </div>
        </div>
      </div>
      <div className="donate-section">
        <p>Leaving everything behind, people are fleeing conflict in Ukraine. They need shelter, food, and water. When you <a href="">subscribe to our service</a>, you can join us to help with <b>donation of just of <span class="currency">£20</span></b>. Openweather <b>will add <span class="currency">£40</span></b> to each donation and send it to <a href="https://www.dec.org.uk/appeal/ukraine-humanitarian-appeal" target="_blank" class="white-text" >Disastrous Emergency Committee's (DEC)</a> Ukrainian Humanitarian Appeal.</p>
      </div>
    </>
  );
}

export default Slider;
