import React from "react";
import { motion } from "framer-motion"; // Importando Framer Motion
import Image from "../../assets/fotolinkedin.jpg";

const Home = () => {
  return (
    <section className="w-full pt-20 pb-[300px] bg-slate-300 dark:bg-gray-900 dark:text-white flex flex-col justify-center items-center py-12 md:pl-[200px]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-12">
        
      
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className="flex flex-col justify-center items-center sm:items-start space-y-4 text-center sm:text-left"
        >
          <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
            Anderson Gabriel
          </p>
          <p className="text-3xl text-gray-700 dark:text-white">
            Desenvolvedor Frontend <br />
          </p>
          <p className="text-black/75 dark:text-white/70">
            Desenvolvedor frontend focado em criar interfaces intuitivas e eficientes. Gosto de transformar ideias em experiências funcionais, sempre buscando melhorar e aprender com novos desafios.
          </p>
          <a
            href="curriculo.pdf"
            download
            className="inline-block bg-purple-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Baixar CV
          </a>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={Image}
            className="md:max-w-lg mx-auto backdrop-blur-sm rounded-3xl w-[400px]"
            alt="person"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
