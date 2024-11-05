import { toast } from "react-toastify";

const getStoredToCART = () => {
    // read-list
    const storedListStr = localStorage.getItem('read-list');
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
        // already exists. do not add it
        toast('already exists in the read list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        toast('Succesfully added in the cart')
 
        
    }
}

// const getStoredWishList = () => {
//     // read-list
//     const storedWishListStr = localStorage.getItem('wish-list');
//     if (storedWishListStr) {
//         const storedWishList = JSON.parse(storedWishListStr);
//         return storedWishList;
//     }
//     else {
//         return [];
//     }
// }

// const addToStoredWishList = (id) => {
//     const storedWishList = getStoredWishList();
//     if (storedWishList.includes(id)) {
//         // already exists. do not add it
//         console.log(id, 'already exists in the read list')
//     }
//     else {
//         storedWishList.push(id);
//         const storedWishListStr = JSON.stringify(storedWishList);
//         localStorage.setItem('wish-list', storedWishListStr);
//     }
// }

export { addToStoredCart , getStoredToCART}