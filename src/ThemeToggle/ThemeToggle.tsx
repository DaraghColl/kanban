import { useState } from "react";
import {
  Group,
  ActionIcon,
  Box,
  useMantineColorScheme,
  Button,
} from "@mantine/core";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div className="App">
      <Box>
        <Group position="apart">
          <Button variant="default" onClick={() => toggleColorScheme()}>
            {colorScheme === "dark" ? "Light" : "Dark"}
          </Button>
        </Group>
      </Box>
    </div>
  );
};

export { ThemeToggle };
