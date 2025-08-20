import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Shared footer */}
      <Footer />
    </div>
  );
}
