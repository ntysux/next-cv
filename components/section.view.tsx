import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Center, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react";
import { IconX } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SectionMenuActions from "./section.menu-options";
import { DisplayData, DisplayDataType } from "@/redux/state.interface";
import { NoteView } from "./display-data.note";
import { ImageView } from "./display-data.image";
import { BasicView } from "./display-data.basic";
import { SimpleView } from "./display-data.simple";

interface Map {
  array: DisplayData[],
  render: (item: DisplayData, key: number) => JSX.Element
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
                <Stack>
                  <Map array={section[index].data} render={(item, key) => 
                    <Box key={key}>
                      {item.type === DisplayDataType.Note && <NoteView data={item} />}
                      {item.type === DisplayDataType.Image && <ImageView data={item} />}
                      {item.type === DisplayDataType.Basic && <BasicView data={item} />}
                      {item.type === DisplayDataType.Simple && <SimpleView data={item} />}
                    </Box>
                  } />
                </Stack>
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