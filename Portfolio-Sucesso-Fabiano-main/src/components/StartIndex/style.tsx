import { Text } from "@/styles/Text";
import { styled } from "@/styles/stitches";


export const TitlePage = styled(Text, {
    marginBottom: "32px",
});

export const TextArea = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
});

export const Section = styled("section", {
    background: "$grey0",
    padding: "64px 16px",
    borderRadius: "25px",
    "@mobile": {
        padding: "$sectionMobile 0",
    },
});