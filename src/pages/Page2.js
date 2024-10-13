import '../index.css';
import Navbar from '../navbar';
import Achievements from '../Achievement';
import SeminarCount from '../SeminarCount';
import PrvtAcc from '../PrvtAcc';

function Page2() {
    return (
        <div>
            < Navbar />
            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='pr-20'>
                        < PrvtAcc />
                    </div>
                    <div className=''>
                        < SeminarCount />
                    </div>
                </div>
                <div>
                    <Achievements />
                </div>


            </div>
        </div>
    );
}





export default Page2;

