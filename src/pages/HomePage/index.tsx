import { Container, Box } from "@chakra-ui/react";
import Presentation from "components/Presentation";
import Experience from "components/Experience";
import AboutMe from "components/AboutMe";
import React from "react";

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
      },
      {
        title: "Desenvolvedor Júnior",
        company: "Flip.net | Infotechnology",
        period: "Julho de 2022 - Março de 2023",
        description:
          "Responsável pelo desenvolvimento e implementação de novas features dentro da plataforma, com foco em melhoria na UX. Nesse período fui encarregado em desenvolver o frontend dos módulos de E-learning e Missões da plataforma Flipnet utilizando Vue.js/Quasar Framework, TypeScript além de bibliotecas como Pinia e Vuex.",
      },
      {
        title: "Estagiário",
        company: "Flip.net | Infotechnology",
        period: "Novembro de 2021 - Julho de 2022",
        description:
          "Encarregado em realizar suporte ao cliente e densenvolvimento de pequenas features dentro da plataforma.",
      },
    ],
  };

  return (
    <React.Fragment>
      <Presentation {...data} />
      <Box mt={12}>
        <Container maxW="container.lg" textAlign="justify">
          <Box>
            <AboutMe {...data} />
          </Box>
          <Box mt={10}>
            <Experience {...data} />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
