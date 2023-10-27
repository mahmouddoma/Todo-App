import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'todoApp';

  constructor(private service: SharedService){}

  notes:any = [];

  refreshNotes(){
    this.service.getNotes().subscribe((res)=>{
      this.notes=res;
    })
  }

  ngOnInit(){
    this.refreshNotes();
  }

  addNotes(newNotes: string){
    this.service.addNote(newNotes).then((res)=>{
      this.refreshNotes();
    })
  }

  deleteNotes(id: string){
    this.service.deleteNote(id).then((res)=>{
      this.refreshNotes();
    })
  }

}
