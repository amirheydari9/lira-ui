import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from "@angular/material/bottom-sheet";
import {FormBuilder, FormGroup} from "@angular/forms";
import {BehaviorSubject, Subscription} from "rxjs";
import {AutoUnsubscribe} from "../../../decorator/AutoUnSubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'app-select-items',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent implements OnInit {

  SearchOptions: FormGroup
  filteredItems$: BehaviorSubject<any> = new BehaviorSubject<any>(this.data.options)
  subscription: Subscription

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.SearchOptions = this.fb.group({
      searchText: ['']
    })

    this.subscription = this.SearchOptions.controls['searchText'].valueChanges.subscribe(data => {
      if (!data.trim()) {
        return this.filteredItems$.next(this.data.options)
      }
      const filteredItems = this.data.options.filter(item =>
        item[this.data.labelKey].toLocaleLowerCase().includes(data.toLocaleLowerCase()))
      return this.filteredItems$.next(filteredItems)
    })

  }
}
