import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-uapcerty',
  templateUrl: './uapcerty.component.html',
  styleUrls: ['./uapcerty.component.css']
})
export class UAPCertyComponent {


approveById_Data:any;
id:any;
  constructor(private service:UapService, private active:ActivatedRoute)
  {
    this.id  = this.active.snapshot.paramMap.get('id');
    this.getAprovedData(this.id);
  }
  userName:any;
  currentDate = new Date();
  
  getAprovedData(id:any){
    
    this.service.approveData(id).subscribe({
      next: (resp)=>{
        this.approveById_Data = resp;
        alert( "Id number "+ id + " has Been Approved");
        // window.location.reload();
        console.log(this.approveById_Data);
      }
    })
  }
  
}
