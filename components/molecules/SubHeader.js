import React from 'react';
import router from 'next/router';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function SubHeader({ title }) {
  return (
    <>
      <div className="top-0 bg-black text-white text-center grid grid-cols-7  gap-2 p-3 items-center ">
        <div
          onClick={() => {
            router.push('/');
          }}
          className="col-start-1 col-span-2 flex justify-center"
        >
          <FaArrowAltCircleLeft size="20px" />
          <p className="ml-1">back</p>
        </div>
        <p className="col-start-3 col-span-3 text-xl ">{title}</p>
      </div>
    </>
  );
}
