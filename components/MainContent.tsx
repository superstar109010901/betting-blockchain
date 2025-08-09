'use client'

import React from "react";
import TypeOne, { TypeOneCarousel } from "./cards/type.one";
import TypeTwo from "./cards/type.two";
import TypeThree from "./cards/type.three";

const bannerCards = [
  {
    title: (
      <>
        <span className="block">REFER &</span>
        <span className="block">REWARDS</span>
      </>
    ),
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">COMPLETE TASKS &</span>
        <span className="block">GET DAILY REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">CHECK-IN</span>
        <span className="block">REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.png',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">REFER &</span>
        <span className="block">REWARDS</span>
      </>
    ),
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">COMPLETE TASKS &</span>
        <span className="block">GET DAILY REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">CHECK-IN</span>
        <span className="block">REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.png',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">REFER &</span>
        <span className="block">REWARDS</span>
      </>
    ),
    button: 'CLAIM NOW',
    image: '/images/banner/Banner12.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">COMPLETE TASKS &</span>
        <span className="block">GET DAILY REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner10.jpg',
    link: '#',
  },
  {
    title: (
      <>
        <span className="block">CHECK-IN</span>
        <span className="block">REWARDS!</span>
      </>
    ),
    button: 'JOIN NOW',
    image: '/images/banner/Banner09.png',
    link: '#',
  },
] as const;

const card1 = [
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },
  {
    badge: "NEW",
    views: "62",
    user: "user",
    image: "/images/fox.png",
  },

] as const;

const card2 = [
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },
  {
    badge: "HOT",
    views: "62",
    user: "user-blue",
    image: "/images/d6c2ef9c2a0a079a96385e767460309709e400ff.png",
  },

] as const;

const card3 = [
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/2eba47e2f18740f3bad6eeaee2d6a6a41f5be8a9.png",
  },

] as const;

const card4 = [
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/plane.png",
  },

] as const;

const card5 = [
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/football.png",
  },

] as const;

const card6 = [
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },
  {
    badge: "HOT",
    views: "88",
    user: "user-blue",
    image: "/images/ox.png",
  },

] as const;

const brand = [
  'brand-gfg-1.5a3b145c.jpg','brand-gfg-2.f1a9fc1d.jpg','brand-gfg-3.4198aea1.jpg','brand-gfg-4.573a69f1.jpg','brand-gfg-5.e01d75e0.jpg','brand-gfg-6.ef4dafb8.jpg'

] as const;

const MainContent: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-[calc(100vw-296px)] overflow-x-hidden">
      {/* Promotional Banners */}
      <div className="mb-12">
        <TypeOneCarousel 
          cards={bannerCards} 
          autoPlay={true} 
          autoPlayInterval={5000} 
          showDots={true} 
        />
      </div>

     

      {/* New Launches Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Home.svg" alt="home" />
          New Launches
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card1.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
        
      </div>

      {/* Live Casino Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Casino1.svg" alt="home" />
          Live Casino
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card2.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {card2.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
      </div>

      {/* Hash Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Hash.svg" alt="hash" />
          Hash</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <TypeTwo
              key={item}
              title="Big/Small"
              chances={1.95}
              bettingAddress="TXS3PfAU9hemKkoBWRUfsUkGBSrZGagh6X"
              leftButtonText="Junior field"
              rightButtonText="Put"
              onLeftButtonClick={() => console.log('Left button clicked')}
              onRightButtonClick={() => console.log('Right button clicked')}
              onCopyAddress={() => console.log('Address copied')}
          />
          ))}
        </div>
      </div>

      {/* Slots Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Slots.svg" alt="slots" />
          Slots
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card3.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {card3.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
      </div>

      {/* P/F Futures Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Futures1.svg" alt="future" />
          P/F Futures
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {[
            { name: "BTC", price: "$43,250", change: "+2.5%" },
            { name: "BNB", price: "$320", change: "-1.2%" },
            { name: "ETC", price: "$25.40", change: "+0.8%" },
            { name: "SOL", price: "$98.50", change: "+5.2%" },
            { name: "LTC", price: "$68.30", change: "-0.5%" },
            { name: "TON", price: "$2.15", change: "+1.8%" },
            { name: "TRX", price: "$0.085", change: "+3.1%" },
          ].map((crypto) => (
            <div key={crypto.name} className="bg-gray-800 rounded-lg p-4">
              <div>
                <div className="flex items-center mb-2">
                  <img src={"/icons/coin-icon/"+crypto.name+".svg"} alt={`${crypto.name} coin`} className="w-8 h-8 mr-2" />
                  <h3 className="text-white font-semibold">{crypto.name}</h3>
                </div>
                <p className="text-[#A7B5CA] text-[14px]">Price</p>
                <p className="text-gray-300 text-sm mb-1">{crypto.price}</p>
                <p className={`text-sm ${crypto.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                  {crypto.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cryptogra Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Cryptogra1.svg" alt="cryptogra" />
          Cryptogra</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card4.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
      </div>

      {/* Sport Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/Sport.svg" alt="Sport" />
          Sport
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card5.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
      </div>

      {/* Chess and cards Section */}
      <div className="mb-8">
        <h2 className="text-4.5 font-bold text-white mb-4 flex gap-2">
          <img src="/icons/tablegame.svg" alt="tablegame" />
          Chess and cards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {card6.map((item) => (
            <TypeThree user={item.user} badge={item.badge} image={item.image} views={item.views} />
          ))}
        </div>
      </div>

      {/* Latest Bets Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Latest Bets</h2>
        <div className=" rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-transparent">
              <tr>
                <th className="text-left p-4 text-white">Game</th>
                <th className="text-left p-4 text-white">Player</th>
                <th className="text-left p-4 text-white">Time</th>
                <th className="text-left p-4 text-white">Bet Amount</th>
                <th className="text-left p-4 text-white">Multiplier</th>
                <th className="text-left p-4 text-white">Payout</th>
              </tr>
            </thead>
            <tbody className="bg-transparent">
              {[
                {
                  game: "Cavesone",
                  player: "User***123",
                  time: "2 min ago",
                  bet: "0.001 BTC",
                  multiplier: "2.5x",
                  payout: "0.0025 BTC",
                },
                {
                  game: "Cavesone",
                  player: "User***456",
                  time: "5 min ago",
                  bet: "0.002 BTC",
                  multiplier: "1.8x",
                  payout: "0.0036 BTC",
                },
                {
                  game: "Cavesone",
                  player: "User***789",
                  time: "8 min ago",
                  bet: "0.0005 BTC",
                  multiplier: "3.2x",
                  payout: "0.0016 BTC",
                },
              ].map((bet, index) => (
                <tr key={index} className="bg-transparent border-b-[6px] border-[#111827] p-8 rounded-4 overflow-hidden mb-[6px]">
                  <td className="p-4 bg-[#1C2532] text-white rounded-l-[16px]">{bet.game}</td>
                  <td className="p-4 bg-[#1C2532] text-gray-300">{bet.player}</td>
                  <td className="p-4 bg-[#1C2532] text-gray-300">{bet.time}</td>
                  <td className="p-4 bg-[#1C2532] text-gray-300">{bet.bet}</td>
                  <td className="p-4 bg-[#1C2532] text-green-400">{bet.multiplier}</td>
                  <td className="p-4 bg-[#1C2532] text-green-400 rounded-r-[16px] ">{bet.payout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Game manufacturers Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Game manufacturers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg p-[8px_10px_12px_10px]">
              <div className="flex items-center pb-4">
                <img src="/images/brand/manufacturer.svg" alt="Manufacturer" className="h-6 W-9" />
                <div>
                  <h3 className="text-[10px] font-[700] text-white">PG Games</h3>
                  <p className="text-[10px] font-[700] text-[#A7B5CA]">111 games</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {brand.map((game) => (
                  <img key={game} src={"/images/brand/"+game} alt="Game" className="w-full h-12 object-cover rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest earnings Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Latest earnings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative">
                <img src="/images/queen.png" alt="QUEEN OF BOUNTY" className="w-full object-cover" />
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">HOT</div>
              </div>
              <div className="p-3">
                <h3 className="text-white text-sm font-semibold">QUEEN OF BOUNTY</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-transparent rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Best crypto casino - Welcome to MAGICBB</h3>
        <p className="text-gray-300 mb-4">
          Experience the ultimate online gaming platform with the best crypto
          casino games, secure transactions, and exciting rewards. Join
          thousands of players worldwide and discover a new level of
          entertainment.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">Show More</button>
      </div>
    </div>
  );
};

export default MainContent;
