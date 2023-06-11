import { useState, useEffect } from 'react';
import { Error } from './Error';

export const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta( paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion de formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true); 
      return;
    }
    setError(false);
    //crear objeto
    const objpaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas
    }
    //editar o agregar
    if (paciente.id){
      //editar
      objpaciente.id = paciente.id; 

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === objpaciente.id ? objpaciente : pacienteState);
      setPacientes(pacientesActualizados);
      console.log(pacientesActualizados + "paciente actualizado");
      setPaciente({});
    }else{
      //agregar
      console.log('nuevo paciente');
      //Generar id para el nuevo registro
      objpaciente.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      //enviar objeto al componente principal
      setPacientes([...pacientes, objpaciente]);
    }
    
    console.log(objpaciente);
    //reiniciar formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }
 
  return (
    <>
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10"> 
              Añade Pacientes y <span className="text-indigo-600 font-bold">Administrarlos</span>
            </p>

            <form id='formulario' className="bg-white shadow-md rounded-lg py-10 px-5" action="" onSubmit={handleSubmit}>
              { error && <Error >Todos los campos son obligatorios</Error>}
              <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>
                <input 
                  type="text"  
                  name="nombre" 
                  id="nombre" 
                  placeholder="Nombre Mascota" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
                  value={nombre}
                  onChange={ (e)=> setNombre(e.target.value) }
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                <input 
                  type="text"  
                  name="nombre-propietario" 
                  id="propietario" 
                  placeholder="Nombre Propietario" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
                  value={propietario}
                  onChange={ (e)=> setPropietario(e.target.value) }
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
                <input 
                  type="email"  
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
                  value={email}
                  onChange={ (e)=> setEmail(e.target.value) }
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
                <input 
                  type="date"  
                  name="alta" 
                  id="alta"  
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md"
                  value={alta}
                  onChange={ (e)=> setAlta(e.target.value) }
                />
              </div>

              <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
                <textarea name="sintomas" id="sintomas"className="border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-md" placeholder="Describe los sintomas" value={sintomas} onChange={(e)=> setSintomas(e.target.value)} />
              </div>

              <input 
                type="submit" 
                className="bg-indigo-600 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-colors duration-300"
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
              />
            </form>
        </div>
    </>
  )
}

