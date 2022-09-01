import { ThisReceiver } from '@angular/compiler';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-ajout-prestation',
  templateUrl: './ajout-prestation.component.html',
  styleUrls: ['./ajout-prestation.component.css'],
  encapsulation:ViewEncapsulation.None,
})

export class AjoutPrestationComponent implements OnInit {
  affichenom!: string;
  affichemail!: string;
  afficheservice!: string;
  image!: HTMLInputElement;
  htmlToAdd!: string;
  getValue(nom:string,mail:string,service:string) {
    this.affichenom=nom;
    this.affichemail=mail;
    this.afficheservice=service;
    this.htmlToAdd = '    <div id="creationprestation"><h3 class="my-4">Prévisualisation</h3><li class="cards_item"><div class="card"><div class="card_image"></div><div class="card_content"><h2 class="card_title">Prestation '+ this.affichenom +'</h2><p>'+this.affichemail+'</p><p class="card_text">'+this.afficheservice+'</p><p class="card_note"></p></div></div></li></div>';
  }

  constructor() { }

  ngOnInit(): void {

  }



}
