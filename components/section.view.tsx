import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Center, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, Text, useDisclosure } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SectionMenuActions from "./section.menu-options";
import { Layout } from "@/redux/state.interface";

interface Map {
  array: Layout[],
  render: (item: Layout, key: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((item, key) => render(item, key))}</>

export default function SectionView({index}: {index: number}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // get current color, mode & section from redux state
  const { color, mode, section } = useSelector((state: RootState) => state.cv);

  return (
    <>
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <HStack>
                <AccordionButton>{section[index].name}</AccordionButton>
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
                <Map array={section[index].chil} render={(item, key) => 
                  <Box key={key}>
                    {
                      item.type === 'note' && <Tag bg='app.gray.dark'>Note here</Tag>
                    }
                    {
                      item.type === 'image' && <Box>Image here</Box>
                    }
                    {
                      item.type === 'basic' && <Box>basic here</Box>
                    }
                    {
                      item.type === 'simple' && <Box>simple here</Box>
                    }
                  </Box>
                } />
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
                <Text fontSize='sm' color='white'>{section[index].name}</Text>
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