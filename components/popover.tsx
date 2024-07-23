import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function PopOver({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <PopoverTrigger>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          {children}
        </PopoverContent>
      </Popover>
      <p className="text-small text-default-400">Open: {isOpen ? "true" : "false"}</p>
    </div>
  );
}