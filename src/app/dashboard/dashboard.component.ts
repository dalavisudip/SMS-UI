import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddEditProfileComponent } from '../add-edit-profile/add-edit-profile.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public WelcomeTitle = "Welcome To Application"
  showloader : boolean = false;
  Data : any;
  public ascNumberSort = true;
  users$: Object;
   

  constructor(
    public modal: NgbModal,
    private data: DataService
  ) { }

  ngOnInit() {
    // this.Data = [
    //   { "id": 1, "city": "Neftegorsk", "start_date": "4/13/2013", "end_date": "5/18/2013", "price": "55.82", "status": "Seldom", "color": "#fd4e19" },
    //   { "id": 2, "city": "Lancai", "start_date": "5/19/2012", "end_date": "11/29/2014", "price": "22.49", "status": "Yearly", "color": "#ff5055" },
    //   { "id": 3, "city": "Hekou", "start_date": "8/28/2011", "end_date": "4/7/2014", "price": "9.48", "status": "Often", "color": "#903761" },
    //   { "id": 4, "city": "Ballymahon", "start_date": "8/19/2013", "end_date": "8/3/2015", "price": "47.53", "status": "Often", "color": "#cd387d" },
    //   { "id": 5, "city": "Wesoła", "start_date": "3/7/2015", "end_date": "4/3/2014", "price": "46.66", "status": "Never", "color": "#e6eeb9" },
    //   { "id": 6, "city": "New Sibonga", "start_date": "6/26/2011", "end_date": "1/18/2015", "price": "66.36", "status": "Often", "color": "#bcb97e" },
    //   { "id": 7, "city": "Novoanninskiy", "start_date": "5/22/2013", "end_date": "8/2/2013", "price": "83.96", "status": "Once", "color": "#335d34" },
    //   { "id": 8, "city": "Potrerillos", "start_date": "11/30/2012", "end_date": "7/13/2013", "price": "3.19", "status": "Weekly", "color": "#03c2cd" },
    //   { "id": 9, "city": "Sobienie Jeziory", "start_date": "11/11/2011", "end_date": "1/21/2014", "price": "96.92", "status": "Never", "color": "#0fe37d" },
    //   { "id": 10, "city": "Limoeiro do Ajuru", "start_date": "3/22/2015", "end_date": "5/13/2013", "price": "13.53", "status": "Once", "color": "#676c7c" }
    // ];


    this.getAllData();
  } 

  getAllData() { debugger;
    this.showloader = true
    this.data.getUsers().subscribe((res:any)=>{
      if(res){
        this.Data = res;
        this.showloader = false
      }
    })
  }


  AddData(data){
    let InputData  = data
  
    let options: NgbModalOptions = { windowClass: 'dark-modal', centered: true, size: "lg", backdrop:'static'  };
    let modalref = this.modal.open(AddEditProfileComponent, options);
    modalref.componentInstance.input = InputData;
    modalref.result.then(result => {
 
    }, reason => {
      console.log(`Dismissed reason: ${reason}`);
    });
  }

  sortNumberColumn(item) {
    this.ascNumberSort = !this.ascNumberSort;
    if (this.ascNumberSort) {
      if (item == 'id') {
        this.Data.sort((a, b) => a.id - b.id);
      }
      else if (item == 'price') {
        this.Data.sort((a, b) => a.price - b.price);
      }

    } else {
      if (item == 'id') {
        this.Data.sort((a, b) => b.id - a.id);
      }
      else if (item == 'price') {
        this.Data.sort((a, b) => b.price - a.price);
      }


    }
  }

}
