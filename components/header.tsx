'use client'

import React from "react";
import BlackButton from "./buttons/black";
import RedButton from "./buttons/red";
import { useSidebar } from './providers/SidebarProvider';
import Image from "next/image";

const Header: React.FC = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 w-[1920px] h-14 flex flex-col justify-center px-4 py-2.5 mx-auto">
                <div className="flex items-center justify-between gap-2">
                {/* Left side */}
                <div className="flex items-center gap-2">
                    {/* Menu button with notification */}
                    <div className="relative">
                        <BlackButton onClick={toggleSidebar}>
                            <Image src={'/icons/arrow-to-right-stroke.svg'}  className="px-2.5" alt="burger" />
                        </BlackButton>
                    </div>

                    {/* 777 Logo Image */}
                    <div className="flex items-center">
                        <Image
                            src="/images/logo.svg"
                            alt="777 Gaming Logo"
                        />
                    </div>

                    {/* Bonuses button */}
                    <div className="relative">
                    <button
                        className=" rounded-lg border border-gray-600 flex items-center gap-2 transition-colors"
                        style={{
                        background:
                            "linear-gradient(90deg, #0546A7 0%, #0C9898 100%)",
                        paddingLeft: "10px",
                        paddingRight: "16px",
                        }}
                    >
                        <Image src={'/images/awards/Chest-box.svg'}  className="h-8" alt="burger" />
                        <span className="text-white font-medium text-xs">Bonuses</span>
                    </button>
                    {/* Notification badge overlapping the button */}
                    <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded w-5 px-2.5 flex items-center justify-center">
                        4
                    </div>
                    </div>

                    {/* Search button */}
                    <BlackButton>
                        <Image src={'/icons/search.svg'}  className="px-2.5" alt="burger" />
                    </BlackButton>
                    
                </div>

                {/* Center - empty space */}
                <div className="flex-1"></div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    {/* Login button with notification */}
                    <div className="relative">
                    <BlackButton>
                        <span className="text-white px-4 font-medium text-xs">Log in</span>
                    </BlackButton>
                    </div>

                    {/* Register button */}
                    <RedButton className="w-[85px]">Register</RedButton>

                    {/* Language/Flag button */}
                    <BlackButton>
                        <Image src={'/icons/flag-icon/cn.svg'}  className="px-2.5 h-4" alt="burger" />
                    </BlackButton>

                    {/* Chat/Support button */}
                    <BlackButton>
                        <Image src={'/icons/chat.svg'} className="px-2.5" alt="burger" />
                    </BlackButton>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;