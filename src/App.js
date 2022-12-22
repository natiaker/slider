import React from 'react';
import Person from './Person';

function App() {
  return (
    <main className='bg-[#f1f5f8] flex flex-col items-center justify-center min-h-screen '>
      <h2 className='font-medium text-4xl mb-3 text-[#324d67]'><span className='font-bold text-[#ba5d2c]'>/ </span>Reviews</h2>
      <div className="people-container relative">
        <Person />
      </div>
    </main>
  );
}

export default App;
