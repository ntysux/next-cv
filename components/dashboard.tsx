import { Center, Divider, HStack } from "@chakra-ui/react";
import Rename from "./rename";
import ColorTheme from "./color-theme";
import SectionCreate from "./sectiton.create";
import InteractiveMode from "./interactive-mode";

const DividerDashboard = () =>
  <Divider
    orientation='vertical'
    h='8px'
    borderColor='app.black.light'
    rounded='full'
  />

export default function Dashboard() {
  return (
    <Center
      position='sticky'
      top='0'
      p={2}
    >
      <HStack
        p={1}
        rounded='full'
        bg='app.black.dark'
      >
        <Rename />
        <DividerDashboard />
        <InteractiveMode />
        <DividerDashboard />
        <ColorTheme />
        <DividerDashboard />
        <SectionCreate />
      </HStack>
    </Center>
  );
}