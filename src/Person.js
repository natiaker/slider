import React, {useState, useEffect} from 'react';
import people from './data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


const Person = () => {
    const [index, setIndex] = useState(0);
    const { image, name, title, quote } = people[index];
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(() => {
                let newIndex = index + 1;
                return checkIndex(newIndex);
            });
        }, 5000)
        return () => {clearInterval(slider)};
    }, [index])

    const checkIndex = (i) => {
        if(i > people.length - 1) return 0;
        if(i < 0) return people.length - 1;
        return i;
    };
    const prevReview = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    }
    const nextReview = () => {
        setIndex(() => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    }
    return (
        <>
            <article className='flex flex-col justify-center items-center px-6 py-8 max-w-6xl'>
                <img src={image} alt={name} className='block relative w-40 h-40 rounded-full object-cover mb-4 border-4 borer-[#bcccdc]'/>
                <h4 className='mb-1 text-2xl tracking-wide font-bold uppercase text-[#ba5d2c]'>{name}</h4>
                <p className='mb-1 text-[#324d67] text-base capitalize'>{title}</p>
                <p className='mb-4 mt-8 text-[#617d98] text-center max-w-2xl'>{quote}</p>
                <FaQuoteRight className='text-[#ba5d2c] text-4xl'/>
            </article>
            <button onClick={prevReview} className="w-8	h-8 bg-[#617d98] hover:bg-[#ba5d2c] text-white rounded text-2xl flex justify-center items-center absolute top-48 left-0"><FiChevronLeft /></button>
            <button onClick={nextReview} className="w-8	h-8 bg-[#617d98] hover:bg-[#ba5d2c] text-white rounded text-2xl flex justify-center items-center absolute top-48 right-0"><FiChevronRight /></button>
        </>
    )
}

export default Person