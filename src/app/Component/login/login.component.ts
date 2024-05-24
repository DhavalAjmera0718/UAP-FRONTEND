import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginAdmin: any;

  constructor(private formbuilder: FormBuilder, private uapservice: UapService, private router: Router,private cookie :CookieService) {
    this.loginAdmin = this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  mybutton() {
    this.uapservice.loginAdmin(this.loginAdmin.value).subscribe({
      next: (resp:any ) => {
       this.cookie.set('Token',resp.jwtToken)
      },
      error: (err: any) => { console.log(err) },
      complete: () => {
        alert("login Successfully..");
        this.router.navigateByUrl('/dashborad');
      }

    })

  }

}
