import { Button } from "@/components/ui/button";
import { FaHeart } from "react-icons/fa6";
function FavoriteToggleButton({
  productId,
  layout = "grid",
}: {
  productId: string;
  layout?: string;
}) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart
        className={`opacity-85 ${layout === "grid" ? "text-white" : ""}`}
      />
    </Button>
  );
}

export default FavoriteToggleButton;
