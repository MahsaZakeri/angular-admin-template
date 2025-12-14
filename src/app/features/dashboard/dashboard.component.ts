import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  template: `
    <mat-toolbar color="primary"> Dashboard </mat-toolbar>

    <div style="padding: 1.5rem;">
      <h2>Welcome</h2>
      <p>This is the dashboard home.</p>
    </div>
  `,
})
export class DashboardComponent {}
