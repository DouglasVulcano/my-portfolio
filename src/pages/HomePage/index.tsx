import { Container, Box } from "@chakra-ui/react";
import Presentation from "pages/HomePage/sides/Presentation";
import Experience from "pages/HomePage/sides/Experience";
import AboutMe from "pages/HomePage/sides/AboutMe";
import React from "react";
import Projects from "./sides/Projects";
import Menu from "components/Menu";

type DataProps = {
  name: string;
  nickname: string;
  jobs: string[];
  profile_image: string;
  description: string[];
  experiences: any[];
  projects: any[];
};

export default function HomePage() {
  const [data, setData] = React.useState<DataProps | null>(null);

  React.useEffect(() => {
    fetch("https://douglasvulcano.github.io/my-portfolio-json/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
    data && (
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
    )
  );
}
