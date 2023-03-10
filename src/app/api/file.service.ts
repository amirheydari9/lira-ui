import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UploadFileDTO} from "../model/DTO/upload-file.DTO";
import {IUploadFileRes} from "../model/interface/upload-file-res.interface";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient
  ) {
  }

  async upload(payload: UploadFileDTO): Promise<IUploadFileRes> {
    const formData = new FormData();
    formData.append("file", payload.file);
    return this.http.post<IUploadFileRes>(`${this.baseUrl}api/lira/file`, formData).toPromise()
  }

  async fetchFile(): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}api/lira/file`).toPromise()
  }
}
