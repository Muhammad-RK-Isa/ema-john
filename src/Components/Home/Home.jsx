import React from 'react';

import person from '../../assets/images/person.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='w-full md:min-h-[calc(100vh-75px)] grid place-content-center '>
            <div className='flex flex-col gap-16 lg:gap-24 md:flex-row justify-center items-center w-[90%] md:w-full mx-auto py-10 md:p-0'>

                <div className='grid gap-8'>
                    <p className='text-[#FF9900]'>On Sale! Up to 70% off!</p>

                    <div className='grid gap-1'>
                        <h1 className='text-6xl text-accent font-bold'>New Collection For All</h1>
                        <h3 className='text-2xl text-[#2A414F]'>Discover all the new arrivals of ready-to-wear collection.</h3>
                    </div>

                    <Link to='/shop'><button className='w-max uppercase bg-btn-primary md:text-2xl text-[#0E161A] py-3 px-8 rounded'>shop now</button></Link>
                </div>

                <div className='bg-[#FFE0B3] h-[30rem] w-max rounded -translate-x-2'>
                    <img className='h-[30rem] translate-x-4 -translate-y-4' src={ person } alt="person" />
                </div>

            </div>
        </section>
    );
};

export default Home;