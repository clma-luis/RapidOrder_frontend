"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { loginService } from "@/services/login";
import { FormEvent } from "react";

type CardProps = React.ComponentProps<typeof Card>;

const LoginModule = ({ className, ...props }: CardProps) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));

    const response = await loginService(data);
    console.log({ response });
  };

  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardHeader>
          <CardTitle>Iniciar sesión </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="h-[72px] ">
            <CardDescription className="mb-2">Correo</CardDescription>
            <Input name="email" type="email" placeholder="Ingresa tu correo" />
          </div>
          <div className="h-[72px]">
            <CardDescription className="mb-2">Contraseña</CardDescription>
            <Input name="password" type="password" placeholder="Ingresa tu contraseña"  />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            ENTRAR
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginModule;
