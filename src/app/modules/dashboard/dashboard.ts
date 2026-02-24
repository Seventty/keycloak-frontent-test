import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Navbar } from '../../shared/navbar/navbar';
import { AuthService } from '../../core/services/authService';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, FormsModule, Navbar],
  templateUrl: 'dashboard.html',
  styleUrl: './dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private auth = inject(AuthService);

  user = this.auth.user;
  logout() {
    this.auth.logout();
  }
}
