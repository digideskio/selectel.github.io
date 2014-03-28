/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
!function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),o=0,a=0,r=0,t=e.event.fix(n);return t.type="mousewheel",n.wheelDelta&&(o=n.wheelDelta/120),n.detail&&(o=-n.detail/3),r=o,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(r=0,a=-1*o),void 0!==n.wheelDeltaY&&(r=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(a=-1*n.wheelDeltaX/120),i.unshift(t,o,a,r),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery);