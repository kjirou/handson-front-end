(function() {
  this.TableView = (function() {
    var _data, _reverse;

    _data = [];

    _reverse = false;

    function TableView($el, model) {
      this.$el = $el;
      this.model = model;
      _data = this.model.get('data');
      this.$tbody = this.$el.querySelector('.js-tbody');
      this.$sortBtns = this.$el.querySelectorAll('.js-btn-sort');
      this.render();
      this.setEventListeners();
    }

    TableView.prototype.setEventListeners = function() {
      var $sortBtn, i, len, ref, results;
      this.model.onChange('data', (function(_this) {
        return function() {
          _data = _this.model.get('data');
          return _this.render();
        };
      })(this));
      ref = this.$sortBtns;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        $sortBtn = ref[i];
        results.push($sortBtn.addEventListener('click', (function(_this) {
          return function(e) {
            var sortkey;
            sortkey = e.target.dataset.sortkey;
            _this._sortByKey(sortkey);
            return _this.render();
          };
        })(this)));
      }
      return results;
    };

    TableView.prototype.addComma = function(num) {
      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    };

    TableView.prototype.template = function(data) {
      return "<tr><td>" + data.name + "</td><td>" + (this.addComma(data.amount)) + "</td></tr>";
    };

    TableView.prototype._sortByKey = function(key) {
      _reverse = !_reverse;
      return _data.sort(function(a, b) {
        var x, y;
        x = a[key];
        y = b[key];
        if (_reverse) {
          if (x > y) {
            return 1;
          }
          if (x < y) {
            return -1;
          }
          return 0;
        } else {
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        }
      });
    };

    TableView.prototype.render = function() {
      var data, i, len, tableEl;
      tableEl = [];
      for (i = 0, len = _data.length; i < len; i++) {
        data = _data[i];
        tableEl.push(this.template(data));
      }
      return this.$tbody.innerHTML = tableEl.join('');
    };

    return TableView;

  })();

}).call(this);
