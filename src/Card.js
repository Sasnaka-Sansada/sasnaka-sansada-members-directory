import arrow from './assests/arrow.png';
import user from './assests/user.png';


function Test() {
    return (
      <div className="flex flex-col justify-center items-center mb-2">
        <div className="max-w-sm w-3/4 appearance-none border rounded bg-black p-2 text-white">
          <div className="flex flex-col md:flex-row">
            <div className="h-full w-full md:w-3/4 flex items-center justify-center text-xs">
              View Profile
            </div>
            <div className="w-full h-auto md:w-1/4 flex items-center justify-center">
              <img src={arrow} alt="Arrow" className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    );
}
  
function ProfilePic() {
    return (<div className="flex flex-col justify-center items-center pt-4 w-full h-auto mt-2">
        <img src={user} className="h-20 w-20 rounded-full object-contain" alt="user"></img>
    </div>
    )
}

function Contents({label1}) {
    return (<div className="flex flex-col justify-center items-center pt-4 pb-2 mb-2">
        <p className='text-gray-700 text-lg font-bold'>{label1}</p>
        <p className='text-blue-500 text-sm'>Volunteer Level II</p>
        <p className='text-sm text-gray-400'>Undergraduate</p>
    </div>
    )
}

function Account({label1}) {
    return (
        <div className="max-w-sm bg-white border border-gray-300 rounded-lg overflow-hidden my-4 mx-1" style={{ width: '14rem' }}>
        <ProfilePic />
        <div className="px-4">
            <div>
            <Contents label1={label1} />
            </div>
        </div>
        <div className="px-4 pb-4">
            <Test />
        </div>
        </div>
    );
}

export default Account;