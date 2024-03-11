
import { Button } from "@/styles/Buttons";
import { Next } from "@/components/Next";
import { Container, Flex } from "@/styles/Global";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { StartIndex } from "@/components/StartIndex";
import { styleData } from "@/utils/styleData";
import { userData } from "@/utils/userData";
import { FaGithub } from "react-icons/fa";
import { Text } from "@/styles/Text";
import { Header, HomeGit, BtnHeader, UserImage, StackCards, ProjectText, ProjectsHomeText, ProjectMy, ProjectsCenter, } from "./style";

export const Home = () => {
    const baseUrlGitHub = `https://github.com/${userData.githubUser}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const baseUrl = `https://github.com/Kenzie-Academy-Brasil-Developers/Portfolio-Sucesso-Fabiano`;

    return (
        <main id="home">
            <Header>
                <Container>
                    <HomeGit>
                        <Flex>
                            <UserImage
                                src={`https://github.com/${userData.githubUser}.png`}
                                alt={userData.nameUser}
                                title={userData.nameUser}
                                width={"48px"}
                                height={"48px"}
                            />
                            <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
                        </Flex>
                        <Text as="h1" type="heading1" color="grey5">
                            I{" "}
                            <Text as="span" type="heading1" color="brand1">
                                love
                            </Text>{" "}
                            creating and{" "}
                            <Text as="span" type="heading1" color="brand1">
                                developing
                            </Text>{" "}
                            projects
                        </Text>
                        <Text type="body1" color="grey2">
                            Discover here in this environment, created especially for you, all
                            my projects and technologies
                        </Text>
                        <BtnHeader>
                            <Button as="a" type="primary" href="#projects">
                                See Projects
                            </Button>
                            <Button
                                color="grey5"
                                as="a"
                                css={{ "&:hover": { color: "$grey1" } }}
                                type="circle"
                                target="_blank"
                                href={baseUrlGitHub}
                            >
                                <FaGithub />
                            </Button>
                        </BtnHeader>
                        <StackCards>
                            {styleData.map((stack, index) => (
                                <Next key={index} title={stack.title} icon={stack.img} />
                            ))}
                        </StackCards>
                        <StartIndex />
                    </HomeGit>
                </Container>
            </Header>
            <ProjectText id="projects">
                <Container>
                    <ProjectMy>
                        <ProjectsHomeText>
                            <Text as="h2" type="heading4" color="grey4">
                                My projects
                            </Text>
                            <Text as="p" type="body1" color="grey2">
                                Projects created at{" "}
                                <Text as="span" color="brand3">
                                    Kenzie Academy
                                </Text>
                            </Text>
                        </ProjectsHomeText>
                        <ProjectsCenter>
                            <Project />
                        </ProjectsCenter>
                    </ProjectMy>
                </Container>
            </ProjectText>
            <Contacts />
        </main>
    );
};
