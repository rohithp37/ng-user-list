import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  usersList: any[] = [];

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(
    private httpService: HttpClient
  ){}

  ngOnInit(): void{
    this.getUsersData();
  }

  getUsersData(){
    const url = 'https://randomuser.me/api?results=50';  
    this.httpService.get(url).toPromise().then(res => {
      this.usersList = res['results'];
      if(this.usersList.length){
        this.usersList.forEach(item => {
          item.id.value = !item.id.value ? item.login.uuid : item.id.value;
        });
      }
    });
  }
  
}
