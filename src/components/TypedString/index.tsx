import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { v4 as uuidv4 } from "uuid";

type TypedStringProps = {
  strings: string[];
  loop?: boolean;
};

export default function TypedString({
  strings,
  loop = true,
}: TypedStringProps) {
  const typedRef = useRef<Typed | null>(null);
  const id = `selector-${uuidv4().split("-")[0]}`;

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50, // Velocidade de digitação em milissegundos
      backSpeed: 25, // Velocidade de apagar em milissegundos
      backDelay: 1000, // Tempo de espera para apagar em milissegundos
      startDelay: 0, // Tempo de espera para iniciar em milissegundos
      loop,
    };

    typedRef.current = new Typed(`#${id}`, options);

    return () => typedRef.current?.destroy();
  }, [strings, loop, id]);

  return (
    <Box>
      <span id={id} />
    </Box>
  );
}
