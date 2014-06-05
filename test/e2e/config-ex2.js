

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // capabilities: {
  //   'browserName': 'chrome'
  // },
  multiCapabilities: [{
	  'browserName' : 'chrome'
	}, 
	{
	  'browserName' : 'firefox'
	}],

  specs: ['example-spec.js'],

  jasmineNodeOpts: {
    showColors: true
  }
};