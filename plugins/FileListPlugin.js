function FileListPlugin(options) {}

FileListPlugin.prototype.apply = (compiler) => {
  compiler.plugin('emit', (compilation, callback) => {
    var filelist = 'In this build:\n\n';

    for (var filename in compilation.assets) {
      filelist += (`- ${filename}\n`);
    }

    compilation.assets['filelist.md'] = {
      source: () => filelist,
      size: () => filelist.length,
    };

    callback();
  });
};

module.exports = FileListPlugin;
