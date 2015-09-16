(function() {
  this.SeniorModel = (function() {
    function SeniorModel() {}

    SeniorModel.prototype._events = {};

    SeniorModel.prototype.isShowModal = false;

    SeniorModel.prototype.data = [
      {
        name: 'AAA',
        amount: 2000
      }, {
        name: 'BBB',
        amount: 10
      }, {
        name: 'CCC',
        amount: 10000
      }
    ];

    SeniorModel.prototype.get = function(key) {
      return this[key];
    };

    SeniorModel.prototype.set = function(key, value, silent) {
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

    SeniorModel.prototype.onChange = function(key, callback) {
      this._events[key] = this._events[key] || [];
      return this._events[key].push(callback);
    };

    SeniorModel.prototype.addData = function(item) {
      this.data.push(item);
      return this.set('data', this.data);
    };

    return SeniorModel;

  })();

}).call(this);
