import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-uapcerty',
  templateUrl: './uapcerty.component.html',
  styleUrls: ['./uapcerty.component.css']
})
export class UAPCertyComponent {



  userName: any;

  currentDate = new Date();

  certificateNumber: any;

  approveById_Data: any;

  id: any;
  constructor(private service: UapService, private active: ActivatedRoute, private translate: TranslateService) {
    this.id = this.active.snapshot.paramMap.get('id');

    this.translate.setDefaultLang('en');

    this.getAprovedData(this.id);

    this.generateCertifyNum();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }


  generateCertifyNum() {
    const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.certificateNumber = random;


  }

  getAprovedData(id: any) {

    this.service.approveData(id).subscribe({
      next: (resp) => {
        this.approveById_Data = resp;
       // alert("Id number " + id + " has Been Approved");
        // window.location.reload();
        console.log(this.approveById_Data);
      }
    })
  }

}
