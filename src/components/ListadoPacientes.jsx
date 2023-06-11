import { Pacientes } from "./Pacientes"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <>
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length === 0 ?
        (
          <>
          <h2 className="text-center font-black text-3xl">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando <span className="text-indigo-600 font-bold"> paccientes y citas</span> desde aquí
          </p>
        </>
        )
         :
         ( 
         <> 
          <h2 className="text-center font-black text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus <span className="text-indigo-600 font-bold"> paccientes y citas</span> desde aquí
          </p>
          {pacientes.map( paciente => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
       )
      }
      </div>
    </>
  )
}
