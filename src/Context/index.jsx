import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    
    //Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0)

    //Shopping Cart - Add products to cart
    const[cartProducts, setCartProducts] = useState([])

    //Product Detail - Open / Close
    const [isProductDetailOpen, SetIsProductDetailOpen] = useState(false)
    const openProductDetail = () => SetIsProductDetailOpen(true)
    const closeProductDetail = () => SetIsProductDetailOpen(false)

    //Checkout Side Menu
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false)

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart - Order
    const [order, setOrder] = useState([])

    //Get Products
    const [items, setItems] = useState(null)

    //Get Products by Title
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('Search by title: ', searchByTitle)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}