import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techs = [
  { icon: <FaHtml5 className="text-orange-500 text-3xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500 text-3xl" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-500 text-3xl" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-blue-400 text-3xl" />, name: "Tailwind CSS" },
  { icon: <FaReact className="text-blue-500 text-3xl" />, name: "React" },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-[100px] bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-6 md:px-24 md:pb-[300px]  md:pl-[200px]"
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        Experiências e Tecnologias
      </h2>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Experiências com efeito de zoom e rotação */}
        <motion.div
          className="border-l-4 border-purple-900 pl-6"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold">Estagiário de TI - Grupo A4</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Descrição do cargo:
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-justify">
            • Prestação de suporte técnico ao usuário final, solucionando problemas 
            relacionados a hardware, software e redes. <br />
            • Auxílio na instalação, configuração e manutenção de equipamentos de 
            TI, como computadores, impressoras e periféricos. <br />
            • Responsável pela atualização e manutenção de softwares e drivers, 
            garantindo o bom funcionamento das máquinas e sistemas. <br />
            • Suporte no diagnóstico e resolução de falhas técnicas, proporcionando 
            um ambiente de trabalho mais eficiente. 
          </p>
        </motion.div>

        {/* Tecnologias com efeito de entrada sequencial */}
        <div className="flex flex-col space-y-4 pl-8 md:pl-[300px]">
          <h3 className="text-xl font-semibold">Tecnologias</h3>
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
