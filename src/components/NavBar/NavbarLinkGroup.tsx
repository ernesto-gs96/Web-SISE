"use client";
import { ReactNode, useState } from "react";

interface NavbarLinkGroupProps {
  children: (handleClick: () => void, open: boolean) => ReactNode;
  activeCondition: boolean;
}

const NavbarLinkGroup = ({
  children,
  activeCondition,
}: NavbarLinkGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
};

export default NavbarLinkGroup;
