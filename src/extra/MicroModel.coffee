class MicroModel
  _events = {}

  get: (key) ->
    @[key]

  set: (key, value, silent) ->
    @[key] = value
    if not _events[key] or silent
      return
    for callback in _events[key]
      (callback)()

  onChange: (key, callback) ->
    _events[key] = _events[key] or []
    _events[key].push(callback)

if microModule
  microModule.export(MicroModel)
else
  window.Micro = Micro or {}
  window.Micro.Model = MicroModel
