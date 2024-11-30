"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import "../globals.css";

export default function AuthLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="layout-wrapper">
      <section className="">
        <div className="container flex items-center justify-center min-h-[80vh] px-6 mx-auto">
          <div className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
              <Image
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <Link
                href="/auth/login"
                className={`w-1/3 pb-4 font-medium text-center capitalize border-b ${
                  pathname === "/auth/login"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                sign in
              </Link>

              <Link
                href="/auth/register"
                className={`w-1/3 pb-4 font-medium text-center capitalize border-b ${
                  pathname === "/auth/register"
                    ? "text-gray-800 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                sign up
              </Link>
            </div>
            <div className="my-4">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
