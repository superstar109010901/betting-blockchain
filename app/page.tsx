'use client'

import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/components/providers/SidebarProvider";

export default function HomePage() {
  return (
    <SidebarProvider>
    <main className="min-h-screen bg-gray-900 relative">
      {/* Sidebar */}
      <Header />
      <div className="flex items-start mt-14">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </main>
    </SidebarProvider>
  );
}