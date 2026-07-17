import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = Value.slice(0, 2).map((item) => {
    return (
      <div key={item.id} className="flex md:flex-row-reverse items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-xl text-white bg-linear-to-b from-rose-400 to-rose-600 w-12 h-12 rounded-full shadow-md">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2 max-w-xs">{item.para}</p>
        </div>
      </div>
    );
  });

  const rightValues = Value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7">
        <div>
          <span className="flex justify-center items-center text-xl text-white bg-linear-to-b from-rose-400 to-rose-600 w-12 h-12 rounded-full shadow-md">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
          <p className="text-zinc-600 mt-2 max-w-xs">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Value" />

        <div className="flex md:flex-row flex-col gap-10 md:gap-0  mt-15 ">
          {/* Left Values */}

          <div className="md:min-h-100 gap-15 flex flex-col justify-between ">
            {leftValues}
          </div>
          <div className="md:flex w-1/2 hidden justify-center items-center">
            <img src={Basket} className="w-96 object-contain" />
          </div>

          {/* Right Value */}

          <div className="md:min-h-100 gap-15 flex flex-col justify-between ">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const Value = [
  {
    id: 1,
    title: "Trust",
    para: "We build strong customer relationships by delivering quality food and reliable service. Your satisfaction and trust are our top priorities.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Our products are sourced daily to ensure maximum freshness and taste. We deliver farm-fresh ingredients straight to your doorstep.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We follow strict hygiene and safety standards at every step. From preparation to delivery, your food is handled with utmost care.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "We provide natural and chemical-free food products for a healthier lifestyle. Our organic selection ensures purity and better nutrition.",
    icon: <FaSeedling />,
  },
  {
    id: 5,
    title: "Sustainability",
    para: "We are committed to sustainable practices, from sourcing to packaging. Our eco-friendly approach helps protect the environment for future generations.",
    icon: <FaLeaf />,
  },
  
];
