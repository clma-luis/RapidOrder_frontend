import { MainNav } from "@/modules/DashboardModule/components/main-nav";
import { Search } from "@/modules/DashboardModule/components/search";
import TeamSwitcher from "@/modules/DashboardModule/components/team-switcher";
import { UserNav } from "@/modules/DashboardModule/components/user-nav";

const Navbar = () => {
  return (
    <div className="border-b ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
