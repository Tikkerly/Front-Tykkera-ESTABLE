'use client';
import React from 'react';

const CreateTickects = () => {
  return (
    <form>
      <div>
        <label>Consecutivo Interno:</label>
        <input type="text" name="internid" value="X01" />
      </div>
      <div>
        <label>Fecha de Elaboración:</label>
        <input type="date" name="date" value="10/11/2023" />
      </div>
      <div>
        <label>Número de OS:</label>
        <input type="text" name="numberOS" value="AB000001" />
      </div>
      <div>
        <label>Nombre del Cliente:</label>
        <input type="text" name="clientname" value="Thomas Araujo Perez" />
      </div>
      <div>
        <label>Número de Identificación del Cliente:</label>
        <input type="text" name="clientid" value="18764512" />
      </div>
      <div>
        <label>Nombre del Cliente Final:</label>
        <input type="text" name="finalclientname" value="Empresas varias" />
      </div>
      <div>
        <label>Quien pidio el servicio:</label>
        <input type="text" name="serviceprovider" value="Javier Tagairo" />
      </div>
      <div>
        <label>Tipo de Servicio:</label>
        <input type="text" name="servicetype" value="Reparacion de Celular" />
      </div>
      <div>
        <label>Descripción del Servicio:</label>
        <input type="text" name="servicedescription" value="Reparacion de sony A11 con problemas de pantalla" />
      </div>
      <div>
        <label>Quién Realizó el Servicio:</label>
        <input type="text" name="technician" value="Alejo Paternina" />
      </div>
      <div>
        <label>Cantidad:</label>
        <input type="number" name="amount" value="1" />
      </div>
      <div>
        <label>Valor Costo por Servicio Contratado:</label>
        <input type="number" name="cost" value="250000" />
      </div>
      <div>
        <label>Otros Valores o Conceptos:</label>
        <input type="number" name="anothervalues" value="150000" />
      </div>
      <div>
        <button type="submit">Registrar Ticket</button>
      </div>
    </form>
  );
}

export default CreateTickects;
