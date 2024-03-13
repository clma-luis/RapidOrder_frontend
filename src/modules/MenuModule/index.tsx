import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";


const MenuModule = () => {
  return (
    <div className=" flex-col md:flex ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Menu</h2>
          <div className="flex items-center space-x-2">
            <Button>CREAR MENU</Button>
          </div>
        </div>

        <Tabs defaultValue="mainCourses" className="space-y-4 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <TabsList>
              <TabsTrigger value="mainCourses">Principales</TabsTrigger>
              <TabsTrigger value="drinks">Bebidas</TabsTrigger>
              <TabsTrigger value="desserts">Postres</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="mainCourses" className="space-y-4">
            <div className="max-w-screen-xl mx-auto my-auto">
              <h1>Platos Principales</h1>
            </div>
          </TabsContent>
          <TabsContent value="drinks" className="space-y-4">
            <div className="max-w-screen-xl mx-auto my-auto">
              <h1>Bebidas</h1>
            </div>
          </TabsContent>
          <TabsContent value="desserts" className="space-y-4">
            <div className="max-w-screen-xl mx-auto my-auto">
              <h1>Postres</h1>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default MenuModule