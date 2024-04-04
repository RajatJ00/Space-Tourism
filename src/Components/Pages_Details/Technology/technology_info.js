import React, { useState } from 'react';
import TechnologyData from "../Data/technology_data.json";

function TechnologyInfo() {

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
            <div className="absolute w-[590px] top-44 left-48 ">
                <div className="w-fit flex gap-4 text-heading font-barlow text-white uppercase mb-24">
                    <span className="opacity-[0.25] font-bold">03</span>
                    <h1 className="font-extralight">Space launch 101</h1>
                </div>
                {
                    TechnologyData.map((info) => (
                        <>
                            <div key={info.id} className="w-fit">
                                <div className="w-20 h-20 rounded-full hover:bg-white border-2 border-white/[.1] mb-10 hover:text-[#0B0D17] text-white text-center font-bellefair text-hover_text" onClick={() => currentData(info.id)}><h1 className="my-3">{info.id}</h1></div>

                                <div className="absolute text-white top-32 left-40">
                                    <div className="w-fit">
                                        <h1 className="text-main_heading text-[#D0D6F9] font-barlow uppercase">The Terminology...</h1>
                                    </div>
                                    {Data.includes(info.id) && (
                                        <div className="w-[490px] h-fit">
                                            <h1 className="mt-4 text-name font-bellefair uppercase">{info.technology}</h1>
                                        </div>
                                    )}
                                    {Data.includes(info.id) && (

                                        <div className="w-[460px]">
                                            <p className="text-para text-[#D0D6F9] font-barlow">{info.para}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </>

    );
}
export default TechnologyInfo;