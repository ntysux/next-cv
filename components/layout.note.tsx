import { HStack, Textarea } from "@chakra-ui/react";

export default function Note({ children }: {children?: JSX.Element}) {
  return (
    <>
      <HStack>
        <Textarea variant='filledGray' />
        {children}
      </HStack>
    </>
  );
}