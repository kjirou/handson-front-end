(function() {
  this.IntermediateModel = (function() {
    IntermediateModel.prototype._events = {};

    IntermediateModel.prototype.data = [];

    function IntermediateModel() {
      this.fetch();
    }

    IntermediateModel.prototype.get = function(key) {
      return this[key];
    };

    IntermediateModel.prototype.set = function(key, value, silent) {
      var callback, i, len, ref, results;
      this[key] = value;
      if (!this._events[key] || silent) {
        return;
      }
      ref = this._events[key];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        callback = ref[i];
        results.push(callback());
      }
      return results;
    };

    IntermediateModel.prototype.onChange = function(key, callback) {
      this._events[key] = this._events[key] || [];
      return this._events[key].push(callback);
    };

    IntermediateModel.prototype.fetch = function() {
      return setTimeout((function(_this) {
        return function() {
          var res;
          res = _this.genData();
          return _this.set('data', res);
        };
      })(this), 300);
    };

    IntermediateModel.prototype.genData = function() {
      var allData;
      allData = [
        {
          name: 'AAA',
          amount: 3000
        }, {
          name: 'BBB',
          amount: 1000
        }, {
          name: 'CCC',
          amount: 2000
        }, {
          name: 'DDD',
          amount: 5000
        }, {
          name: 'EEE',
          amount: 10000
        }, {
          name: 'FFF',
          amount: 1000
        }, {
          name: 'GGG',
          amount: 3000
        }, {
          name: 'HHH',
          amount: 1000
        }, {
          name: 'III',
          amount: 2000
        }, {
          name: 'JJJ',
          amount: 5000
        }, {
          name: 'KKK',
          amount: 10000
        }
      ];
      allData.sort(function(x, y) {
        return Math.random() - Math.random();
      });
      return allData.slice(0, 5);
    };

    return IntermediateModel;

  })();

}).call(this);
