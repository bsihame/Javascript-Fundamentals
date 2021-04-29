class QueueArray {
  constructor() {
    this.storage = []
  }

  /**
   * Adds a value to the end queue 
   * @param {any} value the value to be added 
   * @returns {undefined} 
   */
  enqueue(value) {
    this.storage.push(value)
  }

  /**
   * Remove an element from the front of the queue
   * @returns {any} the value removed
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Nothing to dequeue")
    }
    return this.storage.shift();
  }

  /**
   * Return the element in the front of the queue without
   * removing it
   * @returns {any} the value in the front of the queue
   */
  peek() {
    return this.storage[0];
  }

  /**
   * Return whether the queue is empty
   * @returns {boolean} whether the queue is empty
   */
  isEmpty() {
    if (this.storage.length === 0) {
      return true
    } else {
      return false
    }
  }

  toArray() {
   let arr= [];
  //  as many time as element in queue
  while(!this.isEmpty()) {
    // dequeueing elm
    let elem = this.dequeue()
    //push elem to arr
    arr.push(elem)
  }
   return arr
  
  }

  toString() {
    let str = '< '
    let temp = []
    while (!this.isEmpty()){
        let shift = this.dequeue()
        str += shift + ', '
        temp.push(shift)
    }
    
    for(let elem of temp){
        this.enqueue(elem)
    }
   
    str =  str.slice(0, str.length - 2)
    return str += ' <='
}

static fromArray(arr) {
  let que = new QueueArray();
  for(let elem of arr){
    queueMicrotask.enqueue(ele)// add to queue
  }
  return queue
}
}

module.exports = QueueArray;


// JavaScript Classes:
// A blueprint for object.
// Has a constructor to create objects
// Create objects with custom methods
//  Create our own data structures.
// They have state/storage
// Methods that modify its state
