import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Leads } from 'src/app/models/leads';
import { LoadingService } from 'src/app/service/loading.service';
import { NotificationService } from 'src/app/service/notification/notification.service';
import { LeadsService } from 'src/app/services/leads/leads.service';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css']
})
export class PageContactComponent implements OnInit {

  formLeads!: FormGroup;

  textButton = 'Teste Gratís';

  lead = {} as Leads;
  leads: Leads[] = []

  constructor(private loadingService: LoadingService, private notificationService: NotificationService, private LeadsService: LeadsService) {}

  ngOnInit(): void {
    this.createFormLeads();
    this.textButton;
  }

  createFormLeads() {
    this.formLeads = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmitLeads() {
    this.createLeads(this.formLeads.value);
  }

  async createLeads(formLeads: any) {
    this.loadingService.show(); // Mostra o indicador de carregamento

    const lead = {
      name: formLeads.name,
      email: formLeads.email,
      phone: formLeads.phone,
      description: formLeads.description,
    };

    (await this.LeadsService.saveLeads(lead)).subscribe(
      (lead: Leads[]) => {
        this.leads = lead;
        this.loadingService.hide(); // Oculta o indicador de carregamento após o carregamento completo
        this.notificationService.showSuccess('Mensagem Enviada');
      },
      (error: any) => {
        this.notificationService.showError('Erro ao enviar mensagem: ' + ' ' + error.message);
        this.loadingService.hide(); // Certifique-se de ocultar o indicador em caso de erro também
      }
    );

    this.createFormLeads();
  }
}
