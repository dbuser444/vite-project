import {Paper, Group, Checkbox, Box, Text, Badge, ActionIcon, Button} from '@mantine/core';

export function TaskItem({ task, onToggle, onDelete }) {
    const getPriorityColor = (priority) => {
        const colors = { HIGH: 'red', MEDIUM: 'orange', LOW: 'blue' };
        return colors[priority];
    };

    return (
        <Paper p="md" withBorder radius="md" shadow="xs">
            <Group justify="space-between" wrap="nowrap">
                <Group>
                    <Checkbox
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <Box>
                        <Text td={task.completed
                            ? 'line-through'
                            : 'none'}>
                            {task.title}
                        </Text>
                        <Badge size="xs" color={getPriorityColor(task.priority)} variant="light">
                            {task.priority}
                        </Badge>
                    </Box>
                </Group>
                <Button variant="subtle" color="red" onClick={() => onDelete(task.id)}>
                    <span>Удалить</span>
                </Button>
            </Group>
        </Paper>
    );
}