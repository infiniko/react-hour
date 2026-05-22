"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { fetchClientSecret } from "@/utils/actions";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export default function Checkout() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") as string;
  const cartId = searchParams.get("cartId") as string;

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: () => fetchClientSecret(orderId, cartId),
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
