import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { Text } from "@/styles/Text";
import { userData } from "@/utils/userData";
import { Project as ProjectPage, ProjectTitle, ProjectPrimary, ProjectHome, ProjectLink, ProjectLinks, } from "./style";

interface ReposType {
    id: number;
    name: string;
    language: string;
    description: string;
    html_url: string;
    homepage: string;
}

export const Project = () => {
    const [repositories, setRepositories] = useState<ReposType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(
                `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
            );

            const json = await data.json();
            setRepositories(json);
            return json;
        };

        fetchData();
    }, []);

    return (
        <>
            {repositories &&
                repositories?.map?.((repository) => (
                    <ProjectPage key={repository.id}>
                        <ProjectTitle
                            as="h2"
                            type="heading3"
                            css={{ marginBottom: "$3" }}
                            color="grey4"
                        >
                            {repository.name}
                        </ProjectTitle>

                        <ProjectPrimary>
                            <Text type="body2" color="grey2">
                                Primary Language:
                            </Text>
                            {repository.language ? (
                                <ProjectHome>
                                    <Text color="grey2" type="body2">
                                        {repository.language}
                                    </Text>
                                </ProjectHome>
                            ) : (
                                <ProjectHome>
                                    <Text color="grey2" type="body2">
                                        Primary language not identified
                                    </Text>
                                </ProjectHome>
                            )}
                        </ProjectPrimary>

                        <Text type="body1" color="grey2">
                            {repository.description?.substring(0, 129)}
                        </Text>
                        <ProjectLinks>
                            <ProjectLink target="_blank" href={repository.html_url}>
                                <FaGithub /> Github Code
                            </ProjectLink>
                            {repository.homepage && (
                                <ProjectLink target="_blank" href={repository.homepage}>
                                    <FaShare /> See demo
                                </ProjectLink>
                            )}
                        </ProjectLinks>
                    </ProjectPage>
                ))}
        </>
    );
};
