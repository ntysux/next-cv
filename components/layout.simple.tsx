import { HStack, Textarea } from "@chakra-ui/react";

interface Props {
  children?: JSX.Element
}

export default function SimpleLayout({children}: Props) {
  return (
    <>
      <HStack>
        <Textarea
          variant='outlineGray'
        />
        {children}
      </HStack>
    </>
  );
}