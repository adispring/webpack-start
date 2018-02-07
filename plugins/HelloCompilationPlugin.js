function HelloCompilationPlugin(options) {};

HelloCompilationPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function(compilation) {
    /* console.log(JSON.stringify(compilation, null, 2));*/
    compilation.plugin('optimize', function() {
      console.log('Assets are being optimized');
    });
  });
};

module.exports = HelloCompilationPlugin;
