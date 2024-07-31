import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchUsers } from "./usersSlice";
import { Flex } from "@chakra-ui/react";
import UserItem from "./UserItem";

const UserList: FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => console.log(users), [users]);
  useEffect(() => console.log(status), [status]);
  useEffect(() => console.log(error), [error]);

  if (status === "loading") {
    return <Flex>Loading...</Flex>;
  }

  if (status === "failed") {
    return <Flex>Error: {error}</Flex>;
  }

  return (
    <Flex flexDir="column">
      {users.map((v, i) => (
        <UserItem key={i} user={v} />
      ))}
    </Flex>
  );
};

export default UserList;
