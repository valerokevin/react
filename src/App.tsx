

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { TodoForm, Todo } from './interfaces/Form';

const App = () => {
  const [contador, setContador] = useState<number>(10);

  const [formulario, setFormulario] = useState<TodoForm>({
    titulo: '',
    prioridad: 'Baja'
  });

  const [listaTodo, setListaTodo] = useState<Todo[]>([]);

  const incrementar = () => {
    setContador((prev) => prev + 1);
  };

  const decrementar = () => {
    setContador((prev) => prev - 1);
  };

  const inputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    console.log(`${name} - ${value}`);

    setFormulario((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const envioForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const Tarea: Todo = {
      ...formulario,
      completada: false
    };

    setListaTodo((prev) => [...prev, Tarea]);

    console.log(Tarea);
  };

  return (
    <>
      <div>Mis quehaceres</div>

      <p id="contador">{contador}</p>

      <button onClick={incrementar}>
        Incrementar contador
      </button>

      <button onClick={decrementar}>
        Disminuir
      </button>

      <section>
        <h2>Registro de nueva tarea</h2>

        <form onSubmit={envioForm}>
          <div>
            <label htmlFor="titulo">Título</label>

            <input
              type="text"
              id="titulo"
              placeholder="p. ej. revisar GitHub"
              name="titulo"
              value={formulario.titulo}
              onChange={inputChange}
            />
          </div>

          <div>
            <label htmlFor="prioridad">Prioridad</label>

            <select
              id="prioridad"
              name="prioridad"
              value={formulario.prioridad}
              onChange={inputChange}
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <button type="submit">
            Crear todo
          </button>
        </form>
      </section>

      <section>
        <h2>Mis tareas</h2>

        {listaTodo.map((todo, index) => (
          <div key={index}>
            <p>Título: {todo.titulo}</p>
            <p>Prioridad: {todo.prioridad}</p>
            <p>Completada: {todo.completada ? 'Sí' : 'No'}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default App;



