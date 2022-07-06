import { Component } from '@angular/core';
import { SyllableService } from './syllable-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CreateSyllable&Rythmclipline';
  public syllable: string;
  public rythmclipline: string;
  public instrumentid: string;
  public instrumentidList: Array<instrument>;

  constructor(public syllableService: SyllableService) {
    this.syllable = '';
    this.rythmclipline = '';
    this.instrumentid = '';
    this.instrumentidList = [];

  }
  ngOnInit() {
    this.getinstrumentid();
  }
  createSyllable() {
    this.syllableService.createSyllable(this.syllable).subscribe((response) => {
      console.log(response);
    });
  }
  createRcline() {
    this.syllableService
      .createRcline(this.rythmclipline, this.instrumentid)
      .subscribe((response: string) => {
        console.log(response);
      });
  }
  public reset1() {
    this.rythmclipline = '';
    this.instrumentid = '';
  }
  public reset2() {
    this.syllable = '';

  }
  public getinstrumentid() {
    this.syllableService.getinstrumentid().subscribe(
      (resp: SnWebResponseEx<instrument[]>) => {
        this.instrumentidList = resp.value;
        this.instrumentidList.sort((a, b) => a.name.localeCompare(b.name));
      },
    );
  }
}
