import { Tv, Globe, Zap, Menu, X, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import iptv from "../assets/iptv1.jpg"

const HeroSection = () => (
  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Experience TV Like Never Before
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Unlimited channels, crystal-clear HD quality, and on-demand content at your fingertips. Welcome to the future of television.
          </p>
          <div className="mt-10 flex items-center space-x-6">
            <NavLink
              to={"/packages/IPTV/"}
              className="bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Packages
            </NavLink>
            <a
              href="#demo"
              className="flex items-center text-white hover:text-blue-100 transition duration-300 ease-in-out"
            >
              <Play className="mr-2" /> Watch Demo
            </a>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <img
            src={iptv}
            alt="IPTV Experience"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100"></div>
  </div>
);



export default HeroSection