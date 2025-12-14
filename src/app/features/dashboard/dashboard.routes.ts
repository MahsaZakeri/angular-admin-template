import { Routes } from "@angular/router";
import { DashboardLayoutComponent } from "./layout/dashboard-layout.component";
import { DashboardComponent } from "./dashboard.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      { path: "", component: DashboardComponent },

      {
        path: "users",
        loadChildren: () => import("../users/users.routes").then((m) => m.USERS_ROUTES),
      },
      {
        path: "settings",
        loadChildren: () => import("../settings/settings.routes").then((m) => m.SETTINGS_ROUTES),
      },
    ],
  },
];
