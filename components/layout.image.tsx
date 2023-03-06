import { Box, Center, Circle, FormControl, FormLabel, Image, Input } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUrlImageBranchSection } from "@/redux/actions";

interface Props {
  children?: JSX.Element,
  isAvatar: boolean,
  index: number
}

export default function ImageLayout({children, isAvatar, index}: Props) {
  const dispatch = useDispatch();

  // get color current from redux state
  const { color } = useSelector((state: RootState) => state.cv);
  const { chil } = useSelector((state: RootState) => state.section);

  // show image after upload
  function handleChangeImage(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const file: FileList = input.files!;
    const imgUrl: string = URL.createObjectURL(file[0]);
    dispatch(setUrlImageBranchSection(index, imgUrl, isAvatar));
  }

  const imgObj = chil[index];
  const img = imgObj.type === 'image' ? imgObj.url : undefined;

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
            border={img ? '4px solid' : '2px dashed'}
            borderColor={color}
          >
            <Image src={img} />
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
          border={img ? '4px solid' : '2px dashed'}
          borderColor={color}
          overflow='hidden'
        >
          <Image
            src={img}
          />
        </Center>
      </FormLabel>
      <Input type='file' display='none' onChange={handleChangeImage} />
    </FormControl>
  );
}