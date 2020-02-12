import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { SnackService } from 'src/app/shared/services/snack.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptor implements HttpInterceptor {
  msg = '';
  errorText = '';

  constructor(
    public snackService: SnackService,
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.handleAuthError(error);
        return of(error.error.status_message);
      }) as any);
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    switch (+err.status) {
      case 404:
        this.msg = `${err.statusText} ${err.status}`;
        this.router.navigate([`/`]);
        break;
      case 500 || 503:
        this.msg = 'Внутренняя ошибка сервера. Попробуйте еще раз.';
        break;
      default:
        this.msg = `${err.statusText} ${err.status}`;
        break;
    }
    this.snackService.openSnack('danger', { status: 'Error!', msg: this.msg });
    throw (err);
  }
}
