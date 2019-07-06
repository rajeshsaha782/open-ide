import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/python/python'
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-ide';
  code:string = "";
  error;
  result;
  options = {
    lineNumbers: true,
    theme: 'twilight',
    // lineWrapping : true,
    mode: { name: 'python' },
  };
  constructor(
    private _apiService: ApiService,)
  {}

  public run() {
    this.result = "";
    this.error = "";
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
        this.error = data['stderr']
      }, (error) => {
        console.log(error);
      });
  }

  changeCodemirrorMode(mode_name){
    this.options = {
      lineNumbers: true,
      theme: 'twilight',
      // lineWrapping : true,
      mode: { name: mode_name },
    };
  }

}
