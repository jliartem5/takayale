(function($){
    $.fn.iscroll = function(options){
      if(this.data('iScrollReady') == null){
        var that = this;
        var options =  $.extend({}, options);
        options.onScrollEnd = function(){
          that.triggerHandler('onScrollEnd', [this]);
        };
        arguments.callee.object  = new iScroll(this.get(0), options);
      // NOTE: for some reason in a complex page the plugin does not register
      // the size of the element. This will fix that in the meantime.
        (function(scroller){
          scroller.refresh();
        });
        this.data('iScrollReady', true);
      }
      else{
        arguments.callee.object.refresh();
      }
      return arguments.callee.object;
  };
})(jQuery);