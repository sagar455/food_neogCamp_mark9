import React, { useState } from "react";
import "./styles.css";

const restaurantDb = {
  Chinese: [
    {
      name: "SHANG PALACE",
      review:
        "  Food quality and quantity was really very good.. especially the prawn rolls",
      rating: "4.5/5"
    },
    {
      name: "SHAO",
      review: "	Excellent Chinese food and service",
      rating: "4.5/5"
    },
    {
      name: "YAUATCHA",
      review: "Delectable Dumplings and Noodles and Lots...",
      rating: "4/5"
    },
    {
      name: "MAINLAND CHINA",
      review: "Delectable Dumplings and Noodles and Lots... ",
      rating: "4/5"
    }
  ],

  Continental: [
    {
      name: "CLOUD CAFE",
      review: "The ambiance is very welcoming and charming",
      rating: "4/5"
    },
    {
      name: "CHAVADI RESTAURANT",
      review:
        "This place is great! Atmosphere is chill and cool but the staff is also really friendly.",
      rating: "4.1/5"
    },
    {
      name: "BLYTONS",
      review: "This cozy restaurant has left the best impressions!",
      rating: "4/5"
    },
    {
      name: "THE ONLY PLACE",
      review: "A jolly ambiance, lively staff, and aromatic food ...",
      rating: "4.2/5"
    }
  ],

  Thai: [
    {
      name: "LAN THAI",
      review: "The ambiance is awesome",
      rating: "4.3/5"
    },
    {
      name: "THAI HOUSE",
      review: "This is my absolute favorite restaurant Banglore.",
      rating: "4.4/5"
    },
    {
      name: "TIM TAI",
      review: "Excellent food...",
      rating: "4.2/5"
    }
  ],

  Italian: [
    {
      name: "E2P ITALIAN PIZZA & BURGER",
      review: "This place is great! ",
      rating: "4.9/5"
    },
    {
      name: "TOSCANO",
      review: "The ambiance is very welcoming and charming",
      rating: "4.2/5"
    },
    {
      name: "AMBROSIA",
      review: "Excellent Thai food and service",
      rating: "4.3/5"
    }
  ]
};

export default function App() {
  const [selectedFood, setFood] = useState("Chinese");
  function foodClickHandler(food) {
    setFood(food);
  }
  return (
    <div className="App">
      <h1
        style={{
          borderBottom: "5px solid #F97068",
          fontSize: "4rem",
          textAlign: "center"
        }}
      >
        Kϋche Rezension
      </h1>

      <p style={{ fontSize: "1rem" }}>
        Checkout my favorite places for different food styles.
      </p>

      {Object.keys(restaurantDb).map((food) => (
        <button
          onClick={() => foodClickHandler(food)}
          style={{
            cursor: "pointer",
            background: "inherit",
            borderRadius: "0.5rem",
            padding: "0.5rem  1rem",
            border: "1px solid #F97068",
            color: "#F97068",
            margin: "1rem 0.3rem"
          }}
        >
          {food}
        </button>
      ))}

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {restaurantDb[selectedFood].map((reastaurantDB) => (
            <li
              key={reastaurantDB.name}
              style={{
                listStyle: "none",
                padding: "1.5rem",
                border: "1.5px solid #57C4E5",
                backgroundColor: "#2D364D",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "20px" }}> {reastaurantDB.name} </div>
              <div style={{ fontSize: "smaller", margin: "1rem 0rem" }}>
                {reastaurantDB.review}
              </div>
              <div style={{ fontSize: "smaller", color: "#D1D646" }}>
                {reastaurantDB.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
