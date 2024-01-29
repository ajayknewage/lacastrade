"use client";
import "./globals.scss";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-toastify/dist/ReactToastify.css"; //react toastify
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
      <ToastContainer />
    </html>
  );
}
