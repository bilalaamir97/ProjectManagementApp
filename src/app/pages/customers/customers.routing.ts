import { Routes } from "@angular/router";

import { CustomersComponent } from "./customers.component";

export const customersRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: CustomersComponent
      }
    ]
  }
];
