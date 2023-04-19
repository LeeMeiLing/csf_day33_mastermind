import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MindComponent } from './components/mind.component';
import { Guess } from './models';
import { MasterComponent } from './components/master.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(MasterComponent)
  masterComp!:MasterComponent

  @ViewChild(MindComponent)
  mindComp!:MindComponent

  pastGuess:Guess[] = []
  position = ['first','second','third','fourth']

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.mindComp.onSubmitGuess.subscribe(g => this.checkGuess(g))
  }

  checkGuess(g: Guess): void {

    const answer = this.masterComp.toGuess
    let clue:string[]=[]

    for(let i =0; i<4; i++){
      if(g[this.position[i]] == answer[i]){
        clue.push('B')
      }else if(answer.includes(g[this.position[i]])){
        clue.push('W')
      }
    }

    g.clue = clue.toString()
    this.pastGuess.unshift(g)
    console.info('>>> in check: ', g)

    // if(g['first'] == answer[0]){
    //   clue.push('B')
    // }
    // else if(answer.includes(g.first)){
    //   clue.push('W')
    // }

    // if(g.second == answer[1]){
    //   clue.push('B')
    // }
    // else if(answer.includes(g.second)){
    //   clue.push('W')
    // }

    // if(g.third == answer[2]){
    //   clue.push('B')
    // }
    // else if(answer.includes(g.third)){
    //   clue.push('W')
    // }

    // if(g.fourth == answer[3]){
    //   clue.push('B')
    // }
    // else if(answer.includes(g.fourth)){
    //   clue.push('W')
    // }

  }
  

}
