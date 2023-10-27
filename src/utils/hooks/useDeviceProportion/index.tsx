import React from "react";

export default function useDeviceProportion() {
  const [deviceWidth, setDeviceWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceWidth(window.innerWidth);
    });
  }, []);

  const isMobile = deviceWidth < 768;
  const isTablet = deviceWidth >= 768 && deviceWidth < 992;
  const isDesktop = deviceWidth >= 992 && deviceWidth < 1200;
  const isLargeDesktop = deviceWidth >= 1200;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
}
