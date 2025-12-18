import { Container, Title, Paper, Group, Button, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { TaskItem } from '../components/TaskItem';
import { AddTaskModal } from '../components/AddTaskModal';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [opened, { open, close }] = useDisclosure(false);

    const addTask = (taskData) => {
        const newTask = {
            ...taskData,
            id: Date.now(),
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id
            ? { ...t, completed: !t.completed }
            : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <Container size="sm" py="xl">
            <Paper p="lg" withBorder mb="xl">
                <Group justify="space-between">
                    <Title order={2}>Мои задачи</Title>
                    <Button onClick={open}>Добавить</Button>
                </Group>
            </Paper>

            <Stack>
                {tasks.length > 0
                    ?
                    tasks.map(task => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={toggleTask}
                            onDelete={deleteTask}
                        />
                    ))

                    : <Text size='md' ta="center" c="dimmed">Список пуст</Text>
                }
            </Stack>

            <AddTaskModal opened={opened} onClose={close} onAdd={addTask} />
        </Container>
    );
}

export default Tasks;