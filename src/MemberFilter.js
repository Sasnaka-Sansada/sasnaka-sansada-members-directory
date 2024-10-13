import React from "react";
import Tune from "../assests/Tune.png";

function MemberFilter() {
    return(
        <div className="w-72 bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-lg font-semibold text-center">
                Filter Members By
            </h1>
            <div className="p-2">
                <h2 className="py-3">
                    District:
                </h2>
                <select className="w-60 h-10 border-2 border-gray rounded-md flex justify-center items-center">
                    <option value='' disabled selected>Select District</option>
                    <option>Ampara</option>
                    <option>Anuradhapura</option>
                    <option>Badulla</option>
                    <option>Batticaloa</option>
                    <option>Colombo</option>
                    <option>Galle</option>
                    <option>Gampaha</option>
                    <option>Hambanthota</option>
                    <option>Jaffna</option>
                    <option>Kalutara</option>
                    <option>Kandy</option>
                    <option>Kegalle</option>
                    <option>Kilinochchi</option>
                    <option>Kurunegala</option>
                    <option>Mannar</option>
                    <option>Matale</option>
                    <option>Matara</option>
                    <option>Monaragala</option>
                    <option>Mullativu</option>
                    <option>Nuwara Eliya</option>
                    <option>Polonnaruwa</option>
                    <option>Puttalam</option>
                    <option>Ratnapura</option>
                    <option>Trincomalee</option>
                    <option>Vavuniya</option>
                </select>
                
                <h2 className="py-3">
                    Volunteer Type:
                </h2>
                <select className="w-60 h-10 border-2 border-gray rounded-md flex justify-center items-center">
                    <option value='' disabled selected>Select Type</option>
                    <option>School Student</option>
                    <option>University Student</option>
                    <option>After A/L</option>
                    <option>Teacher</option>
                    <option>Doctor</option>
                    <option>Engineer</option>
                    <option>Government Employee</option>
                    <option>Private sector Employee</option>
                </select>

                <h2 className="py-3">
                    Volunteer Level:
                </h2>
                <select className="w-60 h-10 border-2 border-gray rounded-md flex justify-center items-center">
                    <option value='' disabled selected>Select Level</option>
                    <option>Volunteer Level I</option>
                    <option>Volunteer Level II</option>
                    <option>Volunteer Level III</option>
                </select>
            </div>
            <div className="flex items-center justify-center py-3">
                <button className='bg-black w-40 h-10 rounded-md text-white flex items-center justify-around px-4'>
                    Filter Result
                    <img src={Tune} alt=""/>
                </button>
            </div>
        </div>
    )
}

export default MemberFilter;