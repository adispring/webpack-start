function HelloCompilationPlugin(options) {};

HelloCompilationPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    compilation.plugin('optimize', function() {
      console.log('Assets are being optimized');
    });
  });
};

module.exports = HelloCompilationPlugin;
