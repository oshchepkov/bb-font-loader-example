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
  modelchange() {
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
  keyup() {
    /*
     * need ro update the model object to match input value.
     * use keyup to update model, otherwise the model's value is late on changes.
     */
    this.updateModel(this.getModelValue());
  }

  updateModel(value: DateRangeModel | string) {
    this.model.viewToModelUpdate(value);
  }

  getDateSectionLength(value: string): number {
    const section = value.split(' - ')[0];
    if (section) {
      return section.trim().length;
    }
    return 0;
  }

  getModelValue(): DateRangeModel | string {
    //  two special cases (BB datepicker specific) for date range selector
    const model: DateRangeModel = { from: '', to: '' };
    if (this.rangeSelectionSplit) {
      model.from = this.maskPipe.transform(this.inputs[0].value, this.inputMask);
      model.to = this.maskPipe.transform(this.inputs[1].value, this.inputMask);
      return model;
    } else if (this.rangeSelection && this.activeInput) {
      const dateSectionLength = this.getDateSectionLength(this.activeInput.getAttribute('placeholder'));
      model.from = this.maskPipe.transform(this.activeInput.value.slice(0, dateSectionLength), this._inputMask);
      model.to = this.maskPipe.transform(this.activeInput.value.slice(-dateSectionLength), this._inputMask);
      return model;
    } else {
      if (this.activeInput) {
        return this.maskPipe.transform(this.activeInput.value, this.inputMask);
      }
    }
  }
}
