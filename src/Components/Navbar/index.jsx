import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4';

    // Estado para controlar la visibilidad del menú en dispositivos móviles
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCategoryClick = (category) => {
        if (category === 'all') {
            context.setSearchByCategory(null);
        } else {
            context.setSearchByCategory(category);
        }

        // Cerrar el menú en dispositivos móviles después de hacer clic en una categoría
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        // Alternar la visibilidad del menú en dispositivos móviles
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 top-0 text-sm font-light">
            
            {/* Botón Hamburguesa para dispositivos móviles */}
            <button className="lg:hidden text-black" onClick={toggleMenu}>
                {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>

            {/* Contenedor para "Shopi" y Carrito */}
            <div className="lg:hidden flex items-center gap-3 ">
                <div className="font-semibold text-lg pl-4 lg:items-center lg:align-middle">
                    <NavLink to='/' onClick={() => handleCategoryClick('all')}>
                        Shopi
                    </NavLink>
                </div>
                <ul className="flex items-center gap-3">
                    <li className='flex items-center'>
                        <ShoppingBagIcon className='h-6 w-6 text-black' />
                        <div>{context.cartProducts.length}</div>
                    </li>
                </ul>
            </div>

            {/* Menú Colapsado para dispositivos móviles */}
            <ul className={`lg:flex ${isMenuOpen ? 'flex flex-col absolute left-0 top-16 bg-white pl-4' : 'hidden'} lg:flex-row items-start gap-3`}>
            <li className="font-semibold text-lg">
                    <NavLink
                        to='/'
                        onClick={() => handleCategoryClick('all')} >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        onClick={() => handleCategoryClick('all')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/mens-clothing'
                        onClick={() => handleCategoryClick("men's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Men's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/womens-clothing'
                        onClick={() => handleCategoryClick("women's clothing")}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Women's Clothing
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/jewelery'
                        onClick={() => handleCategoryClick('jewelery')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Jewelery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        onClick={() => handleCategoryClick('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
            </ul>

            {/* Menú para escritorio */}
            <ul className="lg:flex hidden items-center gap-3">
                <li>
                    <NavLink
                        to='my-orders'
                        className= {({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black' />
                    <div>{context.cartProducts.length}</div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
