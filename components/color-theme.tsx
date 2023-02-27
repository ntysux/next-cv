import * as C from "@chakra-ui/react";

const colors: string[] = ['#5CF2E3', '#B980F2', '#F28DBC'];

interface Map {
  array: string[],
  render: (color: string, key: number) => JSX.Element
}

const Map = ({array, render}: Map) =>
  <>{array.map((color, key) => render(color, key))}</>

export default function ColorTheme() {
  return (
    <>
      <C.Box>
        <C.Popover>
          <C.PopoverTrigger>
            <C.IconButton
              aria-label='change color'
              variant='unstyledHoverBgBlack'
              icon={<C.Box p={1} bg='app.teal' rounded='full'/>}
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