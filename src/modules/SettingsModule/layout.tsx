import { Separator } from "@/components/ui/Separator";
import { SidebarNav } from "./components/SidebarNav";
import { settingsPathsRoutes } from "./shared/constants/pathsRoutes";

const { ACCOUNT_ROUTE, APPEREANCE_ROUTE, NOTIFICATIONS_ROUTE, PROFILE_ROUTE, DISPLAY_ROUTE } = settingsPathsRoutes;

/* export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
} */

const sidebarNavItems = [
  {
    title: "Perfil",
    href: `/settings/${PROFILE_ROUTE}`,
  },
  {
    title: "Cuenta",
    href: `/settings/${ACCOUNT_ROUTE}`,
  },
  {
    title: "Apariencia",
    href: `/settings/${APPEREANCE_ROUTE}`,
  },
  {
    title: "Notificaciones",
    href: `/settings/${NOTIFICATIONS_ROUTE}`,
  },
  {
    title: "Display",
    href: `/settings/${DISPLAY_ROUTE}`,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block max-w-screen-xl mx-auto rounded-lg border my-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
