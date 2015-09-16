(function() {
  this.AddItemModalView = (function() {
    function AddItemModalView($el, model) {
      this.$el = $el;
      this.model = model;
      this.$addItemSubmitBtn = this.$el.querySelector('.js-btn-add-item-submit');
      this.$itemNameInput = this.$el.querySelector('.js-input-add-item-name');
      this.$itemAmountInput = this.$el.querySelector('.js-input-add-item-amount');
      this.setEventListeners();
    }

    AddItemModalView.prototype.setEventListeners = function() {
      this.model.onChange('isShowModal', (function(_this) {
        return function() {
          var isShowModal;
          isShowModal = _this.model.get('isShowModal');
          if (isShowModal) {
            return _this.show();
          } else {
            return _this.hide();
          }
        };
      })(this));
      return this.$addItemSubmitBtn.addEventListener('click', (function(_this) {
        return function() {
          return _this.addItem();
        };
      })(this));
    };

    AddItemModalView.prototype.show = function() {
      return this.$el.classList.add('is-open');
    };

    AddItemModalView.prototype.hide = function() {
      return this.$el.classList.remove('is-open');
    };

    AddItemModalView.prototype.addItem = function() {
      var _amount, _name, item;
      _name = this.$itemNameInput.value;
      _amount = this.$itemAmountInput.value;
      item = {
        name: _name,
        amount: _amount
      };
      this.model.addData(item);
      return this.model.set('isShowModal', false);
    };

    return AddItemModalView;

  })();

}).call(this);
