import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription, Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    public spinnerService: SpinnerService,
  ) { }

  counter = 5;
  subscription$: Subscription;
  observable: Observable<number>;

  ngOnInit() {
    this.spinnerService.showOrHideSpinner(false);
    this.observable = interval(1000).pipe(
      map(item => {
        return 4 - item;
      }),
      take(5),
    );

    this.subscription$ = this.observable.subscribe(
      time => this.counter = time,
      error => console.log(error),
      () => this.router.navigate(['/section'])
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
