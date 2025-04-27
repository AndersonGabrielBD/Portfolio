import React from "react";
import CardProject from "./CardProject";

const projects = [
  {
    title: "PostItNow",
    image: "desktoppostit.png",
    description: "Este projeto é um aplicativo web de post-its digitais que desenvolvi para resolver um problema comum: como capturar ideias e tarefas de forma rápida e organizada. Com design intuitivo e sincronização em nuvem, permite criar, arrastar e organizar lembretes facilmente, acessível de qualquer dispositivo após login seguro.",
    repoLink: "https://github.com/AndersonGabrielBD/PostItNow",
    liveLink: "https://postitnow1.netlify.app/",
  },
  {
    title: "LandingPage Alcance",
    image: "desktop2.png",
    description: "Este projeto consiste na Landing Page desenvolvida para a Clínica Alcance, especializada em fonoaudiologia. A página foi criada como freela para proporcionar uma presença online clara e atraente para a clínica, com foco em informar os pacientes sobre os serviços oferecidos e facilitar o contato com os profissionais da clínica.",
    repoLink: "https://github.com/AndersonGabrielBD/alcance-clinica-freela",
    liveLink: "https://alcanceclinica.netlify.app/",
  },
  {
    title: "TodoList Com API",
    image: "desktop.png",
    description: "Este é um Todo List interativo desenvolvido com React e Vite, que permite adicionar, remover e marcar tarefas como concluídas. Além disso consome uma API externa que fica exibindo frases motivacionais.",
    repoLink: "https://github.com/AndersonGabrielBD/Todo-list",
    liveLink: "https://todolistdiario.netlify.app/",
  },
 


  
];

const Project = () => {
  return (
    <section id="projects"  className=" md:pb-[100px]  md:pt-[50px] py-12 bg-slate-300 dark:bg-slate-800">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Projetos
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
