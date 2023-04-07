import React, { useEffect, useState } from 'react';

import { navLinks } from '../../Constants';

import { BiLogIn, BiMenu } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header = () => {
    const [ isToggled, setIsToggled ] = useState( false );
    const [ active, setActive ] = useState( "" );

    const location = useLocation();

    const path = location.pathname.split( '/' ).join( '' );

    useEffect( () => {
        const page = navLinks.find( link => link.id === path );
        if ( page ) {
            setActive( path );
        };
    }, [] )



    return (
        <header className='w-full bg-accent'>
            <nav className='flex justify-between items-center text-gray-200 w-[90%] lg:w-[85%] mx-auto py-2 sm:py-3 lg:py-4'>

                <Link to="/"><img src={ logo } alt="logo" onClick={ () => { setActive( "" ); setIsToggled( false ); } } /></Link>

                <div className='hidden lg:flex items-center gap-8'>
                    { navLinks.map( navLink =>
                        <Link
                            key={ navLink.id }
                            to={ `/${ navLink.id }` }
                            className={ `${ active === navLink.id ? "text-white" : "text-gray-400" } hover:text-white` }
                            onClick={ () => setActive( navLink.id ) }
                        >
                            { navLink.title }
                        </Link>
                    ) }
                </div>

                <div className='flex flex-col md:hidden'>
                    <button onClick={ () => setIsToggled( !isToggled ) }>{ isToggled ? <RxCross2 size={ 28 } /> : <BiMenu size={ 28 } /> }</button>
                </div>

                <div className={ `${ isToggled ? "flex" : "hidden" } flex-col gap-2 bg-gradient-to-r from-accent to-slate-500 rounded-lg p-4 text-lg fixed top-16 right-2` }>
                    { navLinks.map( navLink =>
                        <Link
                            key={ navLink.id }
                            to={ `/${ navLink.id }` }
                            className={ `${ active === navLink.id ? "text-white" : "text-gray-400" } flex items-center gap-1 hover:text-white` }
                            onClick={ () => { setActive( navLink.id ); setIsToggled( false ); } }
                        >
                            { navLink.title } { navLink.id === 'login' && <BiLogIn size={ 24 } /> }
                        </Link>
                    ) }
                </div>
            </nav>
        </header>
    );
};

export default Header;