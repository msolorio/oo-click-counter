// increment clickCount to zero and update display

// listen for button
// increment clickCount when button clicked

var app = {
  clickCount: 0,
  clickCountEl: document.getElementById('clickCountEl'),
  buttonEl: document.getElementById('buttonEl'),

  updateDisplay: function() {
    this.clickCountEl.innerHTML = this.clickCount;
  },

  incrementClickCount: function() {
    this.clickCount += 1;
  },

  listenForClick: function() {
    this.buttonEl.addEventListener('click', function() {
      this.incrementClickCount();
      this.updateDisplay();
    }.bind(this));
  },

  initializeApp: function() {
    this.updateDisplay();
    this.listenForClick();
  }
}

app.initializeApp();
