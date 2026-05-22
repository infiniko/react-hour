import { redirect } from "next/navigation";

import { stripe } from "@/utils/stripe";
import db from "@/utils/db";

export default async function Return({
  searchParams,
}: {
  searchParams: Promise<any>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) throw new Error("Please provide a valid session_id");

  const session = await stripe.checkout.sessions.retrieve(session_id);

  const orderId = session.metadata?.orderId;
  const cartId = session.metadata?.cartId;
  if (session.status === "complete") {
    await db.order.update({
      where: {
        id: orderId,
      },
      data: {
        isPaid: true,
      },
    });
    await db.cart.delete({
      where: {
        id: cartId,
      },
    });
  }
  redirect("/orders");
}
