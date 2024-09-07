"use client"

import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import Banner from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Testimonioals from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dustin Heaps | Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Portfolio, Developer, HTML, CSS, JavaScript, Web, Front-End, Frontend development, Software Engineer, User interface, User experience, Responsive design, Mobile-first design, Cross-browser compatibility, React, Website optimization, Performance optimization, Code quality, SEO'
        />
        <meta
          name='description'
          content="Welcome to Dustin Heaps' portfolio - a web developer specializing in creating stunning web experiences using Javascript. Explore Dustin's projects and achievements in HTML, CSS, JavaScript, and 3D design. Contact Dustin Okpukpan today to learn how they can bring your next web project to life!"
        />
        <meta name='author' content='Dustin Heaps' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-bodyColor/20 scrollbar-thumb-textDark font-bodyFont'>
        <Navbar />

        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'
          >
            <LeftSide />
          </motion.div>
          <div className='h-[88vh] w-full mx-auto py-4'>
            <Banner />
            <About />
            <Experience />

            <Projects />
            <Testimonioals />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
