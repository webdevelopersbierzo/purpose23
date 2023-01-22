import React from "react";
import Menu from "../components/menu";
import PurposeList from "../components/PurposeList";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const ProfilePage = () => {
    const imgBg = "../assets/img/img-profile-data.jpg";
  return (
    <div className="w-full bg-slate-900  h-full text-white items-center">
      <Menu></Menu>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <div className="w-11/12 p-2 flex flex-row  justify-between">
            <h2 className="text-3xl">Hello User</h2>
            <Link
              to={"/profile/purpose/add"}
              className="flex flex-row  w-10 h-10 hover:bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg border-solid border-2 border-white"
            >
              <PlusIcon className="" />
            </Link>
          </div>
          {/*  TODO -> <div className="w-full" style={{bacgroundImage: `url(${imgBg})`}}> </div> */}
        </div>
        <PurposeList />
      </div>
    </div>
  );
};

export default ProfilePage;
