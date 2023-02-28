import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import SectionMenuActions from "./section.menu-options";

export default function SectionCreate() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();

  return (
    <>
      <C.IconButton
        onClick={onOpen}
        aria-label='add section'
        variant='unstyledGrayHoverWhite'
        icon={<TB.IconPlus size='18px' strokeWidth='3' />}
        size='sm'
      />
      <C.Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <C.ModalOverlay />
        <C.ModalContent maxW='container.lg'>
          <C.ModalHeader>
            <C.Center position='relative'>
              <C.HStack
                bg='app.black.light'
                p={1}
                pl={3}
                rounded='full'
              >
                <C.Text fontSize='sm' color='white'>Untited</C.Text>
                <SectionMenuActions />
              </C.HStack>
              <C.IconButton
                position='absolute'
                right='0'
                onClick={onClose}
                aria-label='close section'
                variant='close'
                icon={<TB.IconX size='16px' strokeWidth='3' />}
                size='xs'
              />
            </C.Center>
          </C.ModalHeader>
          <C.ModalBody>

          </C.ModalBody>
          <C.ModalFooter>
            <C.Center w='full'>
              <C.Button size='sm' onClick={onClose} variant='solidBlack' w='2xs'>
                Tạo
              </C.Button>
            </C.Center>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}