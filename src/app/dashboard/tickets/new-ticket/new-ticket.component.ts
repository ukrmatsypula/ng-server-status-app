import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
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

  ngOnInit() {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    console.log(title);
    console.log(text);

    this.form()?.nativeElement.reset();
  }
}
