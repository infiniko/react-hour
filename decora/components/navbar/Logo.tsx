import Link from "next/link";
import { Button } from "../ui/button";
import { GiSofa } from "react-icons/gi";
import { FaChair } from "react-icons/fa6";

function Logo() {
  return (
    <Button size={"icon-lg"} asChild>
      <Link href="/">
        <FaChair className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
