import search from './components/search.png';
import dropdown from './components/dropdown.png';

function SearchBar() {
    return (
    <div className='w-100'>
      <form class="flex flex-row justify-between ml-3 mr-4 mt-4 mb-4">
        <div className='h-14 bg-white border border-gray-300 rounded-lg w-3/4 mr-2 flex flex-row justify-between items-center'>
          <div className='ml-5'>
          <input class="w-full py-2 px-2 text-gray-700 focus:outline-none" id="Search" type="text" placeholder="Search" />
          </div>
          <div className='mr-4'>
            <img src={search} className='h-10 w-13 rounded-lg'></img>
          </div>
        </div>
        <div className='w-1/4 flex flex-row justify-center items-center ml-4 bg-white border border-gray-300 rounded-lg'>
          <div>
            <select className="font-medium pl-4 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-center " id="grid-state" style={{appearance: 'none'}}>
              <option value="" className='' disabled selected>Sort by</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
          <div className=''>
            <img src={dropdown} className='h-10 w-10 rounded-lg'></img>
          </div>
        </div>
      </form>
    </div>
    )
  }

export default SearchBar;