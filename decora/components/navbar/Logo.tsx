import Link from "next/link";
import { Button } from "../ui/button";
import { FaChair } from "react-icons/fa6";

function Logo() {
  return (
    <Button size="icon-lg" className="p-6">
      <Link href="/">
        <FaChair />
      </Link>
    </Button>
  );
}

export default Logo;
