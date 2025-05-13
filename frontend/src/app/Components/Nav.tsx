import React from "react";

type NavProps = {
  sideopen: boolean;
  setsideopen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: React.FC<NavProps> = ({ sideopen, setsideopen }) => {
  return (
    <div className=" h-[8vh] flex items-center justify-start">
      <div className=" ml-3  w-[50%]  h-full flex gap-5 b-black g  items-centers p-1">
        {!sideopen && (
          <img
            src="./sidebar.svg"
            alt=""
            onClick={() => {
              setsideopen(!sideopen);
            }}
            className=" cursor-pointer  lg:w-[50px]   md:w-[80px] w-[40px] flex justify-center items-center       "
          />
        )}
        {!sideopen && (
          <img
            src="./newchat.svg"
            alt=""
            className=" p-0.5 lg:w-[50px]  md:w-[80px] w-[40px]  hidden   lg:block md:visible    "
          />
        )}{" "}
        <img
          src="./next.svg"
          alt=""
          className="       lg:w-[80px]      md:w-[80px] w-[80px] hidden lg:block md:visible   "
        />
      </div>
    </div>
  );
};
export default Nav;
