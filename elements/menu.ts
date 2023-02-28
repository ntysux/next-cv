import { menuAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    p: 1,
    bg: 'app.black.dark',
    border: 'none',
    rounded: 'sm'
  },
  item: {
    rounded: 'sm',
    fontSize: 'md',
    color: 'white',
    bg: 'app.black.dark',
    _hover: {bg: 'app.black.light'}
  },
  command: {
    fontSize: 'sm'
  },
  divider: {
    my: 1
  }
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });