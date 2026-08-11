
type Priority = 'Alta' | 'Media' | 'Baja';

export interface TodoForm {
    titulo: string;
    prioridad: Priority;
}

export interface Todo {
    titulo: string;
    prioridad: Priority;
    completada: boolean;
}

