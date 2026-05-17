import { auth } from "@clerk/nextjs/server";
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
  if (!userId) return <CardSignInButton layout="grid" />;
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
