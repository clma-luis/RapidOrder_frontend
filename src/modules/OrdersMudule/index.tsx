import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const OrdersModule = () => {
  return (
    <div className=" flex-col md:flex ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Ordenes</h2>
          <div className="flex items-center space-x-2">
            <Button>CREAR</Button>
          </div>
        </div>

        <Tabs defaultValue="open" className="space-y-4 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <TabsList>
              <TabsTrigger value="open">Abiertas</TabsTrigger>
              <TabsTrigger value="close">Cerradas</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="open" className="space-y-4">
            <div className="max-w-screen-xl mx-auto my-auto">
              <h1>Ordenes abiertas</h1>
            </div>
          </TabsContent>
          <TabsContent value="close" className="space-y-4">
            <div className="max-w-screen-xl mx-auto my-auto">
              <h1>Ordenes cerradas</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OrdersModule;
