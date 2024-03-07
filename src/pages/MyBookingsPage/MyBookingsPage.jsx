import React from "react";
import Navbar from "../../components/Navbar";
import MyBookingsCard from "./MyBookingsCard";
import Footer from '../../components/Footer'

const MyBookingsPage = () => {
  return (
    <div className="w-full h-screen bg-backGround">
      <Navbar booking="true" />
      <div className="w-full h-[8%]  items-center flex justify-center  ">
        <h1 className=" flex text-2xl font-semibold text-white">
          Your Bookings
        </h1>
      </div>

      <div className="w-full  h-full flex items-center justify-center bg-backGround">
        <div className="w-[85%] h-[85%] bg-white relative overflow-x-auto shadow-md ">
          <table className="w-full text-center  table-auto">
            <thead className="text-md text-gray-700 bg-gray-100 uppercase">
              <tr>
                <th scope="col" className="sm:px-12 px-20 py-5">
                  Workers
                </th>
                <th scope="col" className="px-8 py-5">
                  Work
                </th>
                <th scope="col" className="px-6 py-5">
                  Date
                </th>
                <th scope="col" className="px-8 py-5">
                  Status
                </th>
                <th scope="col" className="px-8 py-5">
                  Cancellation
                </th>
              </tr>
            </thead>
            <tbody className="">
              <MyBookingsCard/>
              <MyBookingsCard/>
              <MyBookingsCard/>
              <MyBookingsCard/>
              <MyBookingsCard/>
              <MyBookingsCard/>
              
             
              
             
              
              
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyBookingsPage;
