function HelloAsyncPlugin() {}

HelloAsyncPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', (compilation, callback) => {
    setTimeout(() => {
      console.log('Done with async work...');
      callback();
    }, 0);
  });
};

module.exports = HelloAsyncPlugin;
