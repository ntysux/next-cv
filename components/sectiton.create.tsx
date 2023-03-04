import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import SectionMenuActions from "./section.menu-options";
import { useSelector, useDispatch } from 'react-redux';
import { mergeSectionCreate, cancelBranchSection } from "@/redux/actions";
import { RootState } from "@/redux/store";
import Note from "./layout.note";
import { ModalCloseButton } from "./closebutton";

export default function SectionCreate() {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const section = useSelector((state: RootState) => state.section);
  const dispatch = useDispatch();

  function merge() {
    onClose();
    dispatch(mergeSectionCreate(section));
    dispatch(cancelBranchSection());
  }

  return (
    <>
      <C.IconButton
        onClick={onOpen}
        aria-label='add section'
        variant='unstyledGrayHoverWhite'
        icon={<TB.IconPlus size='18px' strokeWidth='3' />}
        size='sm'
      />
      <C.Modal scrollBehavior='inside' isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
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
              <ModalCloseButton onClick={() => {onClose(); dispatch(cancelBranchSection())}} />
            </C.Center>
          </C.ModalHeader>
          <C.ModalBody>
            {
              section.chil.map((item: any, key: number) => 
                <C.Stack key={key}>
                  {item.note === '' && <Note />}
                </C.Stack>
              )
            }
          </C.ModalBody>
          <C.ModalFooter>
            <C.Center w='full'>
              <C.Button
                onClick={merge}
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