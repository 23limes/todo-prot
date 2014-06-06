// example-spec.js
describe('angularjs homepage', function() {

  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('SoCal AngularJS');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello SoCal AngularJS!');

    browser.driver.sleep(3000); //just so we can see it on screen before the browser shuts down
  });
});