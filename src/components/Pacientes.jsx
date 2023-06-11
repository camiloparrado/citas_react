export const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {

    const handlerEliminarPaciente = () => {
        const respuesta = window.confirm('¿Estas seguro de eliminar este paciente?');
        if (respuesta) {
            eliminarPaciente(paciente.id);
        }
    }
    const { nombre, propietario, email, alta, sintomas, id } = paciente;
    return (
        <>
            <div className="mx-5 my-10 bg-white shadow-md rounded-xl px-5 py-10">
                <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre:
                    <span className="font-normal normal-case"> {nombre} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario:
                    <span className="font-normal normal-case"> {propietario} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email:
                    <span className="font-normal normal-case"> {email} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha:
                    <span className="font-normal normal-case"> {alta} </span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas:
                    <span className="font-normal normal-case"> {sintomas} </span>
                </p>

                <div className="flex justify-between mt-5">
                    <button type="button"
                            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={() => setPaciente(paciente)}
                    >Editar</button>

                    <button type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                            onClick={handlerEliminarPaciente}
                    >Eliminar</button>
                </div>

            </div>
        </>
    )
}
