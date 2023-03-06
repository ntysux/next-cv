import { Button, Center, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import SectionMenuActions from "./section.menu-options";
import { mergeSectionCreate, cancelBranchSection } from "@/redux/actions";
import { RootState } from "@/redux/store";
import { DialogCloseButton } from "./closebutton";
import LayoutEdit from "./layout.edit";

export default function SectionCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  // get section current from redux state
  const section = useSelector((state: RootState) => state.section);
  
  // merge section with cv section
  const merge = () => {
    onClose();
    dispatch(mergeSectionCreate(section));
    dispatch(cancelBranchSection());
  }
  
  // cancel create section
  const cancelSection = () => {
    onClose();
    dispatch(cancelBranchSection());
  }

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label='add section'
        variant='unstyledGrayHoverWhite'
        icon={<IconPlus size='18px' strokeWidth='3' />}
        size='sm'
      />
      <Modal scrollBehavior='inside' isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent maxW='container.lg'>
          <ModalHeader>
            <Center position='relative'>
              <HStack
                bg='app.black.light'
                p={1}
                pl={3}
                rounded='full'
              >
                <Text fontSize='sm' color='white'>{section.name}</Text>
                <SectionMenuActions />
              </HStack>
              <DialogCloseButton onClick={cancelSection} />
            </Center>
          </ModalHeader>
          <ModalBody>
            <LayoutEdit />
          </ModalBody>
          <ModalFooter>
            <Center w='full'>
              <Button
                onClick={merge}
                variant='solidBlack'
                size='sm'
                w='2xs'
              >
                Tạo
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}