import { Center, Circle, Flex, FormControl, FormLabel, HStack, IconButton, Img, Input, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeDataSection, setImageUrlSection } from "@/redux/actions";
import { Image } from "@/redux/state.interface";
import { IconX } from "@tabler/icons-react";

interface Props {
  index: number,
  currentImage: Image
}

export function ImageEdit({index, currentImage}: Props) {
  const dispatch = useDispatch();

  // get current color from redux state
  const { color } = useSelector((state: RootState) => state.cv);

  // show image after upload
  function handleChangeImage(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const file: FileList = input.files!;
    const imgUrl: string = URL.createObjectURL(file[0]);
    dispatch(setImageUrlSection(index, currentImage, imgUrl));
  }

  // remove image
  const handleRemoveImage = () => dispatch(removeDataSection(index));

  return currentImage.isAvatar ? (
    <HStack>
      <Center
        p={2}
        w='full'
        rounded='xl'
        boxShadow='base'
      >
        <FormControl w='min'>
          <FormLabel m={0}>
            <Circle
              size='90px'
              cursor='pointer'
              overflow='hidden'
              border={currentImage.url ? '4px solid' : '2px dashed'}
              borderColor={color}
            >
              <Img src={currentImage.url} />
            </Circle>
          </FormLabel>
          <Input type='file' display='none' onChange={handleChangeImage} />
        </FormControl>
      </Center>
      <IconButton
        aria-label='close'
        variant='close'
        size='xs'
        onClick={handleRemoveImage}
        icon={<IconX size='16px' strokeWidth='3' />}
      />
    </HStack>
  ) : (
    <HStack>
      <FormControl>
        <FormLabel m={0}>
          <Center
            minH='100px'
            maxH='160px'
            cursor='pointer'
            rounded='xl'
            border={currentImage.url ? '4px solid' : '2px dashed'}
            borderColor={color}
            overflow='hidden'
          >
            <Img src={currentImage.url} />
          </Center>
        </FormLabel>
        <Input type='file' display='none' onChange={handleChangeImage} />
      </FormControl>
      <IconButton
        aria-label='close'
        variant='close'
        size='xs'
        onClick={handleRemoveImage}
        icon={<IconX size='16px' strokeWidth='3' />}
      />
    </HStack>
  );
}

export function ImageView({data}: {data: Image}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // get current color from redux state 
  const { color } = useSelector((state: RootState) => state.cv);

  return data.isAvatar ? (
    <Center
      p={4}
      rounded='xl'
      boxShadow='base'
    >
      <Circle
        size='90px'
        overflow='hidden'
        border='4px'
        borderColor={color}
      >
        <Img src={data.url} />
      </Circle>
    </Center>
  ) : (
    <>
      <Center
        onClick={onOpen}
        cursor='pointer'
        minH='100px'
        maxH='120px'
        rounded='xl'
        border='4px'
        borderColor={color}
        overflow='hidden'
      >
        <Img src={data.url} />
      </Center>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW='sm'>
          <Flex
            p={1.5}
            bg='app.black.dark'
            roundedTop='xl'
            justify='flex-end'
          >
            <IconButton
              aria-label='close dialog'
              variant='closeDialog'
              size='xs'
              onClick={onClose}
              icon={<IconX size='16px' strokeWidth='3' />}
            />
          </Flex>
          <Center
            minH='10vh'
            maxH='60vh'
            overflow='hidden'
            roundedBottom='xl'
          >
            <Img src={data.url} />
          </Center>
        </ModalContent>
      </Modal>
    </>
  );
}

