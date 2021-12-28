import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Projects } from '../../components/data/projects';
import { container } from '../../components/presetAnimate/animate';

export default function DetailProjects({ data }) {
  const router = useRouter();
  return (
    <>
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        exit="exit"
        className="m-6 md:m-24"
      >
        <div className="flex flex-col h-auto">
          <button onClick={() => router.back()} className="flex  items-center animate-bounce">
            <FaArrowAltCircleLeft />
            <p className="ml-3">back</p>
          </button>
          <motion.div
            whileHover={{ scale: 1.1, transition: { duration: 0.8 } }}
            className="flex justify-center m-5"
          >
            <Image
              src={data.image}
              alt={data.title}
              width={600}
              height={300}
              quality={100}
              blurDataURL={data.image}
              placeholder="blur"
            />
          </motion.div>
          <h1 className="text-3xl">{data.title}</h1>
          <p className="text-lg">{data.desc}</p>
          <div className="flex items-center mt-4">
            <button className="bg-white text-black mr-3 p-1 rounded-lg">
              <Link href={data.demo}>Demo</Link>
            </button>
            <button className="bg-white text-black p-1 rounded-lg">
              <Link href={data.github}>Github</Link>
            </button>
          </div>
          <ul className="mt-4">
            <p>utilized :</p>
            {data.tech.map((data, index) => {
              return (
                <li key={index} className="text-sm  ">
                  {data.item}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const data = await new Promise((resolve, reject) => {
    return resolve(Projects);
  });

  const paths = data.map((item) => ({
    params: {
      id: `${item.id}`,
    },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await new Promise((resolve, reject) => {
    return resolve(Projects);
  });
  const existId = res.findIndex((item) => item.id === parseInt(id));
  const data = res[existId];
  return {
    props: { data },
  };
}
