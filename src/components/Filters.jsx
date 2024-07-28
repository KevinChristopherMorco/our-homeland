import React from "react";
import { useState, useEffect } from "react";

const Filters = ({ countries, checkFilter, setFilteredCountries }) => {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleRegion = (event) => {
    const { region } = event.target.dataset;
    setFilter(false);
    setRegion(region);
  };

  const handleClearFilter = () => {
    setFilter(false);
    setRegion("");
  };

  const handleSearch = async (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    setFilteredCountries(() => {
      const filter = countries.filter(
        ({ name: { common: name }, region: countryRegion }) =>
          (region === "" || countryRegion === region) &&
          (search === "" || name.toLowerCase().includes(search.toLowerCase()))
      );
      filter ? checkFilter(true) : checkFilter(false);
      return filter;
    });
  }, [search, region]);

  return (
    <>
      <div className="px-6 flex items-center relative md:w-4/5 xl:w-1/2">
        <div className="flex items-center absolute left-10 top-[50%] -translate-y-[50%] text-lg text-[var(--text-color)] cursor-pointer">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <input
          type="search"
          placeholder="Search for a country..."
          className="w-full p-6 px-10 bg-[var(--secondary-color)] text-[var(--text-color)] cursor-pointer"
          onChange={handleSearch}
        />
      </div>
      <div className="w-2/3 px-6 cursor-pointer md:w-1/2 xl:w-1/3 ">
        <div className="flex">
          {region ? (
            <>
              <div
                type="search"
                className="basis-[80%] py-6 px-4 bg-[var(--secondary-color)]"
                onClick={() => (filter ? setFilter(false) : setFilter(true))}
              >
                {" "}
                {region ? region : "Filter by Region"}
              </div>
              <div
                className="flex justify-center items-center basis-[10%] bg-[var(--secondary-color)]"
                onClick={handleClearFilter}
              >
                <ion-icon name="close-circle-outline"></ion-icon>
              </div>
              <div
                className="flex justify-center items-center basis-[10%] bg-[var(--secondary-color)]"
                onClick={() => (filter ? setFilter(false) : setFilter(true))}
              >
                <ion-icon
                  name={filter ? "chevron-up-outline" : "chevron-down-outline"}
                ></ion-icon>
              </div>
            </>
          ) : (
            <>
              <div
                className="w-full py-6 px-4 bg-[var(--secondary-color)]"
                onClick={() => (filter ? setFilter(false) : setFilter(true))}
              >
                Filter by Region
              </div>

              <div
                className="flex justify-center items-center basis-[10%] bg-[var(--secondary-color)]"
                onClick={() => (filter ? setFilter(false) : setFilter(true))}
              >
                <ion-icon
                  name={filter ? "chevron-up-outline" : "chevron-down-outline"}
                ></ion-icon>
              </div>
            </>
          )}
        </div>
        <div
          className={`w-full bg-[var(--secondary-color)] ${
            filter ? "block" : "hidden"
          }`}
        >
          <ul className="p-4 flex flex-col gap-y-4">
            <li onClick={handleRegion} data-region="Africa">
              Africa
            </li>
            <li onClick={handleRegion} data-region="Americas">
              Americas
            </li>
            <li onClick={handleRegion} data-region="Antarctica">
              Antarctica
            </li>
            <li onClick={handleRegion} data-region="Asia">
              Asia
            </li>
            <li onClick={handleRegion} data-region="Europe">
              Europe
            </li>
            <li onClick={handleRegion} data-region="Oceania">
              Oceania
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filters;
