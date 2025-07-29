import React, { useEffect } from "react";
import { Header } from "../../components";
import * as api from "../../apis"; // import alias


const Home = () => {
  // lam qua class component
  useEffect(() => {
    const fetchdata = async () => {
      const response = await api.getHome();
      console.log(response);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="overflow-y-auto">
        <div className="h-[70px] px-[59px] flex items-center">
          <Header />
        </div>
      </div>
    </>
  );
};

export default Home;
