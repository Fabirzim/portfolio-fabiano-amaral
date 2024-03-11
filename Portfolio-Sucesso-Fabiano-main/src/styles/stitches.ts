import { createStitches } from "@stitches/react";


export const { styled } = createStitches({
  media: {
    tablet: "(max-width: 1300px)",
    mobile: "(max-width: 991px)",
    mobileLittle: "(max-width: 400px)",
  },
  utils: {
    marginX: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
