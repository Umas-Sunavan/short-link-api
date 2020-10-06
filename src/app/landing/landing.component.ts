import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private httpService: HttpServiceService,
    private snackBar: MatSnackBar
  ) { }

  hasResult = false
  resultText
  inputText = 'https://angular.io/tutorial'

  buttonClicked = event => {
    this.httpService.postLink(this.inputText).subscribe(
      (next) => {
        this.onGetResultSuccess(next.data.picseeUrl)
      },
      (error) => { this.onGetResultFailed(error) }
    )
  }

  onInputChanged = event => {
    this.inputText = event.target.value
  }

  ngOnInit() {

  }

  onGetResultSuccess = (result: string) => {
    this.resultText = result
    this.hasResult = true
  }

  onGetResultFailed = (result: string) => {
    this.snackBar.open('Failed', undefined, {
      duration: 5000,
    });
    console.log(result);

  }

  clickCopy = () => {
    this.snackBar.open('Link Copied', undefined, {
      duration: 5000,
    });
  }

}
