import { HStack, Textarea } from "@chakra-ui/react";
import { CloseButton } from "./closebutton";

export default function Note(props: {isEdit?: boolean}) {
  const { isEdit = true } = props;
  
  return (
    <>
      <HStack>
        <Textarea variant='filledGray' />
        { isEdit && <CloseButton /> }
      </HStack>
    </>
  );
}