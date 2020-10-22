import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model.interface';
import { jsPDF }from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-printform',
  templateUrl: './printform.component.html',
  styleUrls: ['./printform.component.scss']
})
export class PrintformComponent implements OnInit {

  data:student;
  constructor() {
    this.data = <student>JSON.parse(window.sessionStorage.getItem('token'))
  }

  ngOnInit(): void {
  }

  print(){
      let data = document.getElementById('form')
      html2canvas(data).then(canvas => {
        // Few necessary setting options
        var imgWidth = 208;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png')
        let pdf =  new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
        var position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdf.save('new-file.pdf'); // Generated PDF
        });
  }

}
