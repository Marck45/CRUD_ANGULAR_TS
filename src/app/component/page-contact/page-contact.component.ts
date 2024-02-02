import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  formLeads!: FormGroup;

  textButton = 'Teste Gratís';

  constructor(){}

  ngOnInit(): void {
    this.createForm();
    this.textButton;
  }

  async createForm() {
    this.formLeads = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    });
  }

}
