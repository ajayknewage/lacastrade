"use client";
import "./globals.scss";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
