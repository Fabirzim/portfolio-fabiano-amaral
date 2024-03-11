import { colors } from '@/styles/Global'
import { styled } from '@/styles/stitches';


const bodyDefaultConfig = {
    fontFamily: "$texts"
}

const headingsDefaultConfig = {
    fontFamily: "$titles"
}

export const Text = styled("p", {
    fontSize: "$text1",
    fontWeight: 400,
    color: "$grey1",
    variants: {
        type: {
            heading1: {
                fontSize: "$title1",
                lineHeight: "$title1",
                fontWeight: 700,
                ...headingsDefaultConfig,
                "@mobile": {
                    fontSize: "$title1Mobile",
                    lineHeight: "$title1Mobile"
                }
            },
            heading2: {
                fontSize: "$title2",
                lineHeight: "$title2",
                fontWeight: 700,
                ...headingsDefaultConfig
            },
            heading3: {
                fontSize: "$title3",
                lineHeight: "$title3",
                fontWeight: 700,
                ...headingsDefaultConfig
            },
            heading4: {
                fontSize: "$title4",
                lineHeight: "$title4",
                fontWeight: 700,
                ...headingsDefaultConfig
            },
            body1: {
                fontSize: "$text1",
                lineHeight: "$text1",
                ...bodyDefaultConfig
            },
            body2: {
                fontSize: "$text2",
                lineHeight: "$text2",
                ...bodyDefaultConfig
            },
        },
        ...colors
    }
})