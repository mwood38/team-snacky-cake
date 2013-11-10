TandemApplication.reopen({
    BookRoute: Ember.Route.extend({
        setupController: function (controller, model) {
            model.set('chaptersOpen', false);
            model.set('currentChapter', 0);
            controller.set('book', model);
        }
    })
});