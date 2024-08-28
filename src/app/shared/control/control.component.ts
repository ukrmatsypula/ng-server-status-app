import {
  Component,
  input,
  ViewEncapsulation,
  HostListener,
  inject,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input<string>();
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
