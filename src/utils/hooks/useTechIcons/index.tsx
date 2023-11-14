import React from "react";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiVuejsFill, RiReactjsFill } from "react-icons/ri";
import { TbBrandLaravel, TbBrandMysql, TbBrandNextjs } from "react-icons/tb";

export type IconType =
  | "vuejs"
  | "reactjs"
  | "nextjs"
  | "php"
  | "nodejs"
  | "typescript"
  | "laravel"
  | "mysql";

export type IconComponents = {
  [key in IconType]: React.ComponentType;
};

const iconComponents: IconComponents = {
  vuejs: RiVuejsFill,
  reactjs: RiReactjsFill,
  nextjs: TbBrandNextjs,
  php: FaPhp,
  nodejs: FaNodeJs,
  typescript: BiLogoTypescript,
  laravel: TbBrandLaravel,
  mysql: TbBrandMysql,
};

export default function useTechIcons() {
  const getTechIcons = (icon: IconType) => {
    return iconComponents[icon];
  };

  return {
    getTechIcons,
  };
}
