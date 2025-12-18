import { useState } from 'react'
import '@mantine/core/styles.css';
import {Anchor, Button, Center, Group, MantineProvider, Paper, PasswordInput, Stack, Text, TextInput, Title} from '@mantine/core';
import Auth from "./pages/Auth.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  return (
      <MantineProvider>
        <Tasks/>
      </MantineProvider>
  );
}

export default App
