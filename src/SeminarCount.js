import React from "react";

function SeminarCount() {
    return (
        <div className=" w-96 bg-white border border-gray-300 rounded-lg overflow-hidden p-2 ">
            <div className="flex flex-row m-2 justify-around">
                <div>
                    <div className="font-sans text-5xl font-semibold flex items-center justify-center ml-8">
                        10
                    </div>
                    <div className="font-sans text-md text-center text-darkGray font-semibold flex justify-center ">
                        Contributed GS Seminars
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <span className='border h-24 w-1 bg-gray border-gray' />
                </div>
                <div>
                    <div className="font-sans text-5xl font-semibold flex items-center justify-center mr-8">
                        35
                    </div>
                    <div className="font-sans text-md text-center text-darkGray font-semibold flex justify-center">
                        Contributed Events
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SeminarCount;