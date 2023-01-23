import React from "react";
import PropTypes from "prop-types";
import { EllipsisVerticalIcon, XMarkIcon} from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import {Link} from 'react-router-dom'
function Purpose({ data }) {

  const id = data.id;
  
  return (
    <div className="flex flex-col w-full mt-6 text-white md:max-w-xs m-2 " >
      <div className="flex-none h-20 w-20 bg-gray-500 rounded-full absolute"></div>
      <header className="flex flex-row justify-between items-center  pl-20">
        <h3 className="text-xl p-4">{data.category}</h3>
        <Popover className="relative">
        {({ open }) =>(
          <>
          <Popover.Button>
              { open ? (
                <XMarkIcon className="w-10 h-10 text-white"></XMarkIcon>
                ) : (
                  <EllipsisVerticalIcon className="w-10 h-10 "/>
                )
              }
              
            </Popover.Button>
            <Popover.Panel className="absolute z-10 right-2">
              <div className="flex flex-col bg-gradient-to-r from-pink-700  to-purple-500 h-40 p-6 rounded-lg">
                <Link to={`/profile/purpose/edit/${id}`}>Editar</Link>
                <Link to={"/profile/purpose/delete"}>Borrar</Link>
                      
              </div>
            </Popover.Panel>
          </>
        )}
        </Popover>
        
        
        
      </header>

      <div className="flex flex-col justify-between rounded-2xl bg-gradient-to-r from-pink-500  to-purple-500 h-40 ">
        <div className="flex flex-row justify-between pt-5 pl-2 pr-2">
          <p className="text-2xl">{data.dateStar}</p>
          <button className=" rounded-lg border-solid border-2 border-white p-1">
            Complete
          </button>
        </div>

        <div>
          <p className="text-lg p-2">{data.purposeWhat}</p>
        </div>

        <footer className="flex flex-row justify-between pl-2">
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
