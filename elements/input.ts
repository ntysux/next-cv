import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const unstyledWhite = definePartsStyle({
  field: {
    rounded: 'sm',
    fontWeight: '500',
    color: 'app.black.dark',
    _placeholder: {
      fontSize: 'sm',
      color: 'app.gray.dark',
    }
  }
});

const unstyledBlackLight = definePartsStyle({
  field: {
    color: 'white',
    rounded: 'full',
    bg: 'app.black.light'
  }
});

export const inputTheme = defineMultiStyleConfig({
  variants: {unstyledWhite, unstyledBlackLight}
});