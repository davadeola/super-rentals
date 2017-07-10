import Ember from 'ember';

export default Ember.Component.extend({
  isShowingImage: false,
  actions: {
    imageShow:function(){
      this.set('isShowingImage', true);
    },
    imageHide:function(){
      this.set('isShowingImage', false);
    }
  }

});
