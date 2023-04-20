import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavHome from '../components/NavHome';
import AboutUs from '@/components/AboutUs';
import Products from '@/components/Products';
import Carousel from '@/components/carousel';
import Whatsapp from '@/components/whatsapp';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavHome />
      <Hero />
      <Whatsapp />
      <AboutUs />
      <Carousel />
      <Products />
      <Footer />
    </>
  )
}
