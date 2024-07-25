import React from "react";
import Card from "../Card";

import countries from "../../data/country-dummy.json";

import { useEffect, useState } from "react";
import axios from "axios";

const CardContainer = () => {
  //https://restcountries.com/v3.1/all
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sort = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountry(() => sort);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="mt-[20vh] flex flex-col gap-y-20 xl:mt-[30vh]">
      <div className="px-6 flex items-center relative md:w-4/5 xl:w-1/2">
        <div className="flex items-center absolute left-10 top-[50%] -translate-y-[50%] text-lg text-[var(--text-color)]">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          type="search"
          placeholder="Search for a country..."
          className="w-full p-6 px-10 bg-[var(--secondary-color)] text-[var(--text-color)]"
        />
      </div>
      <div className="w-2/3 px-6 cursor-pointer md:w-1/2 xl:w-1/3 ">
        <div
          className="flex items-center relative"
          onClick={() => (filter ? setFilter(false) : setFilter(true))}
        >
          <div className="w-full py-6 px-4 bg-[var(--secondary-color)]">
            Filter by Region
          </div>
          <div className="flex items-center absolute right-10 top-[50%] -translate-y-[50%]">
            <ion-icon
              name={filter ? "chevron-up-outline" : "chevron-down-outline"}
            ></ion-icon>
          </div>
        </div>
        <div
          className={`w-full bg-[var(--secondary-color)] ${
            filter ? "block" : "hidden"
          }`}
        >
          <ul className="p-4 flex flex-col gap-y-4">
            <li>Africa</li>
            <li>Americas</li>
            <li>Antarctica</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      <div className="px-6 flex flex-col items-center gap-y-20 md:flex-row md:flex-wrap md:justify-between xl:gap-x-4">
        {country.map((country, index) => {
          if (!Boolean(country.capital)) country.capital = "N/A";
          return (
            <Card
              key={index}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
              flag={country.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
