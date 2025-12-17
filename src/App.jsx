import { useState } from 'react'
import '@mantine/core/styles.css';
import {Anchor, Button, Center, Group, MantineProvider, Paper, PasswordInput, Stack, Text, TextInput, Title} from '@mantine/core';

function App() {
    const [isRegister, setIsRegister] = useState(false);
  return (
      <MantineProvider>
          <Center h="100vh" bg="gray.1">
      <Paper withBorder shadow="md" p="xl" radius="25" mw={300} w="50%">
          <Title order={2} mb="lg">Добро пожаловать</Title>
          <Text >
              {isRegister
                  ? 'Зарегистрируйтесь чтобы продолжить'
                  : 'Войдите чтобы продолжить'
              }
          </Text>

          <Stack mt="md">
              {isRegister && (
                  <TextInput
                      label="Имя"
                      placeholder="Ваше имя"
                      required
                  />
              )}

              <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  required
              />
              <PasswordInput
                  label="Пароль"
                  placeholder="Ваш пароль"
                  required
              />

              <Button fullWidth>
                  {isRegister
                      ? 'Создать аккаунт'
                      : 'Войти'}
              </Button>

              <Text size="sm" ta="center" mt="md">
                  {isRegister
                      ? 'Уже есть аккаунт?'
                      : 'Нет аккаунта?'} {' '}
                  <Anchor
                      component="button"
                      type="button"
                      size="sm"
                      onClick={() => setIsRegister(!isRegister)}
                  >
                      {isRegister
                          ? 'Войти'
                          : 'Зарегистрироваться'}
                  </Anchor>
              </Text>
          </Stack>
      </Paper>
              </Center>
          </MantineProvider>
  );
}

export default App
