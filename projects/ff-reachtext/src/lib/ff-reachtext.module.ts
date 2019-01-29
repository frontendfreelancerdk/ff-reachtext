import {NgModule} from '@angular/core';
import {ReachtextComponent} from './reachtext/reachtext.component';
import {SafeHtmlPipe} from './safe-html.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ReachtextComponent, SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [ReachtextComponent]
})
export class FfReachtextModule {
}
