import Account from './Card';


function DiscoverMembers() {
  const members = [
      "A Perera", "B Perera", "C Perera", "D Perera", "E Perera", "F Perera", "G Perera", "H Perera", "I Perera", "G Perera", "H Perera", "I Perera"
  ];

  return (
      <div>
        <div className='flex flex-row justify-around flex-wrap w-100'>
          {members.map((member, index) => (
            <div key={index}>
              <Account label1={member} />
            </div>
          ))}
        </div>
      </div>
  );
}
    

export default DiscoverMembers;

        
        
        