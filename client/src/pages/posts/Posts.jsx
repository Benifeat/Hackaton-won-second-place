import { useState } from "react";
import photo1 from "../../assets/img/girl.jpg";
import photo2 from "../../assets/img/girl2.jpg";
import photo3 from "../../assets/img/men.jpg";

function Posts() {
  const getRandomLikes = () => Math.floor(Math.random() * 1000);

  const [likesPost1, setLikesPost1] = useState(getRandomLikes());
  const [isLikedPost1, setIsLikedPost1] = useState(false);

  const [likesPost2, setLikesPost2] = useState(getRandomLikes());
  const [isLikedPost2, setIsLikedPost2] = useState(false);

  const [likesPost3, setLikesPost3] = useState(getRandomLikes());
  const [isLikedPost3, setIsLikedPost3] = useState(false);

  const handleLikePost1 = () => {
    if (!isLikedPost1) {
      setLikesPost1((prevLikes) => prevLikes + 1);
      setIsLikedPost1(true);
    }
  };

  const handleLikePost2 = () => {
    if (!isLikedPost2) {
      setLikesPost2((prevLikes) => prevLikes + 1);
      setIsLikedPost2(true);
    }
  };

  const handleLikePost3 = () => {
    if (!isLikedPost3) {
      setLikesPost3((prevLikes) => prevLikes + 1);
      setIsLikedPost3(true);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 m-4 bg-white shadow-lg rounded-2xl">
     
      <div className="flex flex-col p-4 bg-blue-50 rounded-2xl shadow-sm">
        <div className="flex items-center mb-4">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-blue-400"
            style={{ backgroundImage: `url(${photo1})` }}
          ></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Michal Levi</h1>
            <p className="text-sm text-gray-500">Subject: Financial</p>
          </div>
        </div>
        <div className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Eco-Friendly Financial Consulting: A Path to Sustainable Prosperity
          </h2>
          <p className="leading-relaxed">
            In today’s world, financial decisions are about more than just
            profits—they’re about protecting our planet, too. Eco-friendly
            financial consulting helps individuals and businesses make smart,
            sustainable choices that align with environmental goals. By
            investing in green technologies, supporting ethical companies, and
            reducing waste, eco-friendly finance not only boosts your bottom
            line but also contributes to a healthier, more sustainable future.
            Let’s work together to create wealth that doesn’t cost the Earth.
            Sustainable prosperity is within reach! 🌍💚
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className={`bg-blue-600 text-white px-4 py-2 rounded-full ${
              isLikedPost1
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-blue-700"
            } transition duration-300`}
            onClick={handleLikePost1}
            disabled={isLikedPost1}
          >
            Like
          </button>
          <span className="ml-2 text-gray-700 text-lg">{likesPost1} Likes</span>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-green-50 rounded-2xl shadow-sm">
        <div className="flex items-center mb-4">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-green-400"
            style={{ backgroundImage: `url(${photo2})` }}
          ></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Sarah Cohen</h1>
            <p className="text-sm text-gray-500">Subject: Health & Wellness</p>
          </div>
        </div>
        <div className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Holistic Health: Integrating Mind, Body, and Spirit
          </h2>
          <p className="leading-relaxed">
            Achieving optimal health requires a holistic approach that considers
            the mind, body, and spirit. By integrating practices like
            meditation, balanced nutrition, and regular exercise, you can
            enhance your overall well-being. Holistic health is not just about
            treating symptoms—it’s about creating a lifestyle that promotes
            long-term wellness and harmony. Join us in exploring the journey to
            a healthier, more balanced life. Your body and mind will thank you!
            🧘‍♀️🌱
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className={`bg-green-600 text-white px-4 py-2 rounded-full ${
              isLikedPost2
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-green-700"
            } transition duration-300`}
            onClick={handleLikePost2}
            disabled={isLikedPost2}
          >
            Like
          </button>
          <span className="ml-2 text-gray-700 text-lg">{likesPost2} Likes</span>
        </div>
      </div>

      <div className="flex flex-col p-4 bg-yellow-50 rounded-2xl shadow-sm">
        <div className="flex items-center mb-4">
          <div
            className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-yellow-400"
            style={{ backgroundImage: `url(${photo3})` }}
          ></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">Or Chen</h1>
            <p className="text-sm text-gray-500">Subject: Technology</p>
          </div>
        </div>
        <div className="text-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            The Future of Technology: Embracing Innovation and Change
          </h2>
          <p className="leading-relaxed">
            Technology is rapidly evolving, and staying ahead of the curve is
            essential for both individuals and businesses. Embracing innovation
            and adapting to new advancements can open up opportunities for
            growth and success. From artificial intelligence to blockchain
            technology, the future is full of exciting possibilities. Join us as
            we explore the latest trends and prepare for a future where
            technology shapes our world in new and transformative ways. 🚀💻
          </p>
        </div>
        <div className="flex items-center mt-4">
          <button
            className={`bg-yellow-600 text-white px-4 py-2 rounded-full ${
              isLikedPost3
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-yellow-700"
            } transition duration-300`}
            onClick={handleLikePost3}
            disabled={isLikedPost3}
          >
            Like
          </button>
          <span className="ml-2 text-gray-700 text-lg">{likesPost3} Likes</span>
        </div>
      </div>
    </div>
  );
}

export default Posts;
