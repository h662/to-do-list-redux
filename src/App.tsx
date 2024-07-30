import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import AddToDo from "./features/toDoList/AddToDo";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import ToDoList from "./features/toDoList/ToDoList";

const App: FC = () => {
  const toDos = useSelector((state: RootState) => state.toDos);

  useEffect(() => console.log(toDos), [toDos]);

  return (
    <Flex flexDir="column" alignItems="center">
      <Text fontSize="2xl" my={12}>
        To Do List with Redux
      </Text>
      <AddToDo />
      <ToDoList />
    </Flex>
  );
};

export default App;
