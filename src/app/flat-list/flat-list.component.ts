import {Component, OnInit} from '@angular/core';
import {FlatListService} from "../flat-list.service";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {

  pageNumber: number = 0;
  data: any;
  flats: response;

  constructor(private flatListService: FlatListService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.loadFlats();
  }

  loadFlats() {
    this.http.get('http://localhost:8080/flat/' + this.pageNumber).subscribe(data => {
      this.data = data;
      this.flats = this.data;
    });
  }

  onScroll() {
    this.pageNumber = this.pageNumber+1;
    this.loadNextPost();
  }

  loadNextPost() {
    this.http.get('http://localhost:8080/flat/' + this.pageNumber).subscribe(data => {
      this.data = data;
      this.flats.content = this.flats.content.concat(this.data.content);
    });
  }
}

export class response {
  public content: Array<flat>;
}
export class flat {
  public address: any;
  public creationDate: string;
  public photoUrl: string;
  public title: string;
  public description: string;
  public monthPrice: number;
  public tags: Array<string>;
}
