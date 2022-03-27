import { useState } from "react";
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  Text,
  useMantineTheme,
  ColorSchemeProvider,
  ColorScheme,
  Group,
} from "@mantine/core";

import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

function App() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={{ colorScheme }}>
          <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            padding="md"
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
                color:
                  theme.colorScheme === "light"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
            navbar={
              <Navbar
                p="md"
                hiddenBreakpoint="xl"
                hidden={!opened}
                width={{ sm: 300, lg: 400 }}
              >
                {/* Navbar  */}
              </Navbar>
            }
            header={
              <Header height={70} p="md">
                <Group sx={{ height: "100%" }} px={20} position="apart">
                  <MediaQuery largerThan="md" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <ThemeToggle />
                </Group>
              </Header>
            }
          >
            {/* App Code  */}
          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
function toggleColorScheme(): void {
  throw new Error("Function not implemented.");
}
