import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div className='bg-black p-4 h-full w-full text-white sm:flex sm:justify-around about' id='about'>
      <div className='flex flex-col justify-around'>
        <div className='sm:px-16 px-2'>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Bhargav Chitteti, a Backend Developer with a passion for building scalable web applications and robust backend systems. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/bhargav-chitteti-257577251/' target='_blank'>Backend Developer</a>, I specialize in Python and Django stacks🚀.
              <br />
              ✍️ In my free time, I explore new technical stacks, creating <a className='text-blue-300 hover:text-blue-500 duration-300' href='https://github.com/bhargavvc' target='_blank'>GitHub projects</a> and sharing resources for other tech enthusiasts, making learning easier.
              <br />
              🌍 When I’m not coding, I enjoy traveling, cooking, and watching cricket, which help me balance work with personal passions.
            </p>

          <ButtonLink
            url='https://drive.google.com/file/d/1di6vlLySoRdgTxT7PjHF-fSfI6_xfENL/view?usp=sharing'
            text='View Resume→'
            padding={`p-3`}
          />
        </div>
      </div>
      <img src="" alt="Bhargav chitteti" className='sm:w-1/3 mt-4 sm:mt-0' />
    </div>
  )
}

export default About;