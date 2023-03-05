import { Button, Input, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export default function Search() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant='outlineBlack' onClick={onOpen}>Tìm cv</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Input
            variant='unstyledWhite'
            type='text'
            placeholder='Tìm kiếm...'
          />
        </ModalContent>
      </Modal>
    </>
  );
}