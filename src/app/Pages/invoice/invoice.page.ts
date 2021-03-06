import { Component, OnInit } from '@angular/core';
import {File} from '@ionic-native/file/ngx';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Cordova } from '@ionic-native/core';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  pdfObj =null;

  constructor(public file :File,public toastCtrl:ToastController, public fileOpener :FileOpener,private plt: Platform) { }

  ngOnInit() {
  }
 
  pdfmaker()
  {
    var xx=[{text:'Description of Good'},{text:'HSN/SAC'},{text:'MRP/Marginal'},{text:'Quantity'},{text:'Rate'},{text:'Per'},{text:'Disc%'},{text:'Amount'}];
    
    
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var data = {
      content: [
      
        {
          style:'mynew',
          table: {
              widths: [200,100, 200,],
              heights:[20,20,20],
            body: [
                         
              [{text:'Mpos route  sale\n',rowSpan:3},'Inv No .\n 1908','Date\n12/1/2020'],
              ['',{text:'',colSpan:2,rowSpan:3},''],
              ['','',''],
              [{text:'Buyer, \nParty 2\nAd rs 1,\n  Ad rs 2,\n  Ad rss 3\n'},{text:'',colSpan:2},''],
              
              
            ]
          },
          layout:''
          
        },
        {    
              table: {
              widths:[129,'*','*','*','*','*','*','*'],
              heights:[20,20,20],
            body: [xx,
                    [{text:'Item1',border:[true,false,true,false]}
                    ,{text:1001,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:1,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:'Nos',border:[true,false,true,false]}
                    ,{text:100,border:[true,false,true,false]}
                    ,{text:0,border:[true,false,true,false]}],
                    
                    
                    [{text:'Item1',border:[true,false,true,false]}
                    ,{text:1002,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:1,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}
                    ,{text:'Nos',border:[true,false,true,false]}
                    ,{text:0,border:[true,false,true,false]}
                    ,{text:50,border:[true,false,true,false]}],
                    
                    
                  [{text:'SubTotal',alignment:'right',border:[true,true,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:'',border:[true,false,true,false]},
                  {text:50,border:[true,true,true,false]}],
                  
                  
                    [{text:'CGst',alignment:'right',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},{text:50*0.09,border:[true,false,true,false]}]
                    
                    ,
                    [{text:'SGst',alignment:'right',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:'',border:[true,false,true,false]},
                    {text:50*0.09,border:[true,false,true,false]}],
                    
                    ['Total','','','','','','',59]
     
                  
               
                
            ]
            }
        },
        {
           
            table:{
                widths:[519],
                 body:[[{text:'Amount Chargeable (in words)',style:'header',border:[true,false,true,false]}],
                 [{text:'Indian Rupees fifty nine Only',style:'subHeader',border:[true,false,true,true]}],]
            }
        },
        {
            
            table:{
                widths:[60,90,70,'*',70,'*',90],
                body:[
                    [{text:'HSN/SAC',rowSpan:2},{text:'Taxable Value',rowSpan:2},{text:'Central Tax',colSpan:2},{text:'HSN'},{text:'State Tax',colSpan:2},{text:'HSN'},{text:'Total Tax Amount',rowSpan:2}],
                    [{text:'HSN/SAC'},{text:'HSN'},{text:'Rate'},{text:'Amount'},{text:'Rate'},{text:'Amount'},{text:'HSN'}],
                                    [{text:1001,alignment:'right'},{text:50},{text:'9%'},{text:4.5},{text:'9%'},{text:4.5},{text:9}],
                                    [{text:1002,alignment:'right'},{text:0},{text:'9%'},{text:0},{text:'9%'},{text:0},{text:0}],
                                    [{text:'Total',bold:true,alignment:'right'},{text:50},{text:''},{text:4.5},{text:''},{text:4.5},{text:9}]
    
                    
                ]
            }
        },
        {
             table:{
                widths:[150,360],
                heights:100,
         
               // margin:[100,0,0,0],
                 body:[[{text:'Total Amount In Words : ',
                 border:[true,false,false,false],style:'marg'},
                 
                 {text:'Indian Rupees nine Only',
                     border:[false,false,true,false]
                 }]]
             },
             
        },
          {
           
            table:{
                widths:[120,390],
                 body:[
                     [{text:"Company's PAN :",border:[true,false,false,false],style:'marg'},
                     {text:"123456",border:[false,false,true,false]}],
                     ]
            }
        },
        {
            table:{
                widths:[250,260],
                heights:100,
                body:[[{text:'Declaration :\nWe declare that this invoice shows the actual Price of the goods described and that all particulars are true and  correct.',
                border:[true,false,false,false],style:'decler'},{text:'for impose route sale',bold:true,border:[true,true,true,false]}]
               
                ]
                
            }
        },
        {
            table:{
                 widths:[250,260],
                body:[
                    [{text:'',border:[true,false,false,true]},{text:'Authorised Signatory',border:[true,false,true,true],alignment:'center'}]
                    ]
            }
        },
          {text: 'This is a Computer Generated Invoice', fontSize: 12, bold: true,alignment:'center',margin:[0,10,0,0]}
        
      
        
    ],
      styles: {
          decler:{
              margin:[20,35,0,0]
          
          }
          ,
           marg:{
              margin:[20,0,0,0]
          
          },
            header:{
             bold: false,
          fontSize: 16,
          color: 'black'
          
           },
        tableExample: {
          margin: [0, 5, 0, 15]
        },
        subHeader: {
          bold: true,
          fontSize: 16,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    
    }
  this.pdfObj= pdfmake.createPdf(data);

  if(this.plt.is('cordova'))
  {
  this.pdfObj.getBuffer((buffer) => {
    var utf8 = new Uint8Array(buffer);
    var binaryArray = utf8.buffer;
    var blob = new Blob([binaryArray], { type: 'application/pdf' });
     
    // Save the PDF to the data Directory of our App
    this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true });
    
  });
}else{ 
   this.pdfObj.open();
    }

 
   
  }
  
  pdfopen()
  {
	  this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
  }
}
