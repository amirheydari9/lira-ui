import {Injectable} from '@angular/core';
import imageCompression from "browser-image-compression";

@Injectable({
  providedIn: 'root'
})
export class FileUtilService {

  constructor() {
  }

  createFile(blob, fileName = 'image.png'): File[] {
    return [new File([blob], fileName, {
      type: blob.type,
      lastModified: new Date().getTime()
    })]
  }

  async convertBase64ToFile(base64, name = 'name'): Promise<File[]> {
    const blob = await (await fetch(base64)).blob();
    return this.createFile(blob, name)
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  async compressImage(file): Promise<Blob> {
    const options = {
      maxSizeMB: 10,
      maxWidthOrHeight: 1024,
      useWebWorker: true
    }
    return await imageCompression(file, options);
  }
}
