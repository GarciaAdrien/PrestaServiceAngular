import { ThisReceiver } from '@angular/compiler';
import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-prestation',
  templateUrl: './ajout-prestation.component.html',
  styleUrls: ['./ajout-prestation.component.css']
})

export class AjoutPrestationComponent implements OnInit {
  affichenom!: string;
  affichemail!: string;
  afficheservice!: string;
  getValue(nom:string,mail:string,service:string) {
    this.affichenom=nom;
    this.affichemail=mail;
    this.afficheservice=service;
  }
  constructor() { }

  ngOnInit(): void {

  }



}
