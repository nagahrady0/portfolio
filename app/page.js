"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Headroom from 'react-headroom';

import CustomCursor from "@/components/ui/cursor/CustomCursor";

import Navbar from "@/components/layouts/navbar/navbar";
import SettingsPanel from "@/components/layouts/SettingsPanel/SettingsPanel";
import Footer from "@/components/layouts/footer/footer";


import Hero from "@/components/sections/hero/hero";
import About from "@/components/sections/about/about";
import Skills from "@/components/sections/skills/skills";
import Portfolio from "@/components/sections/portfolio/portfolio";
import Contact from "@/components/sections/contact/contact";

import Loader from "@/components/sections/loader/loader";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);



return loading ? (
  <Loader />
) : (
  <div>
	<CustomCursor />
    <Headroom>
      <Navbar/>
    </Headroom>
    <Hero/>
    <About />
    <Skills />
    <Portfolio />
    <Contact />.
    <SettingsPanel />
    <Footer />
  </div>
);
}