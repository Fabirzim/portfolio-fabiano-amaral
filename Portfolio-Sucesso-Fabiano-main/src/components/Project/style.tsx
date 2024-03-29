import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { styled } from "@/styles/stitches";

export const ProjectHome = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectPrimary = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey5",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {});

export const Project = styled("article", {
  marginTop: "4rem",
  maxWidth: "500px",
  border: "1px solid $brand1",
  borderRadius: "10px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "$grey1",
    borderColor: "$brand2",
    transition: "0.3s",
  },
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",

      "@mobile": {
        width: "auto",
      },

      "&::before": {
        content: "New",
        position: "absolute",
        top: "-30px",
        left: "0",
        width: "max-content",
        height: "28px",
        backgroundColor: "$brand1",
        padding: "0px 8px",
        borderRadius: "var(--radii-1)",
        fontSize: "14px",
        color: "var(--colors-whiteFixed)",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter",

        "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      },
    },
  },
});
