import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';

@Injectable({
  providedIn: 'root'
})
export class SendFileService {

  apiUrl = 'http://localhost:8080/uploadFile';
  // methodeName = 'uploadFile';

  public uploader: FileUploader = new FileUploader({url: this.apiUrl});

  constructor(private http: HttpClient ) {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({url: this.apiUrl, autoUpload: true, headers: headers});
  }

  senfFile(file) {
    console.log(this.apiUrl);
    return this.http.post(this.apiUrl , file);
  }



}
