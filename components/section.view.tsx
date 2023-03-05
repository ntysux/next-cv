import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Center, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SectionMenuActions from "./section.menu-options";
import { Section } from "@/redux/state.interface";

export default function SectionView({value}: {value: {section: Section, key: number}}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // get curren color, mode & section from redux state
  const { color, mode, section } = useSelector((state: RootState) => state.cv);

  return (
    <>
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <HStack>
                <AccordionButton>{section[value.key].name}</AccordionButton>
                <Box
                  onClick={() => mode && onOpen()}
                  cursor={mode ? 'pointer' : 'default'}
                  p={mode ? 1 : 0.5}
                  border='2px'
                  rounded='full'
                  transition='all 0.3s'
                  w={isExpanded ? '0px': '24px'}
                  bg={isExpanded ? color : 'white'}
                  borderColor={isExpanded ? color : 'app.gray.dark'}
                />
              </HStack>
              <AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
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
                <Text fontSize='sm' color='white'>{section[value.key].name}</Text>
                <SectionMenuActions />
              </HStack>
              <IconButton
                position='absolute'
                right='0'
                onClick={onClose}
                aria-label='close section'
                variant='close'
                icon={<IconX size='16px' strokeWidth='3' />}
                size='xs'
              />
            </Center>
          </ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Center w='full'>
              <Button size='sm' onClick={onClose} variant='solidBlack' w='2xs'>
                Lưu
              </Button>
            </Center>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}