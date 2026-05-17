"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Share08Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  XShareButton,
  EmailShareButton,
  LinkedinShareButton,
  EmailIcon,
  LinkedinIcon,
  XIcon,
} from "react-share";

function ShareButton({ productId, name }: { productId: string; name: string }) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <HugeiconsIcon icon={Share08Icon} strokeWidth={2} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex flex-row items-center gap-x-2 justify-center w-full"
      >
        <XShareButton url={shareLink} title={name}>
          <XIcon size={32} round />
        </XShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} title={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
