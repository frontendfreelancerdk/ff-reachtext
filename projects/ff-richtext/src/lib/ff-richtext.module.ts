import {NgModule} from '@angular/core';
import {FFRichtextComponent} from './richtext/richtext.component';
import {SafeHtmlPipe} from './safe-html.pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [FFRichtextComponent, SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports: [FFRichtextComponent]
})
export class FFRichtextModule {
}
