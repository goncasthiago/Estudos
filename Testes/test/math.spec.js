const assert = require ('assert');
const expect = require('chai').expect;
const Math = require('../src/math')

describe('Math class', function(){
    //hooks
    //beforeEach
    //afterEach
    beforeEach(function(){
        value = 0
    });

    it("Sum two numbers", function(done){
        const math = new Math();
        this.timeout(3000);
        value =5;
        math.sum(value, 5, value => {
            expect(value).to.equal(10); //usando o chai
            //assert.equal(value, 10) //usando o mocha
            done()
        })
  })
  it('Multiply two numbers', function() {

      const math = new Math();
        expect(math.multiply(value,5)).to.equal(0); //usando o chai
      //assert.equal(math.multiply(value,5),0); //usando o mocha
  })

  //testando com objetos
  // quando comparamos dois objetos utilizamos o
  //expect(obj).to.deep.equal(obj2);
  it('Have a name', function() {
    const math = new Math();
    const obj = {
        name: 'Thiago Debia'
    }
    expect(obj).to.have.property('name').equal('Thiago Debia')

  })
})