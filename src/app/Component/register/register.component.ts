import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {

  }

  @ViewChild('fileInput') fileInput: any;
  registerUser: any;
  file: File | null = null;
  excelFileName: any;

  constructor(private uapservice: UapService, private fb: FormBuilder, private router: Router) {
    this.registerUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validating email format
      mobileNo: ['', [Validators.required]], 
      password: ['', [Validators.required]],
      userAddress: ['', Validators.required], 
      userName: ['', Validators.required], 
      bankId: ['', Validators.required], // Validating required bank ID
      designation: ['', Validators.required], // Validating required designation
      branch: ['', Validators.required], // Validating required branch
      ifscCode: ['', Validators.required], // Validating required IFSC code
      status: ['', Validators.required], // Validating required status
      excelUpload: [] // No validation for excelUpload field 
    })
  }

  savdata() {
    // this.registerUser.get("excelUpload").value
    let registretionData = this.registerUser.value;
    const formdata = new FormData();
    formdata.append("file",this.userFile);
    formdata.append("name", JSON.stringify(registretionData))
    console.log("Form data ", formdata)


    this.uapservice.PostFile(formdata).subscribe({
      next: (resp) => {

        console.log("Response" + resp)
      },
      error: (err) => {
        console.log(err)
      },
      complete:()=>{
        alert("DATA HASE BEEN SAVED");
        this.router.navigateByUrl('/dashboard')
      }
    })
  }
  userFile:any;

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      //this.excelFileName = this.file?.name;
      // this.registerUser.get("excelUpload").setValue(file);
    }
  }
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file drop event
  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      const file = event.dataTransfer.files[0];
      if (file) {
        this.excelFileName = file.name;
        this.registerUser.patchValue({
          excelUpload: file
        });
      }

    }
  }

}
