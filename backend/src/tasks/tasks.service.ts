import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks = [
        { id: 1, title: 'Aprender NestJS' },
        { id: 2, title: 'Conectar con Next.js' },
    ];

    findAll() {
        return this.tasks;
    }

    create(createTaskDto: CreateTaskDto) {
        const newTask = {
            id: this.tasks.length + 1,
            title: createTaskDto.title,
        };

        this.tasks.push(newTask);
        return newTask;
    }
}