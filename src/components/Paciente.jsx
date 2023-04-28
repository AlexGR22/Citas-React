
const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case" >Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case" >Alex</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Email Propietario: {''}
          <span className="font-normal normal-case" >correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
          <span className="font-normal normal-case" >10 Diciembre 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Diagnóstico: {''}
          <span className="font-normal normal-case" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt at eos deserunt maxime, voluptatem non quaerat, dolores itaque adipisci beatae sequi perspiciatis ullam? Magnam distinctio consequatur repellendus assumenda facilis nobis.</span>
      </p>
    </div>
  )
}

export default Paciente