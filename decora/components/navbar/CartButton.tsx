import Link from "next/link";
import { Button } from "../ui/button";
import { FaCartShopping } from "react-icons/fa6";
import { fetchCartItems } from "@/utils/actions";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();
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
