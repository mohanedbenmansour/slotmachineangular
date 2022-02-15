import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FacebookLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import html2canvas from 'html2canvas';
import { FacebookService } from './facebook.service';
import { symbols } from './symbols';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  isSpinning = false;


  stopSpin: any;; //variable to clear the setinterval(stop) method
  //@ts-ignore

  currentSym1: symbols //Symbol1 in the reel
  //@ts-ignore

  currentSym2: symbols//Symbol2 in the reel
  //@ts-ignore
  currentSym3: symbols //Symbol3 in the reel

  //creating symbol objects
  symbol1: symbols = {
    value: 7,
    symbolLink: "/assets/redseven.png"
  };
  symbol2: symbols = {
    value: 2,
    symbolLink: "/assets/cherry.png"
  };
  symbol3: symbols = {
    value: 3,
    symbolLink: "/assets/lemon.png"
  };
  symbol4: symbols = {
    value: 4,
    symbolLink: "/assets/plum.png"
  };
  symbol5: symbols = {
    value: 5,
    symbolLink: "/assets/watermelon.png"
  };
  symbol6: symbols = {
    value: 6,
    symbolLink: "/assets/bell.png"
  };
  FB: any

  symbolReel: symbols[] = [this.symbol1, this.symbol2, this.symbol3, this.symbol4, this.symbol5, this.symbol6];

  constructor(

  ) { }

  ngOnInit() {

    //console.log("machine");  
    //initializing the current symbols
    this.currentSym1 = this.symbolReel[2];
    this.currentSym2 = this.symbolReel[4];
    this.currentSym3 = this.symbolReel[5];
    console.log("Machine ran");



  }


  stopSpinning() {
    this.isSpinning = false

    clearInterval(this.stopSpin);
    this.winOrLose();

    //this.id = this.route.snapshot.params['id'];

  }

  spinning() {
    this.isSpinning = true

    //spinning
    this.stopSpin = setInterval(() => {
      this.spin();
    }, 100);

  }

  spin() {

    let luckyNumber = Math.floor(Math.random() * 3);
    if (luckyNumber == 1) {
      let randomNum1 = Math.floor(Math.random() * (this.symbolReel.length - 1));
      this.currentSym1 = this.symbolReel[randomNum1];
      this.currentSym2 = this.symbolReel[randomNum1];
      this.currentSym3 = this.symbolReel[randomNum1];
    } else {
      let randomNum1 = Math.floor(Math.random() * (this.symbolReel.length - 1));
      this.currentSym1 = this.symbolReel[randomNum1];
      let randomNum2 = Math.floor(Math.random() * (this.symbolReel.length - 1));
      this.currentSym2 = this.symbolReel[randomNum2];
      let randomNum3 = Math.floor(Math.random() * (this.symbolReel.length - 1));
      while (randomNum3 == randomNum1) {
        randomNum3 = Math.floor(Math.random() * (this.symbolReel.length - 1));
      }

      this.currentSym3 = this.symbolReel[randomNum3];

    }
    /*
    //Generating random numbers to get random element from the reel array
    let randomNum1 = Math.floor(Math.random() * (this.symbolReel.length - 1));
    let randomNum2 = Math.floor(Math.random() * (this.symbolReel.length - 1));
    let randomNum3 = Math.floor(Math.random() * (this.symbolReel.length - 1));

    //assigning the element to a variable
    this.currentSym1 = this.symbolReel[randomNum1];
    this.currentSym2 = this.symbolReel[randomNum2];
    this.currentSym3 = this.symbolReel[randomNum3];
*/
  }




  winOrLose() {


    if (this.currentSym1 == this.currentSym2 && this.currentSym2 == this.currentSym3) {

      alert("You WON!");
    } else {

      alert("You have Lost!");
    }

  }





}
