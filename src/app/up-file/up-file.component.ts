import { Component, OnInit } from '@angular/core';
import {SendFileService} from '../send-file.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-up-file',
  templateUrl: './up-file.component.html',
  styleUrls: ['./up-file.component.css']
})
export class UpFileComponent implements OnInit {

  selectedFileile: File = null;
  apiUrl = 'https://conferenceappabonne.herokuapp.com/uploadFile';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSelectFile(event) {
    this.selectedFileile = event.target.files[0];
    console.log(this.selectedFileile);
  }

  uploadFile() {
    const fd = new FormData();
    fd.append('file', this.selectedFileile, this.selectedFileile.name);
    this.http.post(this.apiUrl, fd)
      .subscribe(res => {
        console.log(res);
        alert(res.message);
      }, error => {
        console.log(error);
        alert(error.message);
      });
  }



}
