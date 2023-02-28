import * as C from "@chakra-ui/react";

export default function Rename() {
  return (
    <>
      <C.Editable value="Cv-dqv">
        <C.EditablePreview
          noOfLines={1}
          maxW='100px'
          bg='app.black.light'
          rounded='full'
          color='white'
          px='3'
        />
        <C.Input
          as={C.EditableInput}
          variant='unstyledBlackLight'
          size='sm'
        />
      </C.Editable>
    </>
  );
}