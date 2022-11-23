import { Component } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';
import { CatService } from 'src/app/service/cat.service';
@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent {
  cat!: any;
  cats!: any;
  
  constructor(
    public catService: CatService
  ){}

  getCats(){
    this.catService.listAll().subscribe(data =>{
      this.cats = data!;
      console.table(this.cats)
    })
  }



  ngOnInit(): void {
    this.getCats();
  }
  
}
