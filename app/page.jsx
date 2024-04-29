import React from 'react';
import About from '@components/About';
import Skills from '@components/Skills';
import Work from '@components/Work';
import Testimonials from '@components/Testimonials';
import Header from '@components/Header';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonials/>
    </section>
  )
}

export default Home