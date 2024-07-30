import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { deleteToDo, ToDo, toggleToDo } from "./toDoSlice";
import { useDispatch } from "react-redux";

interface ToDoItemProps {
  toDo: ToDo;
}

const ToDoItem: FC<ToDoItemProps> = ({ toDo }) => {
  const dispatch = useDispatch();

  return (
    <Flex>
      <Text
        textDecorationLine={toDo.isDone ? "line-through" : ""}
        onClick={() => dispatch(toggleToDo(toDo.id))}
      >
        {toDo.text}
      </Text>
      <Button colorScheme="red" onClick={() => dispatch(deleteToDo(toDo.id))}>
        삭제
      </Button>
    </Flex>
  );
};

export default ToDoItem;
