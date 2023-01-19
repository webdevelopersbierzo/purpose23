import React from "react";
import PropTypes from "prop-types";

function Purpose({ data }) {
  {
    console.log(data);
  }
  return (
    <div className="flex flex-col max-w-xs  mt-6 text-white">
      <div className="flex-none h-20 w-20 bg-gray-500 rounded-full absolute "></div>

      <header className="flex flex-row justify-start items-center pl-20">
        <h3 className="text-xl p-4">{data.category}</h3>
      </header>

      <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-r from-pink-500  to-purple-500 h-40 ">
        <div className="flex flex-row justify-between pt-5 pl-2 pr-2">
          <p className="text-2xl">{data.dateStar}</p>
          <button className=" rounded-lg border-solid border-2 border-white p-1">
            Complete
          </button>
        </div>

        <div>
          <p className="text-lg">{data.purposeWhat}</p>
        </div>

        <footer className="flex flex-row justify-between">
          <p>{data.dateEnd}</p>
          <button className="bg-violet-600 rounded-tl-2xl rounded-br-2xl pl-2 pr-2 pt-1 pb-1">
            View more
          </button>
        </footer>
      </div>
    </div>
  );
}

Purpose.propTypes = {
  data: PropTypes.object,
};

export default Purpose;
