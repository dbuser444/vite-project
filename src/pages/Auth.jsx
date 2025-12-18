import { useState } from 'react';
import {Anchor, Button, Center, Paper, PasswordInput, Stack, Text, TextInput, Title} from '@mantine/core';

function Auth() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <Center h="100vh" bg="gray.1">
            <Paper withBorder shadow="md" p="xl" radius="25" mw={300} w="50%">
                {/* Заголовок меняется в зависимости от состояния */}
                <Title order={2} mb="lg" ta="center">
                    {isRegister ? 'Регистрация' : 'Вход'}
                </Title>

                <Stack>
                    {isRegister && (
                        <TextInput label="Имя" placeholder="Ваше имя" required />
                    )}

                    <TextInput label="Email" placeholder="your@email.com" required />
                    <PasswordInput label="Пароль" placeholder="Ваш пароль" required />

                    <Button fullWidth>
                        {isRegister ? 'Создать аккаунт' : 'Войти'}
                    </Button>

                    <Text size="sm" ta="center" mt="md">
                        {isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'} {' '}
                        <Anchor
                            component="button"
                            type="button"
                            size="sm"
                            onClick={() => setIsRegister(!isRegister)}
                        >
                            {isRegister ? 'Войти' : 'Зарегистрироваться'}
                        </Anchor>
                    </Text>
                </Stack>
            </Paper>
        </Center>
    );
}

export default Auth;