const karmaJasmineSeedReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  this.onBrowserComplete = function(browser, result) {
    if (result.order && result.order.random && result.order.seed) {
      this.write('\n%s: Randomized with seed %s\n', browser.name, result.order.seed);
    }
  };

  this.onRunComplete = function() {
  }
};

module.exports = {
  'reporter:jasmine-seed': ['type', karmaJasmineSeedReporter]
};
