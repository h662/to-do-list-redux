import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Flex } from "@chakra-ui/react";
import ToDoItem from "./ToDoItem";

const ToDoList: FC = () => {
  const toDos = useSelector((state: RootState) => state.toDos);

  return (
    <Flex flexDir="column" mt={4} gap={1}>
      {toDos.map((v, i) => (
        <ToDoItem key={i} toDo={v} />
      ))}
    </Flex>
  );
};

export default ToDoList;
