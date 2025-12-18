import { Modal, Stack, TextInput, Select, Button } from '@mantine/core';
import { useState } from 'react';

export function AddTaskModal({ opened, onClose, onAdd }) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('MEDIUM');

    const handleSubmit = () => {
        if (!title.trim()) return;
        onAdd({ title, priority });
        setTitle('');
        setPriority('MEDIUM');
        onClose();
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Новая задача" centered>
            <Stack>
                <TextInput
                    label="Название"
                    placeholder="Напишите задачу"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Select
                    label="Приоритет"
                    data={[
                        { value: 'HIGH', label: 'Высокий' },
                        { value: 'MEDIUM', label: 'Средний' },
                        { value: 'LOW', label: 'Низкий' },
                    ]}
                    value={priority}
                    onChange={setPriority}
                />
                <Button onClick={handleSubmit}>Создать</Button>
            </Stack>
        </Modal>
    );
}