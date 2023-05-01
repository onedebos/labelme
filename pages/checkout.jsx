import CheckoutPage from "../components/cart/Checkout";
import { useStore } from "../helpers/store";
import { getLocally, storeLocally } from "../helpers/helpers";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);

  const handleRemoveFromCartAtCheckout = (idToRemove) => {
    const newCart = cart.filter((c) => c.id != idToRemove);
    setCart(newCart);
    storeLocally("cart", newCart);
  };

  const getItemsInCart = () => {
    // if user isn't signedIn, load Cart from local
    const cart = getLocally("cart");
    setCart(cart);

    // if user is signedIn, load latest Cart from FB

    //
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getItemsInCart();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <CheckoutPage
        cart={cart}
        handleRemoveFromCartAtCheckout={handleRemoveFromCartAtCheckout}
      />
      {/* <pre>{JSON.stringify(cart)}</pre> */}
    </div>
  );
};

export default Checkout;
