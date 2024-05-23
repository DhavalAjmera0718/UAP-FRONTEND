import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-registerfirst',
  templateUrl: './registerfirst.component.html',
  styleUrls: ['./registerfirst.component.css']
})
export class RegisterfirstComponent {

  registerFirstAdminForm: any;

  constructor(private formbuilder: FormBuilder, private uapservice: UapService, private router: Router) {
    this.registerFirstAdminForm = this.formbuilder.group({
      userEmail: ['', Validators.required],
      userPass: ['', Validators.required]
    })
  }

  mybutton() {
    console.log("hii");

    this.uapservice.PreRegister(this.registerFirstAdminForm.value).subscribe({
      next: (resp) => {
        this.registerFirstAdminForm = resp
      },
      error: (err) => { console.log(err) },
      complete: () => {
        alert("Save Successfully..");
        this.router.navigateByUrl('/login');
      }

    })

  }
}
