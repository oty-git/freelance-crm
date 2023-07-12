import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";
import Account from "./components/account";
import Main from "./components/main";
import NotFound from "./components/notFound";
import Settings from "./components/account/Settings";
import LanguagesSettings from "./components/settings/languages";
import ServicesSettings from "./components/settings/services";
import PermissionsSettings from "./components/settings/permissions";
import RolesSettings from "./components/settings/roles";
import AppLanguagesSettings from "./components/settings/app_languages";

export default [
    {
        path: "/",
        component: Main,
        private:true,
        exact: true,
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true,
    },
    {
        path: "/registration/:type",
        component: RegistrationPage,
        exact: true,
    },
    {
        path: "/account/:type",
        component: Account,
        private:true,
        exact: true,
    },
    {
        path: ["/settings", "/account/:type/:id"],
        component: Settings,
        private: true,
        exact: true,
    },
    {
        path: ["/settings/languages"],
        component: LanguagesSettings,
        private: true,
        exact: true,
    },
    {
        path: ["/settings/app_languages"],
        component: AppLanguagesSettings,
        private: true,
        exact: true,
    },
    {
        path: ["/settings/services"],
        component: ServicesSettings,
        private: true,
        exact: true,
    },
    {
        path: ["/settings/permissions"],
        component: PermissionsSettings,
        private: true,
        exact: true,
    },
    {
        path: ["/settings/roles"],
        component: RolesSettings,
        private: true,
        exact: true,
    },
    {
        path: "*",
        component: NotFound,
    },

];
