import React from "react";
import { useEffect, useState } from "react";

function RightSide() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const api = await fetch("/data.json");
    const data = await api.json();
    setData(data);
  }

  return (
    <div className="flex h-full w-full flex-col justify-between space-y-6 p-8 sm:w-fit">
      <p>Summery</p>
      {data.length > 0 && (
        <div className="space-y-3">
          {/*  */}
          <div className="flex flex-row items-center justify-between rounded bg-bgLightRed p-2 text-LightRed sm:w-48  ">
            <div className="flex space-x-2">
              <img src={data[0].icon} alt="" />
              <p>{data[0].category}</p>
            </div>
            <p className="font-bold text-DarkGrayBlue">
              {data[0].score}
              <span className="font-normal text-LightLavender"> / 100</span>
            </p>
          </div>
          {/*  */}
          <div className="flex flex-row items-center justify-between rounded bg-bgOrangeyYellow p-2 text-OrangeyYellow  ">
            <div className="flex space-x-2">
              <img src={data[1].icon} alt="" />
              <p>{data[1].category}</p>
            </div>
            <p className="font-bold text-DarkGrayBlue">
              {data[1].score}
              <span className="font-normal text-LightLavender"> / 100</span>
            </p>
          </div>
          {/*  */}
          <div className="flex  flex-row items-center justify-between rounded bg-bgGreenTeal p-2 text-GreenTeal  ">
            <div className="flex space-x-2">
              <img src={data[2].icon} alt="" />
              <p>{data[2].category}</p>
            </div>
            <p className="font-bold text-DarkGrayBlue">
              {data[2].score}
              <span className="font-normal text-LightLavender"> / 100</span>
            </p>
          </div>
          {/*  */}
          <div className="flex  flex-row items-center justify-between rounded bg-bgCobaltBlue p-2 text-CobaltBlue  ">
            <div className="flex space-x-2">
              <img src={data[3].icon} alt="" />
              <p>{data[3].category}</p>
            </div>
            <p className="font-bold text-DarkGrayBlue">
              {data[3].score}
              <span className="font-normal text-LightLavender"> / 100</span>
            </p>
          </div>
          {/*  */}
        </div>
      )}
      <button className="rounded-full bg-DarkGrayBlue p-2 font-bold text-white hover:bg-gradient-to-b hover:from-VioletBlue hover:to-LightRoyalBlue">
        Continue
      </button>
    </div>
  );
}

export default RightSide;
