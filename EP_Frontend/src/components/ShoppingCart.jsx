export function ShoppingCart({setChangePage, cart, setCart, products, setProducts, setCartItems, onHandleStock}){

    let totalPrice = 0;
    for (const cartProduct of cart){
        totalPrice = totalPrice + cartProduct.price;
    }
    console.log(cart);
    function handleBuy(paymentConfirmation){
        handleClearCart();
        setChangePage(paymentConfirmation)
    }

    function handleClearCart(){
        const updatedProducts = products.map(product => {

            const cartItem = cart.find(item => item.productname === product.productname);
            if (cartItem) {
                return { ...product, stock: product.stock}; 
            }
            return product;
        });

        setProducts(updatedProducts);
        setCart([]);
        setCartItems([]); 
    }

    return(
        <div className="cart">
            <h2> Kundvagn </h2>
            {cart.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        cart.map((product, index) => (
          <p key={index}>
            {product.productname}: {product.price} SEK
          </p>
        ))
      )}
      <p> Totalpris: {totalPrice} SEK</p>

            <button onClick={() => handleBuy("success")}> Genomför köp </button>
            <button onClick={handleClearCart}> Töm kundvagn </button>

        </div>
    )
}