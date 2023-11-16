'use client';
import React, { useState } from 'react';

const CreateTickect = () => {

  const [formData, setFormData] = useState({
    startDate: '',
    serviceDescription:'',
    company_id: '',
    finalClient_id: '',
    serviceClient_id: '',
    serviceType: '',
    serviceDescription: '',
    technician_id: '',
    paymentMethod: '',
    ammount: 0,
    cost: 0,
    others: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/tickets/registerticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert('Error al registrar el ticket');
      }
    } catch (error) {
      alert('Error al procesar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Compañía:</label>
        <input type="text" name="clientname" value={formData.finalClient_id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Cliente Final:</label>
        <input type="text" name="finalclientname" value={formData.finalClient_id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Técnico:</label>
        <input type="text" name="clientid" value={formData.technician_id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Agente de Servicio:</label>
        <input type="text" name="clientid" value={formData.serviceClient_id} onChange={handleInputChange} />
      </div>
      <div>
        <label>Fecha de Inicio:</label>
        <input type="date" name="date" value={formData.startDate} onChange={handleInputChange} />
      </div>
      <div>
        <label>Tipo de Servicio:</label>
        <input type="text" name="servicetype" value={formData.serviceType} onChange={handleInputChange} />
      </div>
      <div>
        <label>Descripción del Servicio:</label>
        <input type="text" name="servicedescription" value={formData.serviceDescription} onChange={handleInputChange} />
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" name="amount" value={formData.ammount} onChange={handleInputChange} />
      </div>
      <div>
        <label>Costo:</label>
        <input type="number" name="cost" value={formData.cost} onChange={handleInputChange} />
      </div>
      <div>
        <label>Otros Valores o Conceptos:</label>
        <input type="number" name="anothervalues" value={formData.others} onChange={handleInputChange} />
      </div>
      <div>
        <label>Método de Pago:</label>
        <input type="number" name="anothervalues" value={formData.paymentMethod} onChange={handleInputChange} />
      </div>
      <div>
        <button type="submit">Registrar Ticket</button>
      </div>
    </form>
  );
}

export default CreateTickect;
