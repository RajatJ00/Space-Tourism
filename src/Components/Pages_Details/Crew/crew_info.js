import React, { useState } from 'react';
import CrewData from "../Data/crew_data.json"

function CrewInfo() {
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
            <div className="absolute w-fit h-fit top-44 left-48 flex gap-4 text-heading font-barlow text-white uppercase"><p className="opacity-[0.25] font-bold">02</p><h1 className="font-extralight">Meet your crew</h1></div>

            <div className="absolute w-fit top-44 left-44 mx-4 text-white">
                {
                    CrewData.map((info) => (
                        <>
                            {
                                Data.includes(info.id) && (
                                    <div className=" w-96 mt-3 ml-[600px]">
                                        <img src={info.img} alt={info.name} />
                                    </div>
                                )}
                            <div key={info.id} className="absolute top-24">

                                {
                                    Data.includes(info.id) && (
                                        <div className="w-fit">
                                            <span className=" text-title text-white/[0.5] font-bellefair uppercase">{info.title}</span>
                                        </div>
                                    )}
                                {
                                    Data.includes(info.id) && (
                                        <h1 className="w-[614px] text-name uppercase font-bellefair">{info.name}</h1>
                                    )}
                                {
                                    Data.includes(info.id) && (
                                        <p className="w-para text-para font-barlow">{info.para}</p>
                                    )}
                            </div>
                        </>
                    ))}
            </div>
            <div className="absolute flex top-[620px] left-44 mx-4">
                {
                    CrewData.map((info) => (
                        <div className="w-4 h-4 mr-7 rounded-full hover:bg-white bg-white/[.10] " onClick={() => currentData(info.id)}></div>))}
            </div>
        </>
    );

}
export default CrewInfo;