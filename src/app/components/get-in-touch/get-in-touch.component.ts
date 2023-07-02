import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {
  form!: FormGroup;
  secretKey: string = "xdornjdw";

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      websiteLink: [''],
      hireVishal: [false],
      message: ['']
    });
  }

  // Helper method to get form controls easily in the template
  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form);
    this.sendEmail(this.form.value.name, this.form.value.email, this.form.value.websiteLink, this.form.value.hireVishal, this.form.value.message);


    // Handle form submission here
    // Access form values using this.form.value
  }
  sendEmail(name: String, email: String, websiteLink: String,hireVishal:boolean,message:any) {
    
    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/" + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}&websiteLink=${websiteLink}&hireVishal=${hireVishal}`;
    let errorMessage: string = "";

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: data => {
            console.log("email sent" + JSON.stringify(data));
        },
        error: error => {
            errorMessage = error.message;
            console.log('error!', errorMessage);
        }
    })

    //DEBUG
    // console.log("url is ", url);
    // console.log("data", name, email, message);
  }
}
