"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { LogoIcon } from "@/components/ui/icons/LogoIcon";

import { loginService } from "@/services/login";
import Image from "next/image";
import { useState } from "react";

type CardProps = React.ComponentProps<typeof Card>;

interface LoginFormProps {
  email: string;
  password: string;
}

const initialState: LoginFormProps = {
  email: "",
  password: "",
};

const LoginModule = ({ className, ...props }: CardProps) => {
  const [form, setForm] = useState<LoginFormProps>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async () => {
    const response = await loginService(form);
    console.log({ response });
  };
//C:\Users\CARLOS\Desktop\rapidOrder\frontend\public\vercel.svg
  return (
    <Card className=" mx-4">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center space-x-2, mb-8 ">
          <LogoIcon/>
        </div>

        <CardTitle className="text-2xl flex justify-center">Bienvenid@ de vuelta</CardTitle>
        <CardDescription>Ingresa tu nombre de usuario y contraseña para continuar</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo</Label>
          <Input value={form.email} name="email" id="email" type="email" placeholder="tucorreo@ejemplo.com" onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input value={form.password} name="password" id="password" type="password" placeholder="••••••" onChange={handleChange} />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleOnSubmit} className="w-full">
          INGRESAR
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginModule;
