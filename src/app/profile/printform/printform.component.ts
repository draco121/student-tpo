import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/model.interface';
// import { jsPDF }from 'jspdf';
// import html2canvas from 'html2canvas';

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

  // print(){
  //     let data = document.getElementById('form')
  //     let pdf = new jsPDF('p','mm','a4');
  //     var width = pdf.internal.pageSize.getWidth();
  //     var height = pdf.internal.pageSize.getHeight();
  //     html2canvas(data,{
  //       useCORS:true
  //     }).then(canvas => {
  //       // Few necessary setting options

  //       const contentDataURL = canvas.toDataURL('image/png')
  //       let pdf =  new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  //       pdf.addImage(contentDataURL, 'PNG', 0, 0,width,height)
  //       pdf.save('new-file.pdf'); // Generated PDF
  //       });
  // }

}
