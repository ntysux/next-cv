import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import SectionMenuActions from "./section.menu-options";
import { useSelector, useDispatch } from 'react-redux';
import { wrapperSectionCreate, newBranchSection, cancelBranchSection } from "@/redux/actions";
import { RootState } from "@/redux/store";

export default function SectionCreate() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const section = useSelector((state: RootState) => state.section);
  const dispatch = useDispatch();

  function wrapper() {
    onClose();
    dispatch(wrapperSectionCreate(section));
    dispatch(cancelBranchSection());
  }

  return (
    <>
      <C.IconButton
        onClick={() => {onOpen(); dispatch(newBranchSection())}}
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
                <C.Text fontSize='sm' color='white'>{section.name}</C.Text>
                <SectionMenuActions />
              </C.HStack>
              <C.IconButton
                position='absolute'
                right='0'
                onClick={() => {onClose(); dispatch(cancelBranchSection())}}
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
              <C.Button
                onClick={wrapper}
                variant='solidBlack'
                size='sm'
                w='2xs'
              >
                Tạo
              </C.Button>
            </C.Center>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}