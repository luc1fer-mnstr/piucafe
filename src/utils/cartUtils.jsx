const CART_KEY = "piu_cart";

// Get all items
export const getCart = () => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save items
export const saveCart = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

// Add item
export const addToCart = (item) => {
  const current = getCart();
  current.push(item);
  saveCart(current);
};

// Remove item by index
export const removeFromCart = (index) => {
  const current = getCart();
  current.splice(index, 1);
  saveCart(current);
};

// Update quantity
export const updateQuantity = (index, newQty) => {
  const current = getCart();
  if (current[index]) {
    current[index].quantity = newQty;
  }
  saveCart(current);
};

// Clear cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};
