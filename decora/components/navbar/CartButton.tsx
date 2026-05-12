import Link from "next/link";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";

function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant={"outline"}
      size="icon-lg"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <FaCartShopping />
        <span className="absolute -top-2.5 -right-2.5 bg-primary text-white  rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
