import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CardInformation = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [promise, checkPromise] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        checkPromise(false);
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const countryData = response.data[0];

        setCountry({
          name: countryData.name.common,
          capital: countryData.capital,
          population: countryData.population,
          region: countryData.region,
          subregion: countryData.subregion,
          area: countryData.area,
          tld: countryData.tld,
          currencies: countryData.currencies,
          languages: countryData.languages,
          flag: countryData.flags.png,
          borders: countryData.borders,
        });
      } catch (error) {
        console.error(error);
      } finally {
        checkPromise(true);
      }
    })();
  }, []);

  if (!promise) {
    return <div>Please Wait</div>;
  }
  return (
    <div className="px-8 mt-[20vh] flex flex-col gap-y-14 md:px-20">
      <div className="flex items-start">
        <button
          onClick={() => navigate(-1)}
          className="w-20 p-2 flex justify-between items-center text-lg bg-[var(--secondary-color)] 2xl:w-32 2xl:p-6"
        >
          <ion-icon name="arrow-back"></ion-icon>Back
        </button>
      </div>
      <div className="flex flex-col gap-y-16 xl:flex-row xl:justify-between 2xl:justify-start">
        <div className="xl:basis-[45%] 2xl:basis-[50%]">
          <img
            src={country.flag}
            alt=""
            className="w-[100%] h-52 xl:h-[65%] xl:w-[80%] 2xl:h-[75%]"
          />
        </div>
        <div className="flex flex-col gap-y-10 xl:basis-[50%] 2xl:basis-[40%]">
          <div>
            <p className="text-2xl w-auto font-bold md:text-3xl 2xl:text-5xl">
              {country.name}
            </p>
          </div>
          <div className="flex flex-col gap-y-16 text-xl md:w-4/5 md:flex-row md:flex-wrap md:gap-x-40 md:gap-y-20 xl:w-full 2xl:text-2xl">
            <div className="flex flex-col gap-y-4 ">
              <p>
                <span>Area: {country.area}</span>
              </p>
              <p>
                <span>Population: {country.population}</span>
              </p>
              <p>
                <span>Region: {country.region}</span>
              </p>
              <p>
                <span>Sub Region: {country.subregion}</span>
              </p>
              <p>
                <span>Capital: {country.capital}</span>
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <p>
                <span>Top Level Domain: {country.tld}</span>
              </p>
              <p>
                <span>
                  Currencies:{" "}
                  {Object.entries(country.currencies).map(
                    ([code, currency]) => (
                      <span key={code}>
                        {currency.name} {currency.symbol}{" "}
                      </span>
                    )
                  )}
                </span>
              </p>
              <p>
                <span>
                  Language:{" "}
                  {Object.entries(country.languages).map(
                    ([code, language], index, element) => (
                      <span key={code}>
                        {language}
                        {element.length - 1 === index ? "" : ","}{" "}
                      </span>
                    )
                  )}
                </span>
              </p>
            </div>
            <div>
              <p>
                <span className="flex items-center flex-wrap gap-x-6 gap-y-6">
                  Border Countries:{" "}
                  {country.borders
                    ? country.borders.map((x, index) => (
                        <a
                          key={index}
                          href={`${x}`}
                          className="p-3 bg-[var(--secondary-color)]"
                        >
                          {x}{" "}
                        </a>
                      ))
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
