export class InstrumentinfoDetails {
    constructor(
        public instrumentid: string,) {}
}

export class SongInfo {
    constructor(public song: InstrumentinfoDetails) {

    }
}
export class Instrument {
    constructor(public id: number,
        public name: string,
        public keyword: string) { }
}//export class Instrument {



export class AddInstrument {
    constructor(public name: string) { }
}
