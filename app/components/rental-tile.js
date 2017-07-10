import Ember from 'ember';

export default Ember.Component.extend({
  isShowingImage: false,
  actions: {
    imageShow:function(){
      this.set('isShowingImage', true);
    },
    imageHide:function(){
      this.set('isShowingImage', false);
    },

    delete: function(rental){
      if (confirm("Are you sure you want to leave?")) {
        this.sendAction('destroyRental', rental);//NB comma between destroyRental and rental
      }
    }
  }



});
