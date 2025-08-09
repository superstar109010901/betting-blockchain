'use client'

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faHeart, faClock, faBitcoinSign, faDice, faPlayCircle, faChartLine, faCoins, faFutbol, faTable, faHandshake, faCrown, faGamepad, faGift, faInfoCircle, faBookOpen, faMoneyBill, faHeadset, faChevronRight, faShield
} from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from './providers/SidebarProvider';
import Image from "next/image";

const Sidebar: React.FC = () => {
    const { isCollapsed } = useSidebar();

    return (
        <aside
            className={` bg-gray-800 transition-all duration-300 z-40 overflow-y-auto ${
                isCollapsed ? 'w-20' : 'w-74'
            }`}
            style={{
                background: "#1a2332",
                borderRight: "1px solid #2d3748",
            }}
        >
            <div className="flex flex-col h-full">
                {/* Top Section - Casino/Sport buttons */}
                <div className={`p-4 ${isCollapsed ? 'px-2' : ''}`}>
                    <div className={`flex gap-2 ${isCollapsed ? 'flex-col' : ''}`}>
                        <button 
                            className={`${isCollapsed ? 'w-full mb-2' : 'flex-1'} w-12 bg-gray-700 rounded-lg p-3 flex items-center gap-2 justify-center text-white font-medium transition-colors hover:bg-gray-500`}
                            style={{ background: "#374151" }}
                        >
                            <Image src={'/icons/spade.svg'} className="w-5 h-5" alt="spade" />
                            {!isCollapsed && <span className="text-sm">Casino</span>}
                        </button>
                        <button 
                            className={`${isCollapsed ? 'w-full' : 'flex-1'} w-12 bg-transparent rounded-lg p-3 flex items-center gap-2 justify-center text-gray-400 font-medium transition-colors hover:bg-gray-700`}
                        >
                            <Image src={'/icons/football.svg'} className="w-5 h-5" alt="football" />
                            {!isCollapsed && <span className="text-sm">Sport</span>}
                        </button>
                    </div>
                </div>

                {/* Navigation Section */}
                <div className={`p-4 ${isCollapsed ? 'px-2' : ''} space-y-1`}>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/search.svg'} className="w-5 h-5" alt="search" />
                        {!isCollapsed && <span className="text-sm">Search</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/heart.svg'} className="w-5 h-5" alt="heart" />
                        {!isCollapsed && <span className="text-sm">Favorites</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/history.svg'} className="w-5 h-5" alt="history" />
                        {!isCollapsed && <span className="text-sm">Recent</span>}
                    </div>
                </div>

               <hr className="border-gray-500 mx-4 my-4" />

                {/* Game Categories */}
                <div className={`p-4 ${isCollapsed ? 'px-2' : ''} space-y-1 flex-1`}>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center' : ''}`}>
                            <Image src={'/icons/bitcoin.svg'} className="w-5 h-5" alt="bitcoin" />
                            {!isCollapsed && <span className="text-sm">Hash Games</span>}
                        </div>
                        {!isCollapsed && <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-500" />}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/dice.svg'} className="w-5 h-5" alt="dice" />
                        {!isCollapsed && <span className="text-sm">Slots</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/casino.svg'} className="w-5 h-5" alt="casino" />
                        {!isCollapsed && <span className="text-sm">Live Casino</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/Futures.svg'} className="w-5 h-5" alt="Futures" />
                        {!isCollapsed && <span className="text-sm">Futures</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/Cryptogra.svg'} className="w-5 h-5" alt="Cryptogra" />
                        {!isCollapsed && <span className="text-sm">Crypto Games</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/football.svg'} className="w-5 h-5" alt="football" />
                        {!isCollapsed && <span className="text-sm">Sport</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/game.svg'} className="w-5 h-5" alt="game" />
                        {!isCollapsed && <span className="text-sm">Table Games</span>}
                    </div>

                    <hr className="border-gray-500 my-4" />

                    {/* Membership & Plan */}
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/thumbsup.svg'} className="w-5 h-5" alt="thumbsup" />
                        {!isCollapsed && <span className="text-sm">Alliance Plan</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/king1.svg'} className="w-5 h-5" alt="king1" />
                        {!isCollapsed && (
                            <div className="flex items-center gap-2">
                                <span className="text-sm">VIP Club</span>
                                <span className="text-xs text-yellow-400 font-medium">VIP</span>
                            </div>
                        )}
                    </div>

                    <hr className="border-gray-500 my-4" />

                    {/* Information & Support */}
                    <div className={`flex items-center gap-3 p-3 bg-gray-700 rounded-lg cursor-pointer text-white transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/game.svg'} className="w-5 h-5" alt="game" />
                        {!isCollapsed && <span className="text-sm">Game Providers</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/gift.svg'} className="w-5 h-5" alt="gift" />
                        {!isCollapsed && <span className="text-sm">Promotions</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/info-circle.svg'} className="w-5 h-5" alt="info-circle" />
                        {!isCollapsed && <span className="text-sm">Help center</span>}
                    </div>

                    {!isCollapsed && <hr className="border-gray-500 my-4" />}

                    {/* Tutorials */}
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/tutorial.svg'} className="w-5 h-5" alt="tutorial" />
                        {!isCollapsed && <span className="text-sm">Beginner&apos;s Tutorial</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/cart.svg'} className="w-5 h-5" alt="cart" />
                        {!isCollapsed && <span className="text-sm">Currency Purchase Tutorial</span>}
                    </div>
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/vpn.svg'} className="w-5 h-5" alt="vpn" />
                        {!isCollapsed && <span className="text-sm">VPN recommendation</span>}
                    </div>

                    <hr className="border-gray-500 my-4" />

                    {/* Service */}
                    <div className={`flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300 transition-colors ${isCollapsed ? 'justify-center' : ''}`}>
                        <Image src={'/icons/headset.svg'} className="w-5 h-5" alt="headset" />
                        {!isCollapsed && <span className="text-sm">Online service</span>}
                    </div>
                </div>

                {/* Bottom Section - Payment Methods */}
                {!isCollapsed && (
                    <div className="p-4 mt-auto">
                        <hr className="border-gray-500 mb-4" />
                        
                        {/* Payment Methods */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/gpay.svg'} className="h-5" alt="gpay" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/apay.svg'} className="h-5" alt="apay" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/pay.svg'} className="h-5" alt="pay" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/visa.svg'} className="h-5" alt="visa" />
                                </div>
                            </div>
                            <button className="w-full bg-gray-700 text-white text-sm py-2 px-3 rounded hover:bg-gray-500 transition-colors">
                                By Crypto
                            </button>
                        </div>

                        <hr className="border-gray-500 my-4" />

                        {/* App Download */}
                        <div className="flex items-center justify-between">
                            <span className="text-white text-sm">Ok777 App</span>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/apple.svg'} className="w-4 h-4" alt="apple" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/windows.svg'} className="w-4 h-4" alt="windows" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <Image src={'/icons/android.svg'} className="w-4 h-4" alt="android" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default Sidebar;