import * as C from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setColorTheme } from "@/redux/actions";

const colors: string[] = [
  '#5CF2E3', '#B980F2', '#F28DBC'
];

interface Map {
  array: string[],
  render: (color: string, key: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((color, key) => render(color, key))}</>

export default function ColorTheme() {
  const dispatch = useDispatch();
  const cv = useSelector((state: RootState) => state.cv);

  return (
    <>
      <C.Box>
        <C.Popover>
          <C.PopoverTrigger>
            <C.IconButton
              aria-label='change color'
              variant='unstyledHoverBgBlack'
              icon={<C.Box p={1} bg={cv.color} rounded='full'/>}
              size='sm'
            />
          </C.PopoverTrigger>
          <C.PopoverContent
            w='min'
            border='none'
            bg='app.black.dark'
            rounded='sm'
          >
            <C.HStack p={1} spacing={1}>
              <Map array={colors} render={(color, key) =>
                <C.IconButton
                  key={key}
                  onClick={() => dispatch(setColorTheme(color))}
                  aria-label='color'
                  variant='unstyledHoverBgBlack'
                  icon={<C.Box p={2} bg={color} rounded='full' />}
                  size='xs'
                />
              }/>
            </C.HStack>
          </C.PopoverContent>
        </C.Popover>
      </C.Box>
    </>
  );
}