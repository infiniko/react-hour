"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FaAlignLeft } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import UserIcon from "./UserIcon";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

function LinksDropdown() {
  const { isSignedIn, userId } = useAuth();
  const isAdmin = userId === process.env.NEXT_PUBLIC_ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="flex gap-4 max-w-25" size="lg">
          <FaAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" sideOffset={10}>
        {!isSignedIn ? (
          <>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            {links.map((link) => {
              if (link.label === "dashboard" && !isAdmin) return null;
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="w-full capitalize">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
