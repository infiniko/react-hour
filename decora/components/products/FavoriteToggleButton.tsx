import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { FaHeart } from "react-icons/fa6";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";
async function FavoriteToggleButton({
  productId,
  layout,
}: {
  productId: string;
  layout: string;
}) {
  const { userId } = await auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });
  return (
    <FavoriteToggleForm
      favoriteId={favoriteId}
      productId={productId}
      layout={layout}
    />
  );
}

export default FavoriteToggleButton;
