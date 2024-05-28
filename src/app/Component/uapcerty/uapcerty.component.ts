import { Component , ViewChild , ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UapService } from 'src/app/Service/uap.service';

@Component({
  selector: 'app-uapcerty',
  templateUrl: './uapcerty.component.html',
  styleUrls: ['./uapcerty.component.css']
})
export class UAPCertyComponent {
  @ViewChild ('content', { static: false })content!: ElementRef; 

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
 /******************************************************************************************************************* */
 downloadHtml() {
  const content = this.content.nativeElement.outerHTML; // Include outerHTML to capture the element with its styles
  const styles = Array.from(document.querySelectorAll('style'))
                     .map(style => style.innerHTML)
                     .join('\n');

  const fullHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MSME / Udyam Registration</title>
      <style>${styles}</style> <!-- Include all styles -->
  </head>
  <body>
    ${content}
  </body>
  </html>`;

  const blob = new Blob([fullHtml], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download ='uapcerty.component.html';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}


}
