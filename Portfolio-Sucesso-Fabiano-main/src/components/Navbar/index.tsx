import useMedia from "use-media";
import { useState } from "react";
import { userData } from "@/utils/userData";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { Navbar as NavbarPage, ImgPage, ImgText, NavbarLinks, NavbarOpen } from "./style";

export interface BtnOpen {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export const NavBar = () => {
    const isWide = useMedia({ maxWidth: "991px" });
    document.title = userData.nameUser;
    const [open, setOpen] = useState(false);
    const OpenMenu = () => {
        setOpen(!open);
    };

    return (
        <NavbarPage>
            <Container>
                <NavbarOpen>
                    <ImgPage>
                        <ImgText>{userData.nameUser}</ImgText>
                    </ImgPage>
                    {isWide && (
                        <Button
                            type="icon"
                            onClick={OpenMenu}
                            aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
                        >
                            {!open ? <FaBars /> : <IoClose />}
                        </Button>
                    )}
                </NavbarOpen>
                <Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
            </Container>
        </NavbarPage>
    );
};

export const NavLinks = (): JSX.Element => {
    return (
        <NavbarLinks>
            <Button type="btLink" as="a" color="grey4" href={`#home`}>
                Home
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#projects`}>
                Projects
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#contact`}>
                Contatos
            </Button>
            <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
                Midias Digitais
            </Button>
        </NavbarLinks>
    );
};
