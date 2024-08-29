import {
  Component,
  input,
  ViewEncapsulation,
  HostListener,
  inject,
  ElementRef,
  contentChild,
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
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  @HostListener('click') onClick() {
    console.log('clicked');
    console.log(this.el);

    console.log(this.control());
    
  }
}
