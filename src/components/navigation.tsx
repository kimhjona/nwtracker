"use client";

import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from "./tw-components/navbar";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <Navbar className="justify-between px-4">
        <NavbarSection>
          <NavbarLabel>NW Tracker</NavbarLabel>
          <NavbarDivider />
          <NavbarItem current={pathname == Routes.Home} href={Routes.Home}>
            Home
          </NavbarItem>
        </NavbarSection>
        <NavbarSection>
          <NavbarItem current={pathname == Routes.SignUp} href={Routes.SignUp}>
            Sign Up
          </NavbarItem>
          <NavbarItem current={pathname == Routes.Login} href={Routes.Login}>
            Log In
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    </>
  );
}

enum Routes {
  Home = "/",
  SignUp = "/signup",
  Login = "/login",
}
