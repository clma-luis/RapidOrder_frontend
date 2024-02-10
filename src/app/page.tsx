"use client";
import { getAllUsers } from "@/services/user";
import { Socket } from "dgram";
import Image from "next/image";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/");

export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<any[]>([]);

  /*   console.log({socket});
  console.log({isConnected});
  console.log({fooEvents}); */

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      setFooEvents((previous) => [...previous, value]);
    }

    socket.on("connect-orders", (payload) => {
      console.log("Order connected", payload);
    });

    socket.on("new-order", (payload) => {
      console.log("order created", payload);
    });

    socket.on("private-message", (data) => {
      console.log("data message:", data.message);
    });

    socket.on("notification", (message) => {
      console.log("Notificación recibida:", message);
    });

    socket.on("mensajeSala", (message) => {
      console.log("Notificación recibida:", message);
    });

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);
  const handleBtn = async () => {
    /*     socket.emit('join-room', {userId: "65b2ea013b3ef466fe6453a1"});
     */
    console.log("pasa por aqui handle btn");
    await getAllUsers();

    /*  socket.emit("create-order", data, (callback: any) => {
      console.log("del server al client", callback);
    }); */
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={handleBtn}>Conectar</button>
      </div>
    </main>
  );
}

const data = {
  tokken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyZWEwMTNiM2VmNDY2ZmU2NDUzOTgiLCJyb2xlIjoiQURNSU5fUk9MRSIsImlhdCI6MTcwNjMwODMyMSwiZXhwIjoxNzA2MzE1NTIxfQ.Yimc5s_TiHNclzFiODJMvdRl4xIJ07dgiJsFTpqhzZk",
  table: 5,
  orderItems: {
    starters: [
      {
        itemName: "Caesar Salad",
        quantity: 2,
        details: "No tomatoes",
      },
      {
        itemName: "Bruschetta",
        quantity: 1,
        details: "With garlic",
      },
    ],
    mainCourses: [
      {
        itemName: "Main Course",
        quantity: 2,
        details: "No onions",
      },
      {
        itemName: "Another Dish",
        quantity: 1,
        details: "",
      },
    ],
    desserts: [
      {
        itemName: "Chocolate Cake",
        quantity: 1,
        details: "With ice cream",
      },
    ],
    drinks: [
      {
        itemName: "Water",
        quantity: 2,
        details: "With ice",
      },
      {
        itemName: "Soda",
        quantity: 1,
        details: "Sugar-free",
      },
    ],
  },
  status: "Pending",
};
