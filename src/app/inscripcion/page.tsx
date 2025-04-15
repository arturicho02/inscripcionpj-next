"use client";

import { useState } from "react";
import Image from "next/image";
import toast from 'react-hot-toast';


export default function Inscripcion() {
  const [formData, setFormData] = useState({
    nrodoc: "",
    nombre: "",
    apellido: "",
    edad: "",
    direccion: "",
    telefono: "",
    email: "",
    mensaje: "",
    fcumple: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/inscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          nrodoc: "",
          nombre: "",
          apellido: "",
          edad: "",
          direccion: "",
          telefono: "",
          email: "",
          mensaje: "",
          fcumple: "",
        });
        //alert('¡Felicidades, ya estás inscripto a la PJ 2025!');
        toast.success("¡Felicidades, ya estás inscripto a la PJ 2025!");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else if (res.status === 409) {
        toast.error(result.error);
      }else {
        //alert("Hubo un error al enviar los datos");
        toast.error("Hubo un error al confirmar tu inscripción");
      }
    } catch (err) {
      console.error("Error al enviar:", err);
      toast.error("Error inesperado al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:block">
      <Image
        src="/pjInvitacion.jpg"
        alt="Fondo"
        fill
        //className="absolute top-0 left-0 object-cover opacity-80 -z-10 pointer-events-none"
        className="absolute top-0 left-0 object-cover -z-10 pointer-events-none"
        priority
      />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Completá tus datos y ya estarás Reservando tu lugar en la PJ 2025!!
        </h1>

        <label htmlFor="name" className="block font-semibold mb-1">Cédula</label>
        <input
          type="text"
          name="nrodoc"
          placeholder="Cedula"
          value={formData.nrodoc}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <label htmlFor="name" className="block font-semibold mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <label htmlFor="name" className="block font-semibold mb-1">Apellido</label>
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        {/* Edad como combo */}
        <label htmlFor="name" className="block font-semibold mb-1">Edad</label>
        <select
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        >
          <option value="" disabled hidden>
            Seleccione una edad
          </option>
          {Array.from({ length: 28 }, (_, i) => i + 8).map((edad) => (
            <option key={edad} value={edad}>
              {edad}
            </option>
          ))}
        </select>

        {/* Cumpleaños con calendario */}
        <label htmlFor="name" className="block font-semibold mb-1">Cumpleaños</label>
        <input
          type="date"
          name="fcumple"
          value={formData.fcumple}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <label htmlFor="name" className="block font-semibold mb-1">Dirección</label>
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formData.direccion}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <label htmlFor="name" className="block font-semibold mb-1">Teléfono</label>
        <input
          type="tel"
          name="telefono"
          placeholder="09xxxxxxxx"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
          pattern="[0-9]{6,15}"
          title="Ingresa solo números (mínimo 6 dígitos)"
        />

        <label htmlFor="name" className="block font-semibold mb-1">Mail</label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <label htmlFor="name" className="block font-semibold mb-1">Que esperas de esta Pascua Joven 2025?</label>
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full p-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Confirmar Inscripción !!
        </button>

        {submitted && (
          <p className="text-green-600 text-center font-medium">
            ¡Felicidades, ya estás inscripto a la PJ 2025!
          </p>
        )}
      </form>
    </div>
  );
}
