import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;


  constructor(public http: HttpClient){}
  ngOnInit() {
    this.getUsers();
}
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(re =>{
      this.users = re;
    }, error => {
      console.log(error);
    })
  }
}

