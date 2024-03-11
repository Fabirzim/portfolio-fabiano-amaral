import { ReactNode } from "react";
import { createTheme, globalCss, styled } from "@stitches/react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  padding: "0 1rem",
  margin: "0 auto",
  maxWidth: "$container",

  "@tablet": {
    maxWidth: "$containerTablet",
  },
});

export const Flex = styled("div", {
  gap: "$1",
  display: "flex",
  alignItems: "center",
});

export const Box = styled("div", {
  maxWidth: "100%",
});



export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    margin: 0,
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: { textDecoration: "none" },
});

export const GlobalStyle = ({ children }: GlobalStyleProps): JSX.Element => {

  const theme = createTheme({
    colors: {

      grey0: "#0A0A0B",
      grey1: "#121214",
      grey2: "#868E96",
      grey3: "#E9ECEF",
      grey4: "#F8F9FA",
      grey5: "#F8F9FA",
      brand1: "#623CEA",
      brand2: "#311E75",
      brand3: '#E064CC',
      whiteFixed: "#ffffff",
      mode: "#ffffff",
      socialInstagram: "#CF50AC",
      socialFacebook: "#506CCF",
      socialLinkedin: "#0E76A8",

    },
    sizes: {
      containerTablet: "40rem",
      container: "75rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
      4: "3rem",
      5: "4rem",
      section: "10rem",
      sectionMobile: "4rem",
    },
    fonts: {
      titles: '"IBM Plex Sans", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",

      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },

    radii: {
      1: "0.5rem",
      2: "0.25rem",
    },
  });

  globalStyles();

  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App className={theme}>{children}</App>;
};

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },
    brand2: {
      color: "$brand2",
    },
    brand3: {
      color: "$brand3",
    },
    grey1: {
      color: "$grey1",
    },
    grey2: {
      color: "$grey2",
    },
    grey3: {
      color: "$grey3",
    },
    grey4: {
      color: "$grey4",
    },
    grey5: {
      color: "$grey5",
    },
  },
};