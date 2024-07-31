import { FC } from "react";
import { User } from "./usersSlice";
import { Flex, Text } from "@chakra-ui/react";

interface UserItemProps {
  user: User;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <Flex>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </Flex>
  );
};

export default UserItem;
