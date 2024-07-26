import React from "react";

const CardInformation = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-y-10">
        <button className="w-16 flex justify-between items-center text-lg bg-[var(--secondary-color)]">
          <ion-icon name="arrow-back"></ion-icon>Back
        </button>
      </div>
      <div className="px-8 mt-[20vh] flex flex-col gap-y-14 md:px-20 xl:flex-row">
        <div className="flex flex-col gap-y-16 xl:flex-row xl:justify-between">
          <div className="xl:basis-[50%]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg"
              alt=""
              className="h-52 xl:h-auto"
            />
          </div>
          <div className="flex flex-col gap-y-10 xl:basis-[45%] 2xl:basis-[40%]">
            <div>
              <p className="text-2xl w-auto font-bold md:text-3xl 2xl:text-5xl">
                Philippines
              </p>
            </div>
            <div className="flex flex-col gap-y-16 text-xl md:w-4/5 md:flex-row md:flex-wrap md:gap-x-40 md:gap-y-20 xl:w-full 2xl:text-2xl">
              <div className="flex flex-col gap-y-4 ">
                <p>
                  <span>Area:</span>
                </p>
                <p>
                  <span>Population:</span>
                </p>
                <p>
                  <span>Region:</span>
                </p>
                <p>
                  <span>Sub Region:</span>
                </p>
                <p>
                  <span>Capital:</span>
                </p>
              </div>
              <div className="flex flex-col gap-y-4">
                <p>
                  <span>Top Level Domain:</span>
                </p>
                <p>
                  <span>Currencies:</span>
                </p>
                <p>
                  <span>Language:</span>
                </p>
              </div>
              <div>
                <p>Border Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardInformation;
