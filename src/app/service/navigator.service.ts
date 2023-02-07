import {Injectable} from '@angular/core';

interface OTPOptions {
  transport: string[];
}

export interface OtpCredentialRequestOptions extends CredentialRequestOptions {
  otp: OTPOptions;
}

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor() {
  }

  async otpRequest(): Promise<any> {
    if ('OTPCredential' in window) {
      try {
        const abortController = new AbortController();
        // let timer = setTimeout(() => {
        //   abortController.abort();
        // }, 2 * 1000);
        let o: OtpCredentialRequestOptions = {
          otp: {transport: ['sms']},
          signal: abortController.signal
        };
        try {
          const content = await window.navigator['credentials'].get(o);
          console.log(content)
          abortController.abort()
          return content['code']
        } catch (e) {
          console.log(e)
        }
        //do what ever you want to do with the received code, probably send it to server
      } catch (e) {
        console.log(e)
      }

    }
  }

  async shareTextOnSocialMedia({text}) {
    const shareData = {
      url: 'vee.ir',
      title: 'رسید تراکنش',
      text: text
    };
    await navigator.share(shareData);
  }

  async shareFileOnSocialMedia(filesArray) {
    const shareData = {
      url: 'vee.ir',
      title: 'رسید تراکنش',
      files: filesArray,
      text: 'رسید تراکنش'
    };
    if (navigator.canShare(shareData)) {
      await navigator.share(shareData);
    }
  }

  isContactPickerSupported(): boolean {
    return ('contacts' in navigator && 'ContactsManager' in window);
  }

  async openContactPicker() {
    const props = ['name', 'tel'];
    const opts = {multiple: false};
    try {
      return await navigator['contacts'].select(props, opts);
    } catch (ex) {
      // Handle any errors here.
    }
  }
}
