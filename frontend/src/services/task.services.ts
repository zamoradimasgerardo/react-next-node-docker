export async function getTasks() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks`
    );

    if (!res.ok) {
        throw new Error('Error al obtener tareas');
    }

    return res.json();
}
