(function() {
  var MicroView, TabView,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MicroView = microModule["import"]('MicroView');

  TabView = (function(superClass) {
    var _index;

    extend(TabView, superClass);

    _index = 0;

    function TabView($el) {
      var $btn, i, j, len, ref;
      this.$el = $el;
      this.$btns = this.find('.js-tab-btn');
      this.$contents = this.find('.js-tab-content');
      ref = this.$btns;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $btn = ref[i];
        $btn.dataset.index = i;
      }
      this.toggleBtn();
      this.showContent();
      TabView.__super__.constructor.call(this);
    }

    TabView.prototype.setEventListeners = function() {
      return this.on(this.$btns, 'click', (function(_this) {
        return function(e) {
          _index = +_this.data(e.target, 'index');
          _this.toggleBtn();
          return _this.showContent();
        };
      })(this));
    };

    TabView.prototype.toggleBtn = function() {
      var $btn, i, j, len, ref, results;
      ref = this.$btns;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $btn = ref[i];
        if (_index === i) {
          results.push(this.addClass($btn, 'is-active'));
        } else {
          results.push(this.removeClass($btn, 'is-active'));
        }
      }
      return results;
    };

    TabView.prototype.showContent = function() {
      var $content, i, j, len, ref, results;
      ref = this.$contents;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        $content = ref[i];
        if (_index === i) {
          results.push(this.addClass($content, 'is-active'));
        } else {
          results.push(this.removeClass($content, 'is-active'));
        }
      }
      return results;
    };

    return TabView;

  })(MicroView);

  microModule["export"](TabView);

}).call(this);
