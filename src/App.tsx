

import { useState } from 'react';
import type { ChangeEvent } from 'react';
import type { TodoForm, Todo } from './interfaces/Form';
import { FiAlertTriangle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";

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

  const envioForm = (event: any) => {
    event.preventDefault();

    const Tarea: Todo = {
      id: crypto.randomUUID(),
      ...formulario,
      completada: false
    };

    setListaTodo([...listaTodo, Tarea]);

    setFormulario({
      titulo: '',
      prioridad: 'Baja'
    });
  };

  return (
    <>
      <main className="contenedor">

        <h1 className="titulo-principal">
          Mis quehaceres
        </h1>

        <section className="contador-card">

          <h2>Contador</h2>

          <p
            className="contador"
            style={{
              backgroundColor: "#230de9",
              color: "white",
              padding: "10px",
              borderRadius: "15px"
            }}
          >
            {contador}
          </p>

          <div className="botones-contador">

            <button
              className="btn btn-incrementar"
              onClick={incrementar}
            >
              + Incrementar
            </button>

            <button
              className="btn btn-disminuir"
              onClick={decrementar}
            >
              - Disminuir
            </button>

          </div>

        </section>

        <section className="formulario-card">

          <h2>Registro de nueva tarea</h2>

          <form onSubmit={envioForm} className="formulario">

            <div className="campo">

              <label htmlFor="titulo">
                Título
              </label>

              <input
                type="text"
                id="titulo"
                placeholder="Ej. Revisar GitHub"
                name="titulo"
                onChange={inputChange}
                value={formulario.titulo}
              />

            </div>

            <div className="campo">

              <label htmlFor="prioridad">
                Prioridad
              </label>

              <select
                id="prioridad"
                name="prioridad"
                onChange={inputChange}
                value={formulario.prioridad}
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>

            </div>

            <button
              type="submit"
              className="btn crear"
            >
              + Crear tarea
            </button>

          </form>

        </section>

        <section className="tabla-card">

          <h2
            className="titulo-tabla"
            style={{
              backgroundColor: "#00ff88",
              color: "#000",
              padding: "10px",
              borderRadius: "12px"
            }}
          >
            Mis tareas
          </h2>

          <div className="tabla-contenedor">

            <table className="tabla-tareas">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Prioridad</th>
                  <th>Completada</th>
                </tr>
              </thead>

              <tbody>

                {listaTodo.map((todo: Todo) => (

                  <tr key={todo.id}>

                    <td className="id-tarea">
                      {todo.id}
                    </td>

                    <td>
                      {todo.titulo}
                    </td>

                    <td>
                      <span
                        className={`prioridad ${todo.prioridad.toLowerCase()}`}
                      >
                        {todo.prioridad}
                      </span>
                    </td>

                    <td>

                      {todo.completada ? (

                        <span className="estado completada">
                          Sí <FiCheck />
                        </span>

                      ) : (

                        <span className="estado no-completada">
                          No <FiAlertTriangle />
                        </span>

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </>
  );
};

export default App;


