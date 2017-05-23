(function() {
  var TokenSorter = function() {
    this.tokens = [];
    this.operands = [];
    this.operators = [];
    this.values = [];
    this.operations = [];
    this.operator
  }

  TokenSorter.prototype.displayValue = function() {
    return this.operands[this.operands.length-1]
  }

  TokenSorter.prototype.add = function(arr) {
    value1 = arr.pop()
    value2 = arr.pop()
    value1 = Number(value1)
    value2 = Number(value2)
    console.log(value1, value2, "EVALUATE THIS");
    var sum = eval(value1 + value2)
    console.log(sum, "<==== SUM");
  }

  TokenSorter.prototype.subtract = function(arr) {
    value1 = arr.pop()
    value2 = arr.pop()
    value1 = Number(value1)
    value2 = Number(value2)
    console.log(value1, value2, "EVALUATE THIS");
    var difference = eval(value1 - value2)
    console.log(difference, "<==== DIFFERENCE");
  }

  TokenSorter.prototype.multiply = function(arr) {
    value1 = arr.pop()
    value2 = arr.pop()
    value1 = Number(value1)
    value2 = Number(value2)
    console.log(value1, value2, "EVALUATE THIS");
    var total = eval(value1 * value2)
    console.log(total, "<==== total");
  }

  TokenSorter.prototype.divide = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.percentage = function(value1, value2) {
    var num1 = this.operandStack.shift()
    var num2 = this.operandStack.shift()
  }

  TokenSorter.prototype.clearStrict = function() {
    this.operandStack = [];
    this.operatorStack = [];
  }

  TokenSorter.prototype.clearOperands = function() {
    this.operands = [];
  }

  TokenSorter.prototype.clearTokens = function() {
    this.tokens = [];
  }

  var mathOperators = ['+', '*', '÷', '%'];
  var positive = '+'
  var negative = '-'
  var equals = '='
  var sort = new TokenSorter()


  var onButtonClick = function(event) {
    var value = event.target.innerText
    sort.collectTokens(value)
  }

  var allButtons = Array.from(document.querySelectorAll('button'))
  allButtons.forEach(function(button){
    button.addEventListener('click', onButtonClick)
  })

  TokenSorter.prototype.collectTokens = function(value) {
    if(value === equals) {
      console.log('would do math');
      console.log(this);
      return
    }
    if(mathOperators.includes(value)) {
      console.log("mathOperators", value);
      this.operator = value
      this.operands = this.tokens.slice()
      this.processNumbers()
      this.clearOperands()
      this.clearTokens()
      console.log(this);

    }else{
      this.tokens.push(value)
      console.log("TOKENS", this.tokens);
      console.log(this);
    }
  }

  TokenSorter.prototype.processNumbers = function () {
    if(this.operands.length > 1) {
      var value = this.operands.join('')
      this.storeTokens(value)
      value = null;
    }
    if(mathOperators.includes(this.operator)) {
      this.storeTokens(this.operator)
    }
  }

  TokenSorter.prototype.storeTokens = function (tokens) {
    if(mathOperators.includes(tokens)) {
      this.operations.push(tokens)
    }else{
      this.values.push(tokens)
    }
    if(this.values.length > 1) {
      this.parseOperators(this.operations, this.values)
    }
  }


  TokenSorter.prototype.parseOperators = function(operators, numbers) {
    console.log('Made it to Parse Operations', this.operations);
    this.operator = this.operations.pop()

    console.log(this.operator, "THIS POPPED OFF ");

    switch(this.operator) {
        case "+":
        this.add(this.values)
        break;

        case "-":
        this.subtract(this.values)
        break;

        case "*":

        break;

        case "/":

        break;
      }
  }





})()
