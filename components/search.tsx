import * as C from "@chakra-ui/react";

export default function Search() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();

  return (
    <>
      <C.Button variant='outlineBlack' onClick={onOpen}>Tìm cv</C.Button>

      <C.Modal isOpen={isOpen} onClose={onClose}>
        <C.ModalOverlay />
        <C.ModalContent>
          <C.Input
            variant='unstyledWhite'
            type='text'
            placeholder='Tìm kiếm...'
          />
        </C.ModalContent>
      </C.Modal>
    </>
  );
}