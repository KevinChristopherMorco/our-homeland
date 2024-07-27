import React from "react";
import Card from "../Card";
import Filters from "../Filters";
import Loader from "../Loader";
import NotFound from "../NotFound";

import { useEffect, useState } from "react";
import axios from "axios";

const CardContainer = () => {
  const [countries, setCountry] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [promise, checkPromise] = useState(false);
  const [filter, checkFilter] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        checkPromise(false);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const sort = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountry(() => sort);
      } catch (error) {
        console.error(error);
      } finally {
        checkPromise(true);
      }
    })();
  }, []);

  if (!promise) {
    return <Loader />;
  }

  if (filteredCountries.length === 0 && filter) {
    return (
      <div className="mt-[20vh] flex flex-col gap-y-20 xl:mt-[30vh]">
        <Filters
          countries={countries}
          checkFilter={checkFilter}
          setFilteredCountries={setFilteredCountries}
        />
        <NotFound />
      </div>
    );
  }

  return (
    <div className="mt-[20vh] flex flex-col gap-y-20 xl:mt-[30vh] 2xl:mt-[20vh]">
      <Filters
        countries={countries}
        checkFilter={checkFilter}
        setFilteredCountries={setFilteredCountries}
      />
      <div className="px-6 flex flex-col items-center gap-y-20 md:flex-row md:flex-wrap md:justify-between xl:gap-x-4">
        {(filteredCountries.length !== 0 ? filteredCountries : countries).map(
          (country, index) => {
            if (!Boolean(country.capital)) country.capital = "N/A";
            return (
              <Card
                key={index}
                name={country.name.common}
                capital={country.capital}
                population={country.population}
                region={country.region}
                flag={country.flags.png}
                code={country.cca2}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CardContainer;
