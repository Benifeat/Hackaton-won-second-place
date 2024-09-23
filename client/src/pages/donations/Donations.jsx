import { useState } from "react";
import foodImage from "../../assets/img/food.jpeg";
import medicalImg from "../../assets/img/Medical help.jpg";
import clothImg from "../../assets/img/clothes.jpeg";
import holidayImg from "../../assets/img/holidy.jpg";
import bitImg from "../../assets/img/bit.jpeg";

function Donations() {
  const [amount, setAmount] = useState("");
  const [cart, setCart] = useState([]);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const MAX_LIMIT = 3;

  const handleDonateClick = (donation) => {
    const itemCount = cart.filter(item => item.title === donation.title).length;

    if (itemCount >= MAX_LIMIT) {
      alert(`You can only add up to ${MAX_LIMIT} of this item to the cart.`);
      return;
    }

    setAmount(donation.amount);
    setCart((prevCart) => [...prevCart, donation]);
  };

  const handleAddCustomAmountToCart = () => {
    if (customAmount) {
      setCart((prevCart) => [
        ...prevCart,
        { title: "Custom Donation", amount: `₪${customAmount}` }
      ]);
      setCustomAmount(""); 
    }
  };

  const handleProceedToPayment = () => {
    if (!donationType) {
      setValidationMessage("Please select a donation type.");
      return;
    }

    alert("Proceeding to payment");
    setValidationMessage(""); 
  };

  const handleCheckboxChange = (value) => {
    setDonationType(value);
  };

  const handleRemoveFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-pink-950/10 py-6 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-600 mb-4">
          Your Donation Makes a Difference!
        </h1>
        <p className="text-lg text-gray-600">
          100% of your donation goes directly to those in need.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {[
          { img: foodImage, title: "Hot Meal", amount: "₪100" },
          { img: clothImg, title: "Hygiene & Clothing", amount: "₪180" },
          { img: medicalImg, title: "Medical Help", amount: "₪360" },
          { img: holidayImg, title: "A Holiday Meal", amount: "₪150" },
          
        ].map((donation, index) => (
          <div
            key={index}
            className="relative flex flex-col text-center border-2 border-red-400 rounded-xl p-6 bg-pink-100 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-xl"
              style={{
                backgroundImage: `url(${donation.img})`,
                opacity: 0.3,
                zIndex: 1,
              }}
            ></div>
            <div className="relative z-10 p-4">
              <span className="text-2xl font-semibold text-gray-800">{donation.title}</span>
              <p className="text-xl font-bold text-gray-900 mt-2">{donation.amount}</p>
              <button
                className="mt-4 rounded-full px-6 py-2 bg-pink-800 text-white font-semibold hover:bg-pink-500 transition duration-300"
                onClick={() => handleDonateClick(donation)}
              >
                I Want to Donate
              </button>
            </div>
          </div>
        ))}

        <div className="relative flex flex-col text-center border-2 border-red-400 rounded-xl p-6 bg-pink-100 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          <div className="relative z-10 p-4">
            <div className="flex items-center mb-4">
              <span className="text-4xl font-bold text-gray-800 mr-4">₪</span>
              <input
                className="flex-1 p-3 rounded-xl bg-pink-50 order-2 border-gray-300 text-gray-800 text-lg"
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter a free amount"
              />
            </div>
            <button
              className="w-full rounded-full px-6 py-2 bg-pink-800 text-white font-semibold hover:bg-pink-500 transition duration-300"
              onClick={handleAddCustomAmountToCart}
            >
              Add to Cart
            </button>
            <div className="flex flex-col gap-2 mb-4 mt-4">
              {["One-time donation", "Standing order until cancellation"].map(option => (
                <label key={option} className="inline-flex items-center text-gray-700 text-lg">
                  <input
                    type="checkbox"
                    value={option}
                    className="form-checkbox h-6 w-6 text-gray-300"
                    checked={donationType === option}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
            {validationMessage && (
              <p className="text-red-600 text-lg text-center">{validationMessage}</p>
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="m-2 p-4 bg-pink-100 border-2 border-gray-300 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 px-2 text-center">Your Cart</h2>
            <ul className="list-disc list-inside mb-4">
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-gray-800 mb-2">
                  <span>{item.title}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2">{item.amount}</span>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleRemoveFromCart(index)}
                    >
                      &#10005;
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="w-full text-center align-center rounded-full px-6 py-12  text-white font-semibold hover:bg-pink-300 transition duration-100"
              style={{
              backgroundImage: `url(${bitImg})`,
              }}
              onClick={handleProceedToPayment}
            >
              
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donations;
