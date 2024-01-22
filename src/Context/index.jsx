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
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by Title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //Get Products by Category
    const [searchByCategory, setSearchByCategory] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if (!searchType) {
            return items
        }
    }

    useEffect(() => {
        let filteredItemsResult = items;
    
        if (searchByTitle) {
            filteredItemsResult = filteredItemsByTitle(filteredItemsResult, searchByTitle);
        }
    
        if (searchByCategory) {
            filteredItemsResult = filteredItemsByCategory(filteredItemsResult, searchByCategory);
        }
    
        setFilteredItems(filteredItemsResult);
    }, [items, searchByTitle, searchByCategory]);
    
    
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
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}