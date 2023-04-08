import React from 'react';
import { BiCart } from 'react-icons/bi';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData();

    return (
        <div className='grid md:grid-cols-4 lg:grid-cols-5'>
            <div className='col-span-4 p-6 md:p-16 lg:p-20 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                { products.map( product => {
                    const { id, name, price, img, seller, ratings } = product;
            
                    return (
                        <div key={ id } className='flex flex-col h-[35rem] text-[#0E161A] rounded-lg border border-[#95A0A7] overflow-hidden'>
                            <div className='p-4 h-full'>
                                
                                <img src={ img  } alt="product-image" className='rounded-lg min-h-[50%]' />

                                <div className='flex flex-col pt-4 h-[9.5rem]'>
                                    <h2 className='text-xl'>{ name }</h2>
                                    <p className=''>Price: ${ price }</p>
                                    <p className='text-xs text-[#2A414F] mt-auto'>Manufacturer: { seller }</p>
                                    <p className='text-xs text-[#2A414F]'>Ratings: { ratings }</p>
                                </div>
                            </div>
                            
                            <button className='bg-[#FFE0B3] flex items-center justify-center w-full p-4 border-t border-[#95A0A7]'>Add to Cart <BiCart size={ 26 } /> </button>
                        </div>
                    );
                } ) }
            </div>
        </div>
    );
};

export default Shop; 