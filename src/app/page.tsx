"use client"
import Image from "next/image";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {

  useEffect(() => {
    const socket = io('http://localhost:8080'); // Reemplaza con la URL de tu servidor Socket.IO

    // Escuchar eventos del servidor
    socket.on('connect', () => {
      console.log('Conectado al servidor Socket.IO');
    });

    socket.on('responseEvent', (data) => {
      console.log('Datos recibidos del servidor:', data);
    });

    socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
    });

    return () => {
      // Desconectar el socket al desmontar el componente si es necesario
      socket.disconnect();
    };
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
      </div>
    </main>
  );
}
