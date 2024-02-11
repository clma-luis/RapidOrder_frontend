"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080/");

const data = {
  user: {
    id: "65b2ea013b3ef466fe64539c",
    image: "",
    name: "Javier Hernandez",
    email: "javierhernandez@example.com",
    role: "CHEF_ROLE",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyZWEwMTNiM2VmNDY2ZmU2NDUzOWMiLCJyb2xlIjoiQ0hFRl9ST0xFIiwiaWF0IjoxNzA3NjIxOTYxLCJleHAiOjE3MDc2MjkxNjF9.Gm6ioDP29VWj4FVd2mDURfv_nCnNIB2PLYnhAiebfBQ",
};

const Chef = () => {
  useEffect(() => {
    socket.on("joinRoom", (room) => {
      console.log(room);
    });

    socket.on("newOrder", (payload) => {
        console.log("order created", payload);
      });
  
  }, []);

  const connect = () => {
    socket.emit("joinRoom", { userId: "65b2ea013b3ef466fe64539c", role: "CHEF_ROLE" });
  };

  return (
    <div>
      <Button className="w-full" type="submit" onClick={() => {}}>
        CREAR ORDEN
      </Button>
      <Button className="w-full" type="submit" onClick={connect}>
        CONECTAR
      </Button>
    </div>
  );
};

export default Chef;

const dataOrder = {

  orderItems: {
    "desserts": [
        {
            menuItemId: "asdfasdfrgsdfgio8fdf",
            status: "en proceso", 
            preparedBy:  { name: "Carlos", id: "65b2ea013b3ef466fe6453aa" }
        }
    ],
    "drinks": [
        {
            menuItemId: "asdfasdfrgsdfgf7908df",
            status: "en proceso", 
            preparedBy:  { name: "Carlos", id: "65b2ea013b3ef466fe6453aa" }
        }
    ]
  },
};


/* {
    "waiterId": "65b2ea013b3ef466fe6453aa",
    "table": 3,
    "orderItems": {
        "starters": [
            {
                "menuItemId": "asdfasdfrgsdfgfdf",
                "itemName": "Bruschetta",
                "quantity": 1,
                "details": "Con ajo"
            }
        ],
        "mainCourses": [
            {
                "menuItemId": "asdfasdfrgsd345fgfdf",
                "itemName": "Anticuchos",
                "quantity": 1,
                "details": "Con vinagre"
            }
        ],
        "desserts": [
            {
                "menuItemId": "asdfasdfrgsdfgio8fdf",
                "itemName": "Suspiro a la Limeña",
                "quantity": 2,
                "details": "Con merengue"
            }
        ],
        "drinks": [
            {
                "menuItemId": "asdfasdfrgsdfgf7908df",
                "itemName": "Inca Kola",
                "quantity": 1,
                "details": "Con burbujas"
            }
        ]
    }
} */