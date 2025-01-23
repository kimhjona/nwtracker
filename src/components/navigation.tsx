"use client";

import { Navbar, NavbarItem, NavbarSection } from "./tw-components/navbar";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <Navbar className="justify-between">
        <NavbarSection>
          <NavbarItem current={pathname == Routes.Home} href={Routes.Home}>
            Home
          </NavbarItem>
        </NavbarSection>
        <NavbarSection>
          <NavbarItem current={pathname == Routes.SignUp} href={Routes.SignUp}>
            Sign Up
          </NavbarItem>
          <NavbarItem current={pathname == Routes.SignIn} href={Routes.SignIn}>
            Sign In
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    </>
  );
}

enum Routes {
  Home = "/",
  SignUp = "/signup",
  SignIn = "/signin",
}
