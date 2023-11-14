import React from "react";

type MenuSideProps = {
  menus: {
    id: string;
    label: string;
  }[];
};

export default function useMenuSide({ menus }: MenuSideProps = { menus: [] }) {
  const [currentSide, setCurrentSide] = React.useState(
    menus && menus.length > 0 ? menus[0].id : ""
  );

  const redirectSide = (id: string) => {
    setCurrentSide(id);
    const element = document.getElementById(id);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.scrollY;
      const middle = absoluteElementTop - window.innerHeight / 2;
      window.scrollTo({
        top: middle,
        behavior: "smooth",
      });
    }
  };

  const isCurrentSide = (id: string) => currentSide === id;

  return {
    currentSide,
    redirectSide,
    isCurrentSide,
  };
}
