import * as C from "@chakra-ui/react";
import Rename from "./rename";
import ColorTheme from "./color-theme";
import SectionCreate from "./sectiton.create";
import InteractiveMode from "./interactive-mode";

const Divider = () =>
  <C.Divider
    orientation='vertical'
    h='8px'
    borderColor='app.black.light'
    rounded='full'
  />

export default function Dashboard() {
  return (
    <>
      <C.Center
        position='sticky'
        top='0'
        p={2}
      >
        <C.HStack
          p={1}
          rounded='full'
          bg='app.black.dark'
        >
          <Rename />
          <Divider />
          <InteractiveMode />
          <Divider />
          <ColorTheme />
          <Divider />
          <SectionCreate />
        </C.HStack>
      </C.Center>
    </>
  );
}