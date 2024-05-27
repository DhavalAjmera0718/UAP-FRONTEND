import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UapService } from 'src/app/Service/uap.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  allPendingData:any;
  allApproveData:any;
  oneApprovedData : any;
  constructor(private service:UapService, private fb:FormBuilder){

  }
  // next(value) {
  //   console.log(value);

  //   alert(id + " will be Approved..");
  // },
  // error(err) {
  //   console.log(err);
  // },

  getAprovedData(id:any){
    this.service.approveData(id).subscribe((resp)=>{
      this.oneApprovedData = resp;
      alert(id +"id will Approved");
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
  generatePdf(){
    const pdfElement:any = document.getElementById('pdfContent');
 
    html2canvas(pdfElement, {scale:2}).then((canva)=>{
     const pdf  = new jsPDF('p', 'mm', 'a4');
 
     const imgWidth  = 190;
     const imgData = canva.toDataURL('image/png');
     const imgHeight  = (canva.height*imgWidth) / canva.width;
 
     // Add image to PDF
     pdf.addImage(imgData, 'PNG', 10, 10, imgWidth,imgHeight);
     pdf.save("myPdf.pdf");
    })
   }



}