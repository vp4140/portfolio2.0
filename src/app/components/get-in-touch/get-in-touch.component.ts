import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      websiteLink: [''],
      hireVishal: [false],
      message: ['', Validators.required]
    });
  }

  // Helper method to get form controls easily in the template
  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    // Handle form submission here
    // Access form values using this.form.value
  }
}
