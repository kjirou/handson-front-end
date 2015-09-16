(function() {
  var MicroModule;

  MicroModule = (function() {
    var _modules;

    function MicroModule() {}

    _modules = {};

    MicroModule.prototype["export"] = function(module) {
      if (_modules[module.name]) {
        console.warn(module.name + " is already exsits. overwrite " + module.name + ".");
      }
      return _modules[module.name] = module;
    };

    MicroModule.prototype["import"] = function(name) {
      return _modules[name];
    };

    return MicroModule;

  })();

  window.microModule = new MicroModule;

}).call(this);
