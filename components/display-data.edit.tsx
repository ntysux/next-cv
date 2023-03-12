import { Box, Stack } from "@chakra-ui/react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { NoteEdit } from "./display-data.note";
import { DisplayData, DisplayDataType } from "@/redux/state.interface";
import { ImageEdit } from "./display-data.image";
import { BasicEdit } from "./display-data.basic";
import { SimpleEdit } from "./display-data.simple";

interface Map {
  array: DisplayData[],
  render: (item: DisplayData, index: number) => JSX.Element
}

// display data using render props
const Map = ({array, render}: Map) =>
  <>{array.map((item, index) => render(item, index))}</>

export default function DisplayDataEdit() {
  // get section.data from redux state
  const { data } = useSelector((state: RootState) => state.section);

  return (
    <Stack>
      <Map array={data} render={(item, index) =>
        <Box key={index}>
          {item.type === DisplayDataType.Note && <NoteEdit index={index} currentNote={item} />}
          {item.type === DisplayDataType.Image && <ImageEdit index={index} currentImage={item} />}
          {item.type === DisplayDataType.Basic && <BasicEdit index={index} currentBasic={item} />}
          {item.type === DisplayDataType.Simple && <SimpleEdit index={index} currentSimple={item} /> }
        </Box>
      } />
    </Stack>
  );
}