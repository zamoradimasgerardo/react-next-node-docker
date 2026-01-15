'use client';

import { useEffect, useState } from 'react';
import { getTasks } from '@/services/tasks.service';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map((t: any) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
