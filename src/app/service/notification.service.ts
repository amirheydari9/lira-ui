import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {NotificationComponent} from '../ui-kit/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  dialogRef: MatDialogRef<NotificationComponent>;

  public open({code, description}): void {
    this.dialogRef = this.dialog.open(NotificationComponent, {
      panelClass:'dialog-container',
      width: '80vw',
      maxWidth: '450px',
      role: 'alertdialog',
      position: {bottom: '80px'},
      hasBackdrop: false,
      data: {code, description},
    });
  }
}
