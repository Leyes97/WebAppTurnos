import React from 'react';

const Form = () => {
  return (
    <div
      id="container"
      className="w-878 h-512 top-136 left-245 px-40 py-40 gap-16 rounded-tl-12 opacity-1">
      <h1 className="text-sm font-semibold">Mis Datos</h1>
      <p className='text-sm font-normal'>Nombre</p>
      <input type="text" className="w-full px-2 py-4 gap-4 rounded-2xl border border-gray-300 opacity-1" placeholder="Nombre"/>
      <p className='text-sm font-normal'>Email</p>
      <input type="email" className="w-full px-2 py-4 gap-4 rounded-2xl border border-gray-300 opacity-1" placeholder="Email"/>
      <div className="flex justify-between">
        <div className="w-1/2">
          <p className='text-sm font-normal'>DNI</p>
          <input type="text" className="w-full px-2 py-4 gap-4 rounded-2xl border border-gray-300 opacity-1" placeholder="Input 1"/>
        </div>
        {"  "}
        <div className=" ml-4 w-1/2">
          <p className='text-sm font-normal'>Sucursal</p>
          <input type="text" className="w-full px-2 py-4 gap-4 rounded-2xl border border-gray-300 opacity-1" placeholder="Input 2"/>
        </div>
      </div>
      <p className='text-sm font-normal'>Contraseña</p>
      <input type="password" className="w-full px-2 py-4 gap-4 rounded-2xl border border-gray-300 opacity-1" placeholder="Email"/>
    </div>
  );
};

export default Form;


