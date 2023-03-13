import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Center, Flex, HStack, IconButton, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react";
import { IconEdit, IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SectionMenuActions from "./section.menu-options";
import { DisplayData, DisplayDataType } from "@/redux/state.interface";
import { NoteView } from "./display-data.note";
import { ImageView } from "./display-data.image";
import { BasicView } from "./display-data.basic";
import { SimpleView } from "./display-data.simple";
import { cancelSection, mergeSectionUpdate, updateSection } from "@/redux/actions";
import DisplayDataEdit from "./display-data.edit";

interface Map {
  array: DisplayData[],
  render: (item: DisplayData, key: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((item, key) => render(item, key))}</>

export default function SectionView({index}: {index: number}) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // get current color, mode & section from redux state
  const { color, mode, section } = useSelector((state: RootState) => state.cv);
  const sectionBranch = useSelector((state: RootState) => state.section);

  const merge = () => {
    onClose();
    dispatch(mergeSectionUpdate(index, sectionBranch));
    dispatch(cancelSection());
  }

  const cancel = () => {
    onClose();
    dispatch(cancelSection());
  }

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <HStack>
                <AccordionButton>{section[index].name}</AccordionButton>
                <Box
                  onClick={() => {
                    if(mode) {
                      onOpen()
                      dispatch(updateSection(section[index]))
                    }
                  }}
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
                <Text fontSize='sm' color='white' maxW='100px' noOfLines={1}>{sectionBranch.name}</Text>
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
              sectionBranch.data.length === 0 ?
                <Center minH='50vh' flexDirection='column' color='app.gray.light1'>
                  <IconEdit size='24px' />
                  <Text
                    fontWeight='500'
                    textAlign='center'
                  >
                    Các dạng dữ liệu hiển thị sẽ được trình bày tại đây.
                  </Text>
                </Center> 
              : 
                <Box minH='50vh'>
                  <DisplayDataEdit />
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
              Lưu
            </Button>
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}