import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

/**
 * this is a test component that provides
 * a form where we can put the password component
 */
@Component({
  selector: 'test-password-journey',
  templateUrl: './test-password-form.component.html',
})
export class TestPasswordJourneyComponent {
  form = new FormGroup({});
  model = '';

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row mb-2 mt-4',
      fieldGroup: [
        {
          key: 'password',
          className: 'col-12 col-lg-8',
          type: 'new-password',
          templateOptions: {
            label: 'Create A Password',
            required: true,
            showVisibilityControl: true,
            confirm: false, // "true" is for "confirm password" mode
          },
        },
      ],
    },
  ];
}
