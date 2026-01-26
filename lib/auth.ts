// Set login cookie
export function setLoginCookie(data : any) {
    localStorage.setItem('user', JSON.stringify(data));
}

// Get login cookie
export function getLoginCookie() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Remove login cookie
export function removeLoginCookie() {
    localStorage.removeItem('user');
}

// Check if user is logged in
export function isLoggedIn() {
    return !!getLoginCookie();
}

// Add wishlist count
export function addWishlistCount(action: string = 'add') {
    let current_count: any = localStorage.getItem('wishlist_count') || 0;
    current_count = Number(current_count);
    let new_count = action === 'add' ? (current_count + 1) : (current_count - 1);
    new_count = new_count > 0 ? new_count : 0;
    localStorage.setItem('wishlist_count', new_count.toString());

    // Update count for div class
    const wishlist_count_div = document.getElementById('wishlist_count');
    if (wishlist_count_div) {
        wishlist_count_div.textContent = new_count.toString();
    }
}

// Get wishlist count
export function getWishlistCount() {
    return localStorage.getItem('wishlist_count') || 0;
}

// Add cart data
export function addCartData(cart_id: string) {
    localStorage.setItem('cart_id', cart_id);
}

// Get cart data
export function getCartData() {
    return localStorage.getItem('cart_id');
}