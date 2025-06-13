import React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/img2.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-300 pb-[500px] pt-[500px] text-gray-800 dark:bg-slate-800 dark:text-white h-screen flex justify-center items-center py-12 md:pl-[200px]"
    >
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-12 px-4 sm:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} 
          className="max-w-4xl text-center sm:text-left pl-4 sm:pl-26"
        >
          <h1 className="text-[40px] md:text-[50px] font-bold mb-6">Sobre mim</h1>
          <p className="mb-6">
            Sou um desenvolvedor de software, movido pela resolução de problemas e pela busca constante por evolução. Atualmente estou atuando tanto na área de engenharia de dados quanto na área de desenvolvimento front-end — experiências que fortaleceram minha capacidade analítica, adaptabilidade e visão sistêmica.
          </p>
          <p className="mb-6">
            Tenho experiência prática com construção de interfaces modernas, manipulação e transformação de dados, além de colaborar em projetos onde performance e organização dos dados eram fundamentais. Estou em constante aprimoramento, com foco em contribuir para soluções inteligentes, funcionais e que realmente fazem a diferença.
          </p>
          <p className="text-gray-800 mb-4">Entre em contato comigo</p>
          <div>
            <a
              href="mailto:gaabrieelbarbosaa@gmail.com"
              className="bg-purple-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
            >
              Entrar em contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }} 
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center sm:justify-end"
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

export default About;
