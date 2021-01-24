const mixedMesssages = {

  _messageData: {

    intro: [
      'Welcome padawan!',
      'Welcome friend,'
    ],
    inter: [
      'You have entered the eternal portal...',
      'Take a seat...'
    ],
    end: [
      'Would you like to play darts?',
      'Would you like to play game?'
    ]

  },

  getRandomMessage() {
    let message = '';
    for (prop in this._messageData) {
      let index = Math.floor(Math.random() * this._messageData[prop].length);
      message = message + ' ' + this._messageData[prop][index];
    };

    return message;
  }

}


mixedMesssages.getRandomMessage();