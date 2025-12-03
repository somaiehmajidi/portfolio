import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly contactService = inject(ContactService)
  private readonly fb = inject(FormBuilder)
  readonly isLoading = signal(false)
  readonly error = signal<boolean>(false)
  readonly success = signal<boolean>(false)

  readonly form = this.fb.group({
    name: [{value: '', disabled: this.isLoading()}, [ Validators.required, Validators.maxLength(50)]],
    email: [{value: '', disabled: this.isLoading()}, [ Validators.required, Validators.email]],
    message: [{value: '', disabled: this.isLoading()}, [ Validators.required, Validators.maxLength(200)]]
  })

  readonly formValue = toSignal(this.form.valueChanges, {initialValue: this.form.value})
  readonly formStatus = toSignal(this.form.statusChanges, {initialValue: this.form.status})
  readonly isFormValid = computed(() => this.formStatus() === 'VALID')

  async onSubmit() {
    if (!this.isFormValid()) return

    this.isLoading.set(true)
    
    const data = this.form.getRawValue()
    this.contactService.postContactForm(data)
    .then()
    .finally(() => {
      this.success.set(true)
      setTimeout(() => { this.success.set(false) }, 10000 )
      this.isLoading.set(false)
      this.form.reset()
    })
    
    // next: () => {
    //   this.success.set(true)
    //   setTimeout(() => { this.success.set(false) }, 1000 )
    //   this.isLoading.set(false)
    //   this.form.reset()
    // },
    // error: () => {
    //   debugger
    //   this.error.set(true)
    //   setTimeout(() => { this.error.set(false) }, 1000 )
    //   this.isLoading.set(false)
    // }
  }
}
