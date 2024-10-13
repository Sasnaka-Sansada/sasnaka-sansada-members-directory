import '../index.css';
import MemberFilter from '../MemberFilter';
import SearchBar from '../SearchBar';
import DiscoverMembers from '../DiscoverMembers';
import Navbar from '../navbar';



function Home() {
  return (
    <div>
      < Navbar />
      <div className='flex flex-row justify-around mt-10'>
        <div className='w-1/3 flex flex-col flex-end items-end pr-20'>
          < MemberFilter />
        </div>
        <div className='flex flex-col justify-end items-start w-2/3 pr-20'>
          <div className='max-w-2xl'>
            < SearchBar />
          </div>
          <div>
            < DiscoverMembers />
          </div>
        </div>
      </div>
    </div>
  );
}





export default Home;

