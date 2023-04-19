import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guess } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mind',
  templateUrl: './mind.component.html',
  styleUrls: ['./mind.component.css']
})
export class MindComponent implements OnInit{

  form!:FormGroup

  @Output()
  onSubmitGuess = new Subject<Guess>

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  private createForm():FormGroup{
    return this.fb.group({
      first:this.fb.control<string>('',[Validators.required]),
      second:this.fb.control<string>('',[Validators.required]),
      third:this.fb.control<string>('',[Validators.required]),
      fourth:this.fb.control<string>('',[Validators.required])
    })
  }

  processForm(){

    const g:Guess = this.form.value
    console.info('>>> player guess: ', g)
    this.onSubmitGuess.next(g)

  }


}
