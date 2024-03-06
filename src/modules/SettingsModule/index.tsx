"use client";
import { useParams } from "next/navigation";
import SettingsLayout from "./Layout";
import SettingsAccountContainer from "./containers/Account";
import SettingsAppearanceContainer from "./containers/Appearance";
import SettingsDisplayContainer from "./containers/Display";
import SettingsNotificationsContainer from "./containers/Notifications";
import SettingsProfileContainer from "./containers/Profile";
import { settingsPathsRoutes } from "./shared/constants/pathsRoutes";

const { ACCOUNT_ROUTE, APPEREANCE_ROUTE, NOTIFICATIONS_ROUTE, PROFILE_ROUTE, DISPLAY_ROUTE } = settingsPathsRoutes;

const componentToRender: Record<string, (props: any) => JSX.Element> = {
  [PROFILE_ROUTE]: SettingsProfileContainer,
  [ACCOUNT_ROUTE]: SettingsAccountContainer,
  [APPEREANCE_ROUTE]: SettingsAppearanceContainer,
  [NOTIFICATIONS_ROUTE]: SettingsNotificationsContainer,
  [DISPLAY_ROUTE]: SettingsDisplayContainer,
};

const SettingsModule = () => {
  const { section } = useParams();

  const Component = componentToRender[section as string];

  if (!Component) return <></>;

  return (
    <SettingsLayout>
      <Component />
    </SettingsLayout>
  );
};

export default SettingsModule;
