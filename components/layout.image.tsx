import { Box, Center, Circle, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  children?: JSX.Element,
  isAvatar: boolean
}

export default function ImageLayout({children, isAvatar}: Props) {
  const [image, setImage] = useState('');

  // get color current from redux state
  const { color } = useSelector((state: RootState) => state.cv);

  // show image after upload
  function handleChangeImage(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const file: FileList = input.files!;
    const imgUrl: string = URL.createObjectURL(file[0]);
    setImage(imgUrl);
  }

  return isAvatar ? (
    <Center
      p={2}
      rounded='xl'
      boxShadow='base'
      position='relative'
    >
      <Box position='absolute' right='0' top='0'>
        {children}
      </Box>
      <FormControl w='min'>
        <FormLabel m={0}>
          <Circle
            size='90px'
            cursor='pointer'
            overflow='hidden'
            border={image ? '4px solid' : '2px dashed'}
            borderColor={color}
          >
            <Image src={image} />
          </Circle>
        </FormLabel>
        <Input type='file' display='none' onChange={handleChangeImage} />
      </FormControl>
    </Center>
  ) : (
    <FormControl position='relative'>
      <Box position='absolute' right='0.5' top='0' zIndex='1'>
        {children}
      </Box>
      <FormLabel m={0}>
        <Center
          position='relative'
          minH='100px'
          maxH='160px'
          cursor='pointer'
          rounded='xl'
          border={image ? '4px solid' : '2px dashed'}
          borderColor={color}
          overflow='hidden'
        >
          <Image
            src={image}
          />
        </Center>
      </FormLabel>
      <Input type='file' display='none' onChange={handleChangeImage} />
    </FormControl>
  );
}