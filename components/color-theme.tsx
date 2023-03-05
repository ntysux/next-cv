import { Box, HStack, IconButton, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setColorTheme } from "@/redux/actions";

// list color main theme
const colors: string[] = [
  '#5CF2E3', '#B980F2', '#F28DBC'
];

interface Map {
  array: string[],
  render: (color: string, key: number) => JSX.Element
}
// render all color using render props
const Map = ({array, render}: Map) =>
  <>{array.map((color, key) => render(color, key))}</>

export default function ColorTheme() {
  const dispatch = useDispatch();
  // get color current
  const { color } = useSelector((state: RootState) => state.cv);
  // change color using redux action
  const handleSetColorTheme = (color: string) => dispatch(setColorTheme(color));

  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label='change color'
            variant='unstyledHoverBgBlack'
            icon={<Box p={1} bg={color} rounded='full'/>}
            size='sm'
          />
        </PopoverTrigger>
        <PopoverContent
          w='min'
          border='none'
          bg='app.black.dark'
          rounded='sm'
        >
          <HStack p={1} spacing={1}>
            <Map array={colors} render={(color, key) =>
              <IconButton
                key={key}
                aria-label='color'
                variant='unstyledHoverBgBlack'
                size='xs'
                onClick={() => handleSetColorTheme(color)}
                icon={<Box p={2} bg={color} rounded='full' />}
              />
            }/>
          </HStack>
        </PopoverContent>
      </Popover>
    </Box>
  );
}