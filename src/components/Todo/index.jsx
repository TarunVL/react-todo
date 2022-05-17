import {
  Button,
  Checkbox,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");
  return (
    <Container>
      <Stack sx={{ marginTop: "10px" }} spacing={1}>
        <TextField
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setTodoList([...todoList, todoName]);
            setTodoName("");
          }}
          variant="contained"
        >
          Add
        </Button>
        {todoList.map((todo, index) => (
          <Stack direction="row" key={index} spacing={1}>
            <Checkbox />
            <Typography> {todo} </Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
