import { useState, computed } from "#imports";
export const useCart = () => {
    const cartItems = useState('cartItems', () => [])
    const addToCart = (item) => {
        const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity = (existingItem.quantity || 1) + 1;
        } else {
          cartItems.value.push({...item, quantity: 1});
        }
    };

     const removeFromCart = (itemId) => {
        cartItems.value = cartItems.value.filter(item => item.id !== itemId)
    }
    const clearCart = () => {
        cartItems.value = []
    }

    const total = computed(() => {
        return cartItems.value.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    })

    return {
        cartItems,
        addToCart,
        removeFromCart,
         clearCart,
        total
    }
}

