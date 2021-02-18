class LinkedList {
  constructor ({ dataArg, head=null, nextArg }) {
    this.dataArg = dataArg;
    this.head = head;
    this.nextArg = nextArg;
    this.tail = null;
  }

  printLinkedList () {
    let list = '';
    let curr = this.head;

    while (curr) {
      list += `${curr[this.dataArg]} --> `;
      curr = curr[this.nextArg];
    }

    list += 'none';

    console.log(list);
  }

  toArray () {
    let curr = this.head;
    const arr = [];

    while (curr) {
      arr.push(curr[this.dataArg]);
      curr = curr[this.nextArg];
    }

    return arr;
  }

  reverseLinkedList () {
    let prev = null;
    let curr = this.head;

    this.tail = this.head;

    while (curr) {
      const next = curr[this.nextArg];

      curr[this.nextArg] = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}

export default LinkedList;
