import {
  Component,
  input,
  ViewEncapsulation,
  HostListener,
  inject,
  ElementRef,
  contentChild,
  AfterContentInit,
  afterRender,
  afterNextRender,
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
export class ControlComponent implements AfterContentInit {
  label = input<string>();
  private el = inject(ElementRef);
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit() {
    console.log('After content init');

    console.log(this.control());
  }

  @HostListener('click') onClick() {
    console.log('clicked');
    console.log(this.el);

    console.log(this.control());
  }
}
