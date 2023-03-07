import { Box, Stack } from "@chakra-ui/react";
import { removeLayoutItemBranchSection } from "@/redux/actions";
import { Layout } from "@/redux/state.interface";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ImageLayout from "./layout.image";
import NoteLayout from "./layout.note";
import { CloseButtonDefault } from "./closebutton";
import BasicLayout from "./layout.basic";

interface Map {
  array: Layout[],
  render: (item: Layout, key: number) => JSX.Element
}
// render all layout using render props
const Map = ({array, render}: Map) =>
  <>{array.map((item, key) => render(item, key))}</>

export default function LayoutEdit() {
  const dispatch = useDispatch();

  // get chil from redux state
  const { chil } = useSelector((state: RootState) => state.section);

  return (
    <Stack>
      <Map array={chil} render={(item, key) =>
        <Box key={key}>
          {
            item.type === 'note' &&
            <NoteLayout index={key}>
              <CloseButtonDefault onClick={() => dispatch(removeLayoutItemBranchSection(key))} />
            </NoteLayout>
          }
          {
            item.type === 'image' &&
            <ImageLayout index={key} isAvatar={item.isAvatar}>
              <CloseButtonDefault onClick={() => dispatch(removeLayoutItemBranchSection(key))} />
            </ImageLayout>
          }
          {
            item.type === 'basic' &&
            <BasicLayout index={key} currentBasic={item}>
              <CloseButtonDefault onClick={() => dispatch(removeLayoutItemBranchSection(key))} />
            </BasicLayout>
          }
        </Box>
      } />
    </Stack>
  );
}