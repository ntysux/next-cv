import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'rgba(73, 71, 75, 0.34)'
  },
  dialog: {
    mx: 2,
    rounded: '2xl',
    boxShadow: 'none'
  },
  header: {
    py: 1,
    px: 2,
    bg: 'app.black.dark',
    roundedTop: '2xl',
  },
  body: {
    p: 2,
    minH: '50vh'
  },
  footer: {
    p: 2
  }
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });