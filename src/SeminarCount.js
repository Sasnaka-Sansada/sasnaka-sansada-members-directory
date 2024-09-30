import React from "react";

function SeminarCount() {
    return(
        <div className=" w-80 h-auto bg-white rounded-lg p-2 ">
            <div className="grid grid-cols-3">
                <div className="font-sans text-7xl font-semibold flex items-center justify-center ml-8">
                    10
                </div>
                <div className="flex items-center justify-center">
                    <span className='border h-24 w-1 bg-gray border-gray'/>
                </div>
                <div className="font-sans text-7xl font-semibold flex items-center justify-center mr-8">
                    35
                </div>
            </div>
            <div className="grid grid-cols-2 py-2 gap-2 items-center">
                <div className="font-sans text-md text-center text-darkGray font-semibold flex justify-center ">
                    Contributed GS Seminars
                </div>
                <div className="font-sans text-md text-center text-darkGray font-semibold flex justify-center">
                    Contributed Events
                </div>
            </div>
        </div>
        
    )
}

export default SeminarCount;