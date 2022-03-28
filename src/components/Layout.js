import React from "react";
import Card from "./Card";
import NavigationBar from "./NavigationBar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-scren bg-gradient-to-tr 
    from-stone-400 to-stone-500 overflow-auto">
      <NavigationBar />

      {children}
    </div>
  );
}
