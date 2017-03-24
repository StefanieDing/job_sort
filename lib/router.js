Router.configure({
  // layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  yieldTemplates: {
    navbar: {to: 'navbar'},
    footer: {to: 'footer'},
    sidebar: {to: 'sidebar'},
    about: {to: 'about'},
    profile:{to: 'profile'}
  }
});

// In the map, we set our routes.
Router.map(function () {
  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'masterLayout'
  });

  // Sign In Route
  AccountsTemplates.configureRoute('signIn', {
      name: 'signin',
      path: '/sign-in',
      template: 'signIn',
      layoutTemplate: 'masterLayout',
      redirect: '/home',
  });
  // Sign Up Route
  AccountsTemplates.configureRoute('signUp', {
      name: 'sign-up',
      path: '/sign-up',
      template: 'signUp',
      layoutTemplate: 'masterLayout',
      redirect: '/home',
  });
  // Sign Out Route
  this.route('/sign-out', function(){
      Meteor.logout(function(err) {
          if (err) alert('There was a problem logging you out.');
          Router.go("/");
      });
      Router.go("/");
  });
});