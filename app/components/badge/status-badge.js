import Ember from 'ember';

export default Ember.Component.extend({
  _statusStyle: Ember.computed('status', 'size', 'float', function() {
    let size = this.get('size');
    let fontsize = size*0.7;
    let pad = (size-fontsize)*0.5;
    let width = 7*size;
    let float = 'float: none';
    if(this.get('float')){
      float = 'float: ' + this.get('float') + '; margin-top:-20px';
    }
    switch (this.get('status')) {
      case `init`: return `background-color: #cc5490; width:${width}px; font-size:${fontsize}px; padding:${pad}px; ${float}`.htmlSafe();
      case `spec-design`: return `background-color: black; height:${size}px; width:${width}px; font-size:${fontsize}px; padding:${pad}px; ${float}`.htmlSafe();
      case `building`: return `background-color: blue; height:${size}px; width:${width}px; font-size:${fontsize}px; padding:${pad}px; ${float}`.htmlSafe();
      case `testing`: return `background-color: red; height:${size}px; width:${width}px; font-size:${fontsize}px; padding:${pad}px; ${float}`.htmlSafe();
      case `finished`: return `background-color: green; height:${size}px; width:${width}px; font-size:${fontsize}px; padding:${pad}px; ${float}`.htmlSafe();
      default: return ''.htmlSafe() ;
    }
  }),

  _statusText: Ember.computed('status', function() {
    switch (this.get('status')) {
      case `init`: return `Looking for love`.htmlSafe();
      case `spec-design`: return `Creating challenges`.htmlSafe();
      case `building`: return `Tackling challenges`.htmlSafe();
      case `testing`: return `Under review`.htmlSafe();
      case `finished`: return `Ready to use!`.htmlSafe();
      default: return `What?!`.htmlSafe() ;
    }
  })
});
