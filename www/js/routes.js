angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.recherche', {
    url: '/recherche',
    views: {
      'tab8': {
        templateUrl: 'templates/recherche.html',
        controller: 'rechercheCtrl'
      }
    }
  })

  .state('tabsController.accueil', {
    url: '/accueil',
    views: {
      'tab1': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('tabsController.ajouterLieuInsolite', {
    url: '/ajouter lieu insolite',
    views: {
      'tab9': {
        templateUrl: 'templates/ajouterLieuInsolite.html',
        controller: 'ajouterLieuInsoliteCtrl'
      }
    }
  })

  .state('ajouterEvenement', {
    url: '/evenement',
    templateUrl: 'templates/ajouterEvenement.html',
    controller: 'ajouterEvenementCtrl'
  })

  .state('tabsController.profil', {
    url: '/profil',
    views: {
      'tab7': {
        templateUrl: 'templates/profil.html',
        controller: 'profilCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.resultats'
      2) Using $state.go programatically:
        $state.go('tabsController.resultats');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/resultats
      /page1/tab8/resultats
  */
  .state('tabsController.resultats', {
    url: '/resultats',
    views: {
      'tab1': {
        templateUrl: 'templates/resultats.html',
        controller: 'resultatsCtrl'
      },
      'tab8': {
        templateUrl: 'templates/resultats.html',
        controller: 'resultatsCtrl'
      }
    }
  })

  .state('tabsController.favorie', {
    url: '/favorie',
    views: {
      'tab6': {
        templateUrl: 'templates/favorie.html',
        controller: 'favorieCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.filterResultas'
      2) Using $state.go programatically:
        $state.go('tabsController.filterResultas');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/filtre
      /page1/tab8/filtre
      /page1/tab6/filtre
  */
  .state('tabsController.filterResultas', {
    url: '/filtre',
    views: {
      'tab1': {
        templateUrl: 'templates/filterResultas.html',
        controller: 'filterResultasCtrl'
      },
      'tab8': {
        templateUrl: 'templates/filterResultas.html',
        controller: 'filterResultasCtrl'
      },
      'tab6': {
        templateUrl: 'templates/filterResultas.html',
        controller: 'filterResultasCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.description'
      2) Using $state.go programatically:
        $state.go('tabsController.description');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/description
      /page1/tab8/description
      /page1/tab6/description
  */
  .state('tabsController.description', {
    url: '/description',
    views: {
      'tab1': {
        templateUrl: 'templates/description.html',
        controller: 'descriptionCtrl'
      },
      'tab8': {
        templateUrl: 'templates/description.html',
        controller: 'descriptionCtrl'
      },
      'tab6': {
        templateUrl: 'templates/description.html',
        controller: 'descriptionCtrl'
      }
    }
  })

  .state('connection', {
    url: '/connection',
    templateUrl: 'templates/connection.html',
    controller: 'connectionCtrl'
  })

  .state('inscription', {
    url: '/inscription',
    templateUrl: 'templates/inscription.html',
    controller: 'inscriptionCtrl'
  })

$urlRouterProvider.otherwise('/page1/accueil')


});