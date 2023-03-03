import * as C from "@chakra-ui/react";
import * as TB from "@tabler/icons-react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import SectionMenuActions from "./section.menu-options";

export default function SectionView({ value } : {value: { item: any, key: number}}) {
  const { isOpen, onOpen, onClose } = C.useDisclosure();
  const { color, mode, section } = useSelector((state: RootState) => state.cv);

  return (
    <>
      <C.Accordion defaultIndex={[0, 1]} allowMultiple>
        <C.AccordionItem>
          {({ isExpanded }) => (
            <>
              <C.HStack>
                <C.AccordionButton>{section[value.key].name}</C.AccordionButton>
                <C.Box
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
              </C.HStack>
              <C.AccordionPanel>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </C.AccordionPanel>
            </>
          )}
        </C.AccordionItem>
      </C.Accordion>

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
                <C.Text fontSize='sm' color='white'>{section[value.key].name}</C.Text>
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
                Lưu
              </C.Button>
            </C.Center>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}