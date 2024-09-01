import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  ngOnInit() {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }

  onSubmit() {
    if (!this.enteredTitle.length || !this.enteredText.length) {
      alert('Please enter the all fields for ticket');
      return;
    }
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    this.enteredTitle = '';
    this.enteredText = '';
  }
}
