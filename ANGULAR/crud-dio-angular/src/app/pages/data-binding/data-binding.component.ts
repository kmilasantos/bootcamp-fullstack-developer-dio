import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Camila';
  imgUrl = 'https://i.pinimg.com/236x/b1/c2/0f/b1c20f56982da0c2117795a91dc437a1.jpg';
  imgDesc = 'Imagem para fins de teste';
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(value: any){
    this.text="Mila";
    console.log('Clicou aqui', value)
  }
}
