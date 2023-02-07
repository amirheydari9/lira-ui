import {Injectable} from '@angular/core';
import {SwUpdate, VersionReadyEvent} from "@angular/service-worker";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(
    // private appRef: ApplicationRef,
    private swUpdate: SwUpdate
  ) {

    // const appIsStable$ = appRef.isStable.pipe(first(isStable => isStable === true));
    // const everySixHours$ = interval(6 * 60 * 60 * 1000);
    // const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everySixHours$);
    //
    // everySixHoursOnceAppIsStable$.subscribe(async () => {
    //   try {
    //     const updateFound = await swUpdate.checkForUpdate();
    //     console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
    //   } catch (err) {
    //     console.error('Failed to check for updates:', err);
    //   }
    // });


    // if (swUpdate.isEnabled) {
    //   interval(6 * 60 * 60).subscribe(() => swUpdate.checkForUpdate()
    //     .then(() => console.log('checking for swUpdate')));
    // }
  }

  public checkForUpdates(): void {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.pipe(
    //     filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
    //   ).subscribe(evt => this.promptUser())
    // }

    this.swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
    ).subscribe(evt => document.location.reload())

  }

  private promptUser(): void {
    console.log('updating to new version');
    this.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
