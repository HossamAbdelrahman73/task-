import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from './core/services/contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private _FormBuilder: FormBuilder,
    private _ContactService: ContactService
  ) {}

  contactForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    name: ['', Validators.required],
  });

  sendDataContact() {
    console.log(this.contactForm.value);
    this._ContactService.contactUs(this.contactForm.value).subscribe({
      next: (res) => {
        console.log(res);
        // this.contactForm.setValue({});
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
