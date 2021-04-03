import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );

  menuItems = [
    { label: 'String Interpolation', route: 'string-interpolation' },
    { label: 'Event Binding', route: 'event-binding' },
    { label: 'Attribute Binding', route: 'attribute-binding' },
    { label: 'Two way data Binding', route: 'two-way-binding' },
    { label: 'Custom Two way data Binding', route: 'custom-2way-binding' },
    { label: 'Attribute Directives', route: 'attribute-directive' },
    { label: 'Structural Directives', route: 'structural-directive' },
    { label: 'Pipes', route: 'pipes' },
    { label: 'Custom pipes', route: 'custom-pipe' },
    { label: 'Http Client', route: 'rick-and-morty' }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

}
