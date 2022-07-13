import { Component } from '@angular/core';
import { SyllableService } from './syllable-service';
// import { SnWebResponseEx } from './SnWebResponse';
import { InstrumentinfoDetails, Instrument, AddInstrument } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CreateSyllable&Rythmclipline';
  public syllable: string;
  public rythmclipline: string;
  // public Instrument : string;
  public instrumentID: string;
  public AddInstrument: string;
  public instrumentList: Array<Instrument>
  // public instrumentidList: Array<instrument>;

  constructor(
    public syllableService: SyllableService) {
    this.syllable = '';
    this.rythmclipline = '';
    this.AddInstrument = '';
    this.instrumentID = '';
    this.instrumentList = [];
  }
  createSyllable() {
    this.syllableService.createSyllable(this.syllable).subscribe((response) => {
      console.log(response);
    });
  }
  createRcline() {
    this.syllableService
      .createRcline(this.rythmclipline, this.instrumentID)
      .subscribe((response: string) => {
        console.log(response);
      });
  }
  public reset1() {
    this.rythmclipline = '';
    this.instrumentID = '';
  }
  public reset2() {
    this.syllable = '';

  }

  public getInstrument() {
    this.syllableService.getInstrument().subscribe(
      (resp: Instrument[]) => {
        this.instrumentList = resp;
        this.instrumentList.sort((a, b) => a.name.localeCompare(b.name));
        console.log(this.instrumentList);
        // this.getRagams();
      },
      (error) => {
        console.log(error);
        // this.snackBar.open('Error While getting deitys. (-_-)', 'Close', {
        //   duration: 5000,
        // });
      }
    );
  }

}
