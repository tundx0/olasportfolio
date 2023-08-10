/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Lottie from 'lottie-react';
import { FaReact, FaNode, FaPython } from 'react-icons/fa6';
import { TbBrandTypescript, TbBrandTailwind } from 'react-icons/tb';
import { SiSolidity, SiJavascript, SiJest } from 'react-icons/si';
import devAnimation from '../../assets/animation_ll3h5n00.json';

const IconsList = () => {
  const icons = [FaReact, FaNode, TbBrandTypescript, TbBrandTailwind, SiSolidity, FaPython, SiJavascript, SiJest];

  return (
    <div className="grid md:grid-cols-1 grid-cols-4 text-center">
      {icons.map((Icon, index) => (
        <div className="flex items-center justify-center" key={index}>
          <Icon size={150} />
        </div>
      ))}
    </div>
  );
};

const Home = () => (
  <article>
    <section>
      <div className="h-full bg-bgColor">
        <div className="grid md:grid-cols-1 grid-cols-2 items-center h-screen">
          <div className="">
            <Lottie animationData={JSON.parse(JSON.stringify(devAnimation))} />
          </div>
          <div className="text-white font-mont md:px-5">
            <h1 className="text-7xl md:text-5xl">
              Hi I am <b className="text-cyan-300">Ola</b>
            </h1>
            <h1 className="text-4xl md:text-2xl">A Fullstack Developer</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="mt-10">
      <h1 className="font-mont text-4xl font-bold my-5 text-center">Technologies I Use</h1>
      <IconsList />
    </section>
  </article>

);

export default Home;
