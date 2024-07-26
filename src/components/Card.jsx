import React from "react";

const Card = ({ name, capital, population, region, flag, handleCardRoute }) => {
  const handleCardRoutes = () => {
    console.log(name);
  };
  return (
    <div
      className="min-h-[20vh] w-full flex flex-col bg-[var(--secondary-color)] gap-y-10 rounded-lg cursor-pointer transition-transform ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 md:w-2/5 xl:w-[25%] md:min-h-[55vh]"
      onClick={handleCardRoutes}
    >
      <div>
        <img src={flag} alt="Country" className="h-52 w-full rounded-lg" />
      </div>
      <div className="p-6 flex flex-col gap-y-5 text-start">
        <div className="text-3xl font-bold">{name}</div>
        <div className="text-lg font-light">
          {" "}
          <span className="font-medium">Population</span>: {population}
        </div>
        <div className="text-lg font-light">
          {" "}
          <span className="font-medium">Region:</span> {region}
        </div>
        <div className="text-lg font-light">
          {" "}
          <span className="font-medium">Capital:</span> {capital}
        </div>
      </div>
    </div>
  );
};

export default Card;
