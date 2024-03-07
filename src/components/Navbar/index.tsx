import { MainNav } from "@/components/Navbar/components/MainNav";
import { UserNav } from "@/components/UserNav";
import TeamSwitcher from "@/modules/DashboardModule/components/team-switcher";

const Navbar = () => {
  return (
    <div className="border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
