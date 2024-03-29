import { Flex, Container } from "@/styles/Global";
import { styled } from "@/styles/stitches";

export const Navbar = styled("nav", {
    background: "$grey0",
    borderBottom: "2px solid $brand1",
    position: "fixed",
    inset: 0,
    bottom: "auto",
    padding: "1rem 0",
    width: "100%",
    zIndex: "99999",

    [`& ${Container}`]: {
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        "@mobile": {
            flexDirection: "column",
        },
    },
});

export const ImgPage = styled(Flex, {
    alignItems: "center",
});

export const ImgText = styled("span", {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "$grey4",
    fontFamily: '"IBM Plex Sans"',
    "@mobile": {
        fontSize: "1rem",
    },
});

export const NavbarLinks = styled(Flex, {
    "@mobile": {
        marginTop: "$3",
        flexDirection: "column",
        alignItems: "flex-start",
        "& a": {
            width: "100%",
            justifyContent: "flex-start",
            paddingLeft: 0,
        },
    },
});

export const NavbarOpen = styled("div", {
    display: "flex",
    justifyContent: "space-between",
});
