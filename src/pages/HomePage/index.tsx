import { Container, Box } from "@chakra-ui/react";
import Presentation from "pages/HomePage/sides/Presentation";
import Experience from "pages/HomePage/sides/Experience";
import AboutMe from "pages/HomePage/sides/AboutMe";
import React from "react";
import Projects from "./sides/Projects";
import Menu from "components/Menu";

export default function HomePage() {
  const data = {
    name: "Douglas da Silva Vulcano",
    nickname: "Douglas Vulcano",
    jobs: [
      "Desenvolvedor Front-End",
      "Desenvolvedor Back-End",
      "Desenvolvedor Full-Stack",
    ],
    profile_image: "https://github.com/DouglasVulcano.png",
    description: [
      "Sou um desenvolvedor de software com paixão pela tecnologia e inovação. Atualmente, estou ocupando o cargo de Desenvolvedor Pleno na Flip.net | Infotechnology, onde tenho aprimorado minhas habilidades em tecnologias de ponta, como ReactJS, VueJS, TypeScript e PHP/ Laravel.",
      "Sou apaixonado por aprender e busco crescer constantemente como desenvolvedor. Curso Análise e Desenvolvimento de Sistemas para expandir meu conhecimento e aplicá-lo em projetos futuros. Tenho uma mente aberta e estou sempre disposto a colaborar com outros desenvolvedores para encontrar soluções criativas.",
    ],
    experiences: [
      {
        title: "Desenvolvedor Pleno",
        company: "Flip.net | Infotechnology",
        period: "Março de 2023 - Atualmente",
        description: "",
        icons: ["vuejs", "typescript", "laravel"],
      },
      {
        title: "Desenvolvedor Júnior",
        company: "Flip.net | Infotechnology",
        period: "Julho de 2022 - Março de 2023",
        description:
          "Responsável pelo desenvolvimento e implementação de novas features dentro da plataforma, com foco em melhoria na UX. Nesse período fui encarregado em desenvolver o frontend dos módulos de E-learning e Missões da plataforma Flipnet utilizando Vue.js/Quasar Framework, TypeScript além de bibliotecas como Pinia e Vuex.",
        icons: ["vuejs", "typescript", "laravel"],
      },
    ],
  };

  const menus = [
    {
      id: "about-me-side",
      label: "Sobre mim",
    },
    {
      id: "experience-side",
      label: "Experiência",
    },
    {
      id: "projects-side",
      label: "Projetos",
    },
  ];

  return (
    <React.Fragment>
      <Presentation {...data} />

      <Box mt={12}>
        <Container maxW="container.lg" textAlign="justify">
          <Menu menuIds={menus} />
          <AboutMe {...data} />
          <Box mt={10}>
            <Experience {...data} />
          </Box>
          <Box mt={10}>
            <Projects />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
