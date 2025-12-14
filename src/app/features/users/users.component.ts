import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "app-users",
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <div style="padding: 0 1rem;">
        <h2>Users</h2>
        <p>Users feature placeholder. Next: Material table + pagination.</p>
      </div>
    </mat-card>
  `,
})
export class UsersComponent {}
