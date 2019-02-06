import {Component, Input} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'ff-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss']
})
export class FFRichtextComponent {
  @Input() data = '';

  constructor(private router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector('#' + tree.fragment);
          if (element) {
            element.scrollIntoView(true);
          }
        }
      }
    });
  }

  clickHandler(event) {
    const {target} = event;
    if (target && target.href) {
      const href = target.href;
      if (~href.indexOf('#') && ~href.indexOf(window.location.origin)) {
        event.preventDefault();
        const anchor = href.slice(href.indexOf('#') + 1);
        let link = window.location.href;
        if (~window.location.href.indexOf('#')) {
          link = window.location.href.slice(0, (window.location.href.indexOf('#') + 1));
        }
        link = link.replace(window.location.origin, '');
        this.router.navigate(link.split('/'), {fragment: anchor});
      } else if (~href.indexOf(window.location.origin)) {
        event.preventDefault();
        const link = href.replace(window.location.origin, '');
        this.router.navigate([link]);
      }
    }
  }
}
