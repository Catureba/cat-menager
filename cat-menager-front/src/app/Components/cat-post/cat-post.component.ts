import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cat } from 'src/app/models/cat.model';
import { CatService } from 'src/app/service/cat.service';

@Component({
  selector: 'app-cat-post',
  templateUrl: './cat-post.component.html',
  styleUrls: ['./cat-post.component.css']
})

export class CatPostComponent implements OnInit{
  input_src_image: String = "https://media.tenor.com/N-fJ0Azh_ykAAAAC/cat-computer.gif"
  formCat!: FormGroup;

  

  constructor(
    public catService: CatService
  ) { }

  ngOnInit(): void {
    this.createForm(new Cat());
  }


  createForm(catForm: Cat){
    this.formCat = new FormGroup({
      name: new FormControl(catForm.name),
      age: new FormControl(catForm.age),
      color: new FormControl(catForm.color),
      breed: new FormControl(catForm.breed),
      image: new FormControl(catForm.image)
      
    })
  }


  cadastrarCat(){
    console.log(this.formCat.value);
    this.catService.postCat(this.formCat.value as Cat).subscribe();
    this.cadastroFeito()
    alert('O seu cadastro foi realizado com sucesso!\n' + 'Agora você poderá ver seu gato na página de listagem, aguarde e seu gato aparecerá')
  }
  cadastroFeito(){}
}