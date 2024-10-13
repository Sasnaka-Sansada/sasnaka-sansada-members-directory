import '../index.css';
import Navbar from '../navbar';
import Achievements from '../Achievement';
import SeminarCount from '../SeminarCount';

function Page2() {
    return (
        <div>
            < Navbar />
            <div className='flex flex-col justify-center items-center mt-10'>
                <div>
                    < SeminarCount />
                </div>
                <div>
                    <Achievements />
                </div>


            </div>
        </div>
    );
}





export default Page2;

