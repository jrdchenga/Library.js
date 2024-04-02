class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }

    set isCheckedOut(value) {
      return this._isCheckedOut = value;
    }
    
    get ratings() {
      return this._ratings ;
    }

    getAverageRating() {
      let ratingSum = this.ratings.reduce((curSum, rating) => curSum + rating, 0);
      return ratingSum / this.ratings.length;
    }
    
    addRating(value) {
      return this.ratings.push(value);
    }

    toggleCheckOutStatus() {
     return this._isCheckedOut = !this._isCheckedOut;
    }
}

class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = 0;
    }
    get author() {
      return this._author;
    }

    get pages() {
      return this._pages;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.ratings);
console.log(historyOfEverything.getAverageRating());


class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = 0;
    }
    get director() {
      return this._director;
    }

    get runTime() {
      return this._runTime;
    }
}

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings);
console.log(speed.getAverageRating());


class CD extends Media {
    constructor(artist, title, songs) {
      super(title, isCheckedOut, ratings);
      this._artist = artist;
      this._songs = [];
    }
    get artist() {
      return this._artist;
    }

    get songs() {
      return this._songs;
    }
}