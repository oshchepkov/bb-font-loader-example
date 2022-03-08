import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickTransferJourneyModule } from '@backbase/quick-transfer-journey-ang';
import { AccountsTransactionsJourneyWrapperComponent } from './wrapper-accounts-transactions-journey.component';
import { QuickActionsComponent } from '../quick-actions.component';
import { InputDatepickerModule } from '@backbase/ui-ang';
import { MaskedDatepickerInpuModule } from '../../../../../../libs/masked-datepicker-input-directive/masked-datepicker-input.module';

const routes: Routes = [
  {
    path: '',
    component: AccountsTransactionsJourneyWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../bundle-accounts-transactions-journey.module').then(
            (m) => m.AccountsTransactionsJourneyBundleModule,
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [AccountsTransactionsJourneyWrapperComponent, QuickActionsComponent],
  imports: [
    QuickTransferJourneyModule,
    RouterModule.forChild(routes),
    CommonModule,
    InputDatepickerModule,
    MaskedDatepickerInpuModule,
  ],
})
export class AccountsTransactionsJourneyBundleModule {}
