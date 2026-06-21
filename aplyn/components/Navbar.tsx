import LinksDropDown from "./LinksDropDown";
import { ThemeToggler } from "./ThemeToggler";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-muted sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropDown />
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggler />
        <Button size={"lg"}>User</Button>
      </div>
    </nav>
  );
};

export default Navbar;
