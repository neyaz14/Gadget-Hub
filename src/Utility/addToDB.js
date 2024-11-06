import { toast } from "react-toastify";

const getStoredToCART = () => {
  
    const storedListStr = localStorage.getItem('gadget-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredCart = (id) => {
    const storedList = getStoredToCART();
    if (storedList.includes(id)) {
       
        toast('already exists in the cart')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('gadget-list', storedListStr);
        toast('Succesfully added in the cart')
        // const cartList = storedListStr.length;
 
        
    }
}

// ------------------------
const getStoredToWishlist = () => {
  
    const storedListStr = localStorage.getItem('gadget-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredWishlist = (id) => {
    const storedList = getStoredToCART();
    if (storedList.includes(id)) {
       
        toast('already exists in the wishlist')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('gadget-list', storedListStr);
        toast('Succesfully added in the wishlist')
        // const cartList = storedListStr.length;
 
        
    }
}



export { addToStoredCart , getStoredToCART , addToStoredWishlist }