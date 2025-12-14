import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { AuthService } from "../../../core/services/auth.service";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  email = "";
  password = "";
  error = "";

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const hasEmailAndPassword = this.auth.login(this.email, this.password);
    if (!hasEmailAndPassword) {
      this.error = "Please enter email and password.";
      return;
    }

    this.error = "";
    this.router.navigateByUrl("/dashboard");
  }
}
