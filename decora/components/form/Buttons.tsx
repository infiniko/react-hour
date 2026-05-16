"use client";

import { ReloadIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

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
