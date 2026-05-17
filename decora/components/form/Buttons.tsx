"use client";

import { ReloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <HugeiconsIcon
            icon={ReloadIcon}
            className="mr-2 h-4 w-4 animate-spin"
          />
          Please wait...
        </>
      ) : (
        <>{text}</>
      )}
    </Button>
  );
}

type actionType = "edit" | "delete";

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <FaRegEdit />;
      case "delete":
        return <FaTrashAlt />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size={"icon"}
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <HugeiconsIcon
          icon={ReloadIcon}
          className="mr-2 h-4 w-4 animate-spin"
        />
      ) : (
        <>{renderIcon()}</>
      )}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({
  isFavorite,
  layout,
}: {
  isFavorite: boolean;
  layout?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon-lg"
      variant="outline"
      className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
    >
      {pending ? (
        <HugeiconsIcon
          icon={ReloadIcon}
          className={`h-4 w-4 animate-spin ${layout === "grid" ? "text-white" : ""}`}
        />
      ) : isFavorite ? (
        <FaHeart
          className={`opacity-85 ${layout === "grid" ? "text-accent" : ""}`}
        />
      ) : (
        <FaRegHeart
          className={`opacity-85 ${layout === "grid" ? "text-white" : ""}`}
        />
      )}
    </Button>
  );
};
