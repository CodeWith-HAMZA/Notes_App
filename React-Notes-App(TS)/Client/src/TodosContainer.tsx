import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useContext, useEffect } from "react";
import ContextStore from "./Context/ContextStore";
import { Todo } from "./Model";
import { TodoItem } from "./TodoItem";
// * Calling From [App.tsx]
interface Props { 
}

const TodosContainer: React.FC<Props> = ({ 
}): JSX.Element => {
  const { Todos, setTodos } = useContext(ContextStore);
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      console.log("todos are here");
      setTodos(JSON.parse(localStorage.getItem("todos") ?? ""));
    } else {
      setTodos([]);
    }
  }, []);

  return (
    <>
      <Typography variant={"body1"} component={"h2"} fontSize={"2rem"}>
        Your Todos
      </Typography>
      <Stack flexDirection={"row"} flexWrap={"wrap"}>
        {(Todos.length > 0 &&
          Todos.map((item: Todo, idx: number) => (
            <TodoItem
              setTodos={setTodos} 
              key={idx}
              item={item}
            />
          ))) || (
          <Typography variant="h3" mt={6} width={"100%"} textAlign={"center"}>
            No Todos
          </Typography>
        )}
      </Stack>
    </>
  );
};

export default TodosContainer;
