import { Button, Flex, Input } from "@chakra-ui/react";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "./toDoSlice";

const AddToDo: FC = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const onClickAddToDo = () => {
    dispatch(addToDo(text));

    setText("");
  };

  return (
    <Flex gap={4}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={onClickAddToDo}>생성</Button>
    </Flex>
  );
};

export default AddToDo;
