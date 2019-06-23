import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-ide';
  code:string = "";

  constructor(
    private _apiService: ApiService,)
  {}

  result;
  public run() {
    this.result = "";
    this._apiService.getSubmissionsToken(this.code.replace('"','\"'))
      .subscribe((data) => {
        let submissionsToken = data['token']
        console.log("token:  "+submissionsToken);
        this.getResult(submissionsToken);
      }, (error) => {
        console.log(error);
      });

  }

  private getResult(token){
    this._apiService.getResultBySubmissionsToken(token)
      .subscribe((data) => {
        console.log(data);
        let statusId = data['status']['id'];
        if (statusId == 1 || statusId == 2){
          this.getResult(token);
        }
        // console.log(this.code)
        this.result = data['stdout'];
      }, (error) => {
        console.log(error);
      });
  }

}
