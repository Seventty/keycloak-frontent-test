import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserProfile } from '../../core/services/authService';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div>
        <h1 class="text-xl font-semibold text-slate-800">EnterpriseApp</h1>
        @if (user) {
          <p class="text-sm text-slate-500">{{ user.firstName }} {{ user.lastName }}</p>
        }
      </div>

      <button
        (click)="logout()"
        class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
      >
        Logout
      </button>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  @Input() user!: UserProfile | null;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
