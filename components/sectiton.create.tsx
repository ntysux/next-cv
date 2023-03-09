import { Box, Button, Center, Flex, HStack, IconButton, Modal, ModalBody, ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import SectionMenuActions from "./section.menu-options";
import { mergeSectionCreate, cancelSection } from "@/redux/actions";
import { RootState } from "@/redux/store";
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
    dispatch(cancelSection());
  }
  
  // cancel create section
  const cancel = () => {
    onClose();
    dispatch(cancelSection());
  }

  return (
    <>
      <IconButton
        size='sm'
        onClick={onOpen}
        aria-label='add section'
        variant='unstyledGrayHoverWhite'
        icon={<IconPlus size='18px' strokeWidth='3' />}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior='inside'
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent maxW='container.lg'>
          <SimpleGrid
            p={1}
            columns={3}
            roundedTop='2xl'
            bg='app.black.dark'
          >
            <Box />
            <Center>
              <HStack
                p={1}
                pl={3}
                w='min'
                rounded='full'
                bg='app.black.light'
              >
                <Text fontSize='sm' color='white'>{section.name}</Text>
                <SectionMenuActions />
              </HStack>
            </Center>
            <Flex justify='right' align='center' pr={1}>
              <IconButton
                aria-label='close dialog'
                variant='closeDialog'
                size='xs'
                onClick={cancel}
                icon={<IconX size='16px' strokeWidth='3' />}
              />
            </Flex>
          </SimpleGrid>
          <ModalBody>
            {
              section.data.length === 0 ?
                <Center minH='50vh'>
                  <Text
                    fontWeight='500'
                    textAlign='center'
                    color='app.gray.light1'
                  >
                    Các dạng dữ liệu hiển thị sẽ được trình bày tại đây.
                  </Text>
                </Center> 
              : 
                <Box minH='50vh'>
                  <LayoutEdit />
                </Box>
            }
          </ModalBody>
          <Center p={2}>
            <Button
              onClick={merge}
              variant='solidBlack'
              size='sm'
              w='2xs'
            >
              Tạo
            </Button>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}