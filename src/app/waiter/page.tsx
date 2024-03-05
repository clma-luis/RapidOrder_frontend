"use client";
import { Button } from "@/components/ui/Button";
import { createOrderService } from "@/services/order";
import React from "react";

const data = {
  user: {
    id: "65b2ea013b3ef466fe64539d",
    image: "",
    name: "Ana Ramirez",
    email: "anaramirez@example.com",
    role: "WAITER_ROLE",
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWIyZWEwMTNiM2VmNDY2ZmU2NDUzOWQiLCJyb2xlIjoiV0FJVEVSX1JPTEUiLCJpYXQiOjE3MDc2MzE4OTUsImV4cCI6MTcwNzYzOTA5NX0.sL_jIjFSuLRGlzyArKbQz6w8Y9eIus3cnMjk5IWV3RM",
};

const dataOrder = {
  waiterId: "65b2ea013b3ef466fe6453aa",
  table: 3,
  orderItems: {
    starters: [
      {
        menuItemId: "asdfasdfrgsdfgfdf",
        itemName: "Bruschetta",
        quantity: 1,
        details: "Con ajo",
    /*     status: "pendiente", */
      },
    ],
    mainCourses: [
      {
        menuItemId: "asdfasdfrgsd345fgfdf",
        itemName: "Anticuchos",
        quantity: 1,
        details: "Con vinagre",
/*         status: "pendiente", */
      },
    ],
    desserts: [
      {
        menuItemId: "asdfasdfrgsdfgio8fdf",
        itemName: "Suspiro a la Limeña",
        quantity: 2,
        details: "Con merengue",
/*         status: "pendiente", */
      },
    ],
    drinks: [
      {
        menuItemId: "asdfasdfrgsdfgf7908df",
        itemName: "Inca Kola",
        quantity: 1,
        details: "Con burbujas",
    /*     status: "pendiente", */
      },
    ],
  },
};

const Waiter = () => {
  const createOrder = async () => {
  const result = await createOrderService(dataOrder);
  console.log({ result });
  }

  return (
    <div>
      <Button className="w-full" type="submit" onClick={createOrder}>
        CREAR ORDEN
      </Button>
    </div>
  );
};

export default Waiter;
