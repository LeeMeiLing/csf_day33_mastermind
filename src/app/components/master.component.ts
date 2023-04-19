import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{
  
  colours = ['R','B','G','Y','O','P']
  toGuess:string[] = []
  hide = true

  ngOnInit(): void {

    for(let i = 0; i < 4; i++){
      let size = this.colours.length
      this.toGuess.push(this.colours.splice(Math.floor(Math.random() * size),1)[0])
    }

    console.info('>>> toGuess: ', this.toGuess)
    
  }

  reveal(){
    this.hide = !this.hide
  }


}
