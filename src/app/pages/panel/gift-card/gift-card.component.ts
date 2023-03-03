import {Component, OnInit} from '@angular/core';
import {CardTypeFacade} from "../../../data-store/card-type-store/card-type.facade";
import {FetchCardTypeDTO} from "../../../model/DTO/fetch-card-type.DTO";
import {ActivatedRoute, Router} from "@angular/router";
import {ICardTypeRes} from "../../../model/interface/card-type-res.interface";
import {AutoUnsubscribe} from "../../../decorator/AutoUnSubscribe";
import {Subscription} from "rxjs";
import {preRegisterUserData} from "../../../config/key";
import {StorageService} from "../../../service/storage.service";
import {TitleService} from "../../../service/title.service";

@AutoUnsubscribe()
@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent implements OnInit {

  cardType: ICardTypeRes
  subscription: Subscription
  loading: boolean

  constructor(
    public cardTypeFacade: CardTypeFacade,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService,
    private router: Router,
    private titleService: TitleService
  ) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true
      await this.cardTypeFacade.fetchCardType(new FetchCardTypeDTO(this.activatedRoute.snapshot.params['id']))
      this.subscription = this.cardTypeFacade.cardType$.subscribe(data => {
        this.cardType = data
        this.titleService.setTitle(`کارت ${data.titleFa}`)
      })
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }

  handleConfirm() {
    this.storageService.setSessionStorage(preRegisterUserData, {
      ...this.storageService.getSessionStorage(preRegisterUserData),
      cardTypeId: +this.activatedRoute.snapshot.params['id']
    })
    this.router.navigate(['/terms-and-conditions'])
  }
}
