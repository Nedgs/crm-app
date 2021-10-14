import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client, ClientStateEnum} from '../../../shared/models/client';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
})
export class FormClientComponent implements OnInit {
  @Input() init: Client = {
    id: null,
    name: null,
    ca: 0,
    state: ClientStateEnum.INACTIF
  };

  @Output() submitted: EventEmitter<Client> = new EventEmitter<Client>();
  public states = Object.values(ClientStateEnum);

  public form: FormGroup | null = null;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      ca: [this.init.ca],
      state: [this.init.state]
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form?.value);
  }

}
