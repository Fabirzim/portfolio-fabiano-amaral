import { Text } from "@/styles/Text";
import { CardImgPage } from "./style";
import { IconType } from "react-icons/lib";

interface HomePage {
    title: string;
    icon: string | IconType;
    key: number;
}

export const Next = (
    { title, icon: Icon }: HomePage,
    key: number
) => {
    const isString = typeof Icon === "string";

    return (
        <CardImgPage className={`${key}`} key={key}>
            <Text>{title}</Text>
            {isString ? (
                <img src={Icon} alt={title} title={title} height="84px" width="84px" />
            ) : (
                <Icon size={84} color="#868E96" />
            )}
        </CardImgPage>
    );
};
