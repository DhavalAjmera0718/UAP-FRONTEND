import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  @ViewChild('content', { static: false })
  content!: ElementRef;

  constructor()
   { }
  ngOnInit(): void {
   
  }

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
    a.download = 'home.component.html';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }





}
