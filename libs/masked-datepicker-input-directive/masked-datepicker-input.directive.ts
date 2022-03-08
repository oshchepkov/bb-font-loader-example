import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DateRangeModel } from '@backbase/ui-ang';
import { MaskPipe } from 'ngx-mask';

@Directive({
  selector: '[bbMaskedDatepickerInput]',
  providers: [MaskPipe],
})
export class MaskedDatepickerInputDirective implements AfterViewInit, OnInit {
  @Input() inputMask = '';
  @Input() rangeSelection = false;
  @Input() rangeSelectionSplit = false;

  constructor(
    private el: ElementRef,
    private model: NgModel,
    private renderer: Renderer2,
    private maskPipe: MaskPipe,
  ) {}
  _inputMask = '';
  inputs: HTMLInputElement[];
  activeInput: HTMLInputElement;

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.inputs = Array.from(this.el.nativeElement.querySelectorAll('input'));
    if (this.rangeSelection) {
      this._inputMask = this.inputMask;
      this.inputMask = `${this.inputMask} - ${this.inputMask}`;
    }
  }
  @HostListener('ngModelChange', ['$event'])
  modelchange(event) {
    if (this.activeInput) {
      this.renderer.setProperty(
        this.activeInput,
        'value',
        this.maskPipe.transform(this.activeInput.value, this.inputMask),
      );
    }
  }

  @HostListener('window:keydown', ['$event'])
  keydown(event: KeyboardEvent) {
    this.activeInput = this.inputs.find((input: Node) => input === event.target);
  }

  @HostListener('window:keyup', ['$event'])
  keyup(event) {
    // need update model object to match input.
    if (this.rangeSelectionSplit) {
      const model: DateRangeModel = { from: '', to: '' };
      model.from = this.maskPipe.transform(this.inputs[0].value, this.inputMask);
      model.to = this.maskPipe.transform(this.inputs[1].value, this.inputMask);
      this.updateModel(model);
    } else if (this.rangeSelection) {
      const dateSectionLength = this.getDateSectionLength(this.activeInput.getAttribute('placeholder'));
      const model: DateRangeModel = { from: '', to: '' };
      model.from = this.maskPipe.transform(this.activeInput.value.slice(0, dateSectionLength), this.inputMask);
      model.to = this.maskPipe.transform(this.activeInput.value.slice(-dateSectionLength), this.inputMask);
      this.updateModel(model);
    } else {
      if (this.activeInput) {
        this.updateModel(this.maskPipe.transform(this.activeInput.value, this.inputMask));
      }
    }
  }

  updateModel(value: DateRangeModel | string) {
    this.model.viewToModelUpdate(value);
  }

  getDateSectionLength(value: string): number {
    const section = value.split('-')[0];
    if (section) {
      return section.trim().length;
    }
    return 0;
  }
}
