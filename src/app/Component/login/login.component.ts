import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginAdmin: any;

  constructor(private formbuilder: FormBuilder, private uapservice: UapService, private router: Router) {
    this.loginAdmin = this.formbuilder.group({
      userEmail: ['', Validators.required],
      userPass: ['', Validators.required]
    })
  }

  mybutton() {
    this.uapservice.PreRegister(this.loginAdmin.value).subscribe({
      next: (resp) => {
        this.loginAdmin = resp
      },
      error: (err) => { console.log(err) },
      complete: () => {
        alert("Save Successfully..");
        this.router.navigateByUrl('');
      }

    })

  }

}
