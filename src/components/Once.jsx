import React,{useState} from 'react'
import visa from '../assets/visa.png'
import mc from '../assets/mc.png'
import pp from '../assets/pp.png'
import fr from '../assets/fr.png'
import {FaLock, FaCheckCircle} from 'react-icons/fa'

const Once = () => {

  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
  };

  const renderAmountButton = (amount, isSpecial) => (
    <button
      key={amount}
      onClick={() => handleAmountClick(amount)}
      className={`mr-1 px-8 py-1 border-solid border border-black rounded-sm relative ${
        selectedAmount === amount ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'
      } font-bold ${isSpecial ? 'md:flex col-span-2' : 'flex items-center justify-center'}`}
    >
      {isSpecial ? (
        <>
          Donate {amount} monthly
          <FaLock className='h-[15px] w-[15px] md:mt-[5px] ml-2 absolute top-1/2 transform -translate-y-1/2' />
        </>
      ) : (
        <>
          {amount}
          {selectedAmount === amount && (
            <FaCheckCircle className='h-[15px] w-[15px] absolute top-1/2 transform -translate-y-1/2 right-2' />
          )}
        </>
      )}
    </button>
  );
  const renderOrangeButton = () => (
    <button
      className={`mr-1 md:flex col-span-2 px-8 py-1 border-solid border border-orange-500 rounded-sm bg-orange-400 text-black font-bold relative flex items-center justify-center`}
    >
      {selectedAmount ? `Donate ${selectedAmount} monthly` : 'Donate monthly'}
      {selectedAmount && (
        <FaLock className='h-[15px] w-[15px] absolute top-1/2 transform -translate-y-1/2 right-2 text-black' />
      )}
    </button>
  );


  return (
      <div>
       <div className='max-w-[900px] mx-auto '>
       <div className='border-solid border-b border-l border-r border-t border-gray-300 '>
      <div className='pl-5'>
        <div className='py-3 font-semibold'>
        <p>I would like to make an one-off donation of</p>
        </div>
        <ul className='md:flex grid grid-cols-2 gap-2 justify-start mb-6 mr-3 items-center'>
          {renderAmountButton('£10')}
          {renderAmountButton('£40')}
          {renderAmountButton('£75')}
          {renderAmountButton('£100')}
          <button className='mr-1 md:flex col-span-2 px-8 py-1 border-solid border border-black rounded-sm font-semibold'>£ Other Amount</button>
          {renderOrangeButton()}
        </ul>
        <h3 className='px-2 py-4 mr-4 bg-orange-200 font-semibold mb-6'>£40 Could help an Animal Rescue Team take on an urgent animal rescue</h3>
      </div>
      <div className='pl-5 md:flex py-6 justify-between bg-gray-200'>
      <p className='mr-5 ml-12 text-sm pb-3'><u>I would like to give monthly</u></p>
      <div className='flex ml-12 h-5 '>
      <img className='mr-2' src={visa} alt='/'/>
      <img className='mr-2' src={mc} alt='/'/>
      <img className='mr-2' src={pp} alt='/'/>
      <img className='mr-3' src={fr} alt='/'/>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Once
