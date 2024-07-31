import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import AddToDo from "./features/toDoList/AddToDo";
import ToDoList from "./features/toDoList/ToDoList";
import UserList from "./features/users/UserList";

const App: FC = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Text fontSize="2xl" my={12}>
        To Do List with Redux
      </Text>
      <AddToDo />
      <ToDoList />
      <UserList />
    </Flex>
  );
};

export default App;
