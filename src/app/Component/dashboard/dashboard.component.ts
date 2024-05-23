import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  allPendingData:any;
  allApproveData:any;

  constructor(private service:UapService, private fb:FormBuilder){

  }

  getAprovedData(id:any){
    this.service.approveData(id).subscribe({


      next(value) {
        console.log(value);

        alert(id + " will be Approved..");
      },
      error(err) {
        console.log(err);
      },
    })
  }


  getAllApprovedata(){
    this.service.getAllAproveData().subscribe((resp)=>{
      this.allApproveData = resp;
      alert("All approve Data... ");
      console.log(resp);
    })
  }

  getAllPendingData(){
    this.service.getAllPendingData().subscribe((resp)=>{
      this.allPendingData = resp;
      console.log(this.allPendingData);
      alert("All pending Data ...");
      
    })
  }



  
  getRejectData(id:any){
    this.service.rejectDadta(id).subscribe({


      next(value) {
        alert(id + " will be rejected!..");
        console.log(value);
      },
      error(err) {
        console.log(err);
        
      },
    })
  }

}