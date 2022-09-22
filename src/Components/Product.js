import React from "react";
import "./Product.css";

function Product() {
  return (
    <>
      <div className="product-section">
        <div className="product-container">
          <h2>Our new products</h2>

          <div className="products">
            <div class="product">
              <img src="https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-one-call.jpg" />
              <p class="orange-text">
                <a href="/api/solar-radiation">Solar Radiation API</a>
              </p>
              <p>
                This product provides users with current, forecast and
                historical solar radiation data for any coordinates on the
                globe. It includes DNI, DHI and GHI indices for the Clear Sky
                and Cloudy Sky models.
              </p>
            </div>
            <div className="product">
              <img
                src="	https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-alerts-push.png"
                alt=""
              />
              <p class="orange-text">
                <a href="">Global weather alerts via push notifications</a>
              </p>
              <p>
                This product collects weather warnings from the major weather
                warning systems and presents them in a uniform and convenient
                data format. Push notification mechanism will allow to get
                timely notifications about severe weather.
              </p>
            </div>
            <div className="product">
              <img
                src="	https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-alert-pull.png"
                alt=""
              />
              <p class="orange-text">
                <a href="">Road Risk API</a>
              </p>
              <p>
                Enhance your short-term planning with Road Risk API by
                exploiting an accurate minute-by-minute forecast for 2 hours,
                hourly weather forecast and national alerts for five-days. The
                weather data is provided for any moment of time for 5 days ahead
                and 5 days back, covering any destination and any point along
                the route.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
