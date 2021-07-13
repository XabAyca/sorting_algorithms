const fs = require('fs');

const fileName = process.argv[2];

// Open & read the file with 'fs'
fs.readFile(fileName, 'utf8', (error, data) => {
  
  // Log autommatic errors
  if (error) {
    console.error(error.message);
    return ;
  }

  // check if the file is empty
  if(data == null || data == undefined || data == '' ) return console.error('ERROR: Empty file');

  // split & parse all data in integer

  const list = (data.split(` `)).map(numb=>{
    return parseInt(numb)
  });

  // Check if it's a number
  if(list.includes(NaN)) return console.error('ERROR: Not A Number in file');


  // Run Sorting Programms
  new BubbleSorting(list)
  new InsertionSorting(list)
  new SelectionSorting(list)
  new QuickSorting(list)

});

////////////////////////////
// Sort by Bubble Sorting //
///////////////////////////
class BubbleSorting{
  constructor(list){
    this.list  = [...list]
    this.count = 0
    this.sortProgramm()
  } 

  sortProgramm(){
    for(let i = 0; i<this.list.length; i++){
      for(let j = 1; j<this.list.length-i; j++){
        this.count++
        if (this.list[j-1]>this.list[j]){
          let temp = this.list[j]
          this.list[j]=this.list[j-1];
          this.list[j-1]=temp;
        }
      }
    }
    console.log(`Tri à bulle: ${this.count} comparaisons - [${this.list}]`)
  }
}

////////////////////////////
//    Sort by insertion   //
///////////////////////////
class InsertionSorting{
  constructor(list){
    this.list  = [...list]
    this.count = 0
    this.sortProgramm()
  }
  
  sortProgramm(){
    for(let i = 1; i<this.list.length;i++){
      let currentEl = this.list[i];
      let j = i-1;
      while (j >= 0 && this.list[j] > currentEl){
        this.list[j+1] = this.list[j];
        j--;
        this.count++
      }
      this.list[j+1] = currentEl
    }
    console.log(`Tri à insertion: ${this.count} comparaisons - [${this.list}]`)
  }
}

////////////////////////////
//    Sort by Selection   //
///////////////////////////
class SelectionSorting{
  constructor(list){
    this.list = [...list]
    this.count = 0
    this.sortProgramm() 
  }

  sortProgramm(){
    for (let i=0; i<this.list.length; i++){
      let numbMin = i;
      for (let j=i+1; j<this.list.length; j++){
        this.count ++
        if (this.list[j] < this.list[numbMin]){
          numbMin = j
        }
      }
      if (numbMin!=i){
        let temp = this.list[i]
        this.list[i] = this.list[numbMin]
        this.list[numbMin] = temp
      }
    }
    console.log(`Tri à sélection: ${this.count} comparaisons - [${this.list}]`)
  }
}

////////////////////////////
//    Sort by Quick Sort   //
///////////////////////////
class QuickSorting{
  constructor(list){
    this.list = [...list]
    this.count = 0
    this.sortProgramm(this.list)
    this.view(this.list)   
  }

  sortProgramm(list){
    if(list.length < 1) {
      return list;
    }
    let p = list[0]
    let lArray = []
    let rArray = []

    for (let i = 1; i < list.length; i++) {
      this.count++
      if ( list[i] > p ) {
        rArray.push(list[i]);
      } else {
        lArray.push(list[i]);
      }
    }
    return this.list = this.sortProgramm(lArray).concat(p, this.sortProgramm(rArray))
  }

  view(result){
    console.log(`Tri rapide: ${this.count} comparaisons - [${result}]`)
  }
}
