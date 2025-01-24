import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export default function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
    " Book a Demo",
    "Contact Us",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b border-teal-900">
      <NavbarContent>
        <NavbarBrand>
          <img src="NavLogo.png" alt="Logo" className="h-6 w-auto" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-2 text-white" justify="center">
        {menuItems.slice(0, 4).map((item, index) => (
          <NavbarItem key={index}>
            <Link href="#" className="text-white">{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex gap-1">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full bg-teal-400 font-semibold"
            href="#"
            variant="flat"
          >
            Book a Demo
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-white rounded-full border-2"
            color="white"
            href="#"
            variant="bordered"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} className="text-white">
            <Link className="w-full text-white" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        style={{ color: isMenuOpen ? "white" : "white" }}
      />
    </Navbar>
  );
}
