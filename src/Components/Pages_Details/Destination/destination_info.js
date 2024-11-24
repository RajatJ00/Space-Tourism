import React, { useState } from 'react';
import DestinationData from "../Data/destination_data.json";

function DestinationInfo() {
    const [Data, setData] = useState([1]);
    let currentData = (id) => {
        setData((prev) =>
            prev.includes(id)
                ? prev.filter((info) => info !== id)
                : [prev, id] //...prev overwrites the data
        );
    };
    return (
        <>
            <div className="absolute w-fit top-44 left-52 flex gap-4 text-heading font-barlow text-white uppercase">
                <p className="opacity-[0.25] font-bold">01</p>
                <h1 className="font-extralight">Pick your destination</h1>
            </div>

            <div className="absolute flex text-white top-60 right-72 ">
                {
                    DestinationData.map((info) => (
                        <div key={info.id}>
                            {
                                Data.includes(info.id) && (
                                    <div className="absolute h-fit w-blur_shadow overflow-hidden right-72 pb-5">
                                        <img src={info.img} alt={info.name} />
                                        <div className="absolute w-blur_shadow h-blur_shadow bg-[#0B0D17] rounded-full top-40 left-16 blur-[67.95px]"></div>
                                    </div>
                                )
                            }
                            <div className="w-fit hover:border-b-2 pb-4 cursor-pointer" onClick={() => currentData(info.id)}>
                                <h1 className="m-2 text-main_heading font-barlow text-[#D0D6F9] uppercase">{info.name}</h1>
                            </div>

                            <div className="absolute top-10 left-0">
                                {
                                    Data.includes(info.id) && (
                                        <h1 className="text-main font-bellefair">{info.name}</h1>)
                                }

                                {
                                    Data.includes(info.id) && (
                                        <p className="text-para font-barlow w-para text-[#D0D6F9] pr-6">{info.para}</p>)
                                }

                                <div className="flex gap-20 mt-5 uppercase ">
                                    {Data.includes(info.id) && (
                                        <div>
                                            <h1 className="text-subheading text-[#D0D6F9] text-barlow">Avg. distance</h1>
                                            <p className="text-numbers text-bellefair">{info.avg_distance}</p>
                                        </div>
                                    )}
                                    {Data.includes(info.id) && (
                                        <div>
                                            <h1 className="text-subheading text-[#D0D6F9] text-barlow">Est. travel time</h1>
                                            <p className="text-numbers text-bellefair">{info.est_timetravel}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div >
                    ))
                }
            </div>
        </>
    );
}
export default DestinationInfo;