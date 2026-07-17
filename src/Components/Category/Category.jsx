import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import SeaFoodCat from "../../assets/meat-and-seafood.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      //Card
      <div className="flex-1 basis-75" key={card.id}>
        {/* Card Image */}
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} className="absolute bottom-0" />
        </div>

        {/* Card Content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-linear-to-b from-rose-400 to-rose-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-rose-600 transition-all duration-300 cursor-pointer">
            See All
          </Link> 
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="By Category" />

        {/* Category Card */}
        <div className="flex flex-wrap gap-10 md:mt-15 ">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local frams. Explore a  wide  range of seasonal fruits and crisp vegetable.",
    image: FruitsCat,
    path: '/fruits',
  },
  {
    id: 2,
    title: "Dairy & Egges",
    description:
      "Fresh dairy products and free-range eggs, responsibly sourced from healthy farms. Choose from milk, yogurt, butter, and cheeses.",
    image: DairyCat,
    path: '/dairy',
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeaFoodCat,
    path: '/seafood',
  },
];
