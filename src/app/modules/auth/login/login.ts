import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/authService';

@Component({
  selector: 'app-login',
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: 'login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);
  error = signal<string | null>(null);

  form = this.fb.group({
    user: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]{3,}$')]],
    password: ['', Validators.required],
  });

  submit() {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(null);

    this.auth.login(this.form.value as any).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.error.set('Credenciales inválidas');
        this.loading.set(false);
      },
    });
  }
}
