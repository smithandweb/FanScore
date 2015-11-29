define('fan-score-app/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('fan-score-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('fan-score-app/tests/components/bar-graph.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/bar-graph.js should pass jshint', function (assert) {
    assert.ok(true, 'components/bar-graph.js should pass jshint.');
  });
});
define('fan-score-app/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('fan-score-app/tests/controllers/fan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/fan.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/fan.js should pass jshint.');
  });
});
define('fan-score-app/tests/controllers/team.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/team.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/team.js should pass jshint.');
  });
});
define('fan-score-app/tests/controllers/teams.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/teams.js should pass jshint', function (assert) {
    assert.ok(true, 'controllers/teams.js should pass jshint.');
  });
});
define('fan-score-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('fan-score-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('fan-score-app/tests/helpers/format-dasherize.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/format-dasherize.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/format-dasherize.js should pass jshint.');
  });
});
define('fan-score-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'fan-score-app/tests/helpers/start-app', 'fan-score-app/tests/helpers/destroy-app'], function (exports, _qunit, _fanScoreAppTestsHelpersStartApp, _fanScoreAppTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _fanScoreAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _fanScoreAppTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('fan-score-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('fan-score-app/tests/helpers/resolver', ['exports', 'ember/resolver', 'fan-score-app/config/environment'], function (exports, _emberResolver, _fanScoreAppConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _fanScoreAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _fanScoreAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('fan-score-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('fan-score-app/tests/helpers/start-app', ['exports', 'ember', 'fan-score-app/app', 'fan-score-app/config/environment'], function (exports, _ember, _fanScoreAppApp, _fanScoreAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _fanScoreAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _fanScoreAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('fan-score-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('fan-score-app/tests/integration/components/bar-graph-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('bar-graph', 'Integration | Component | bar graph', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 13
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'bar-graph', ['loc', [null, [1, 0], [1, 13]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'bar-graph', [], [], 0, null, ['loc', [null, [2, 4], [4, 18]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('fan-score-app/tests/integration/components/bar-graph-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components');
  QUnit.test('integration/components/bar-graph-test.js should pass jshint', function (assert) {
    assert.ok(true, 'integration/components/bar-graph-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/models/fan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/fan.js should pass jshint', function (assert) {
    assert.ok(true, 'models/fan.js should pass jshint.');
  });
});
define('fan-score-app/tests/models/fanscore.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/fanscore.js should pass jshint', function (assert) {
    assert.ok(true, 'models/fanscore.js should pass jshint.');
  });
});
define('fan-score-app/tests/models/field.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/field.js should pass jshint', function (assert) {
    assert.ok(true, 'models/field.js should pass jshint.');
  });
});
define('fan-score-app/tests/models/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/game.js should pass jshint', function (assert) {
    assert.ok(true, 'models/game.js should pass jshint.');
  });
});
define('fan-score-app/tests/models/team.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/team.js should pass jshint', function (assert) {
    assert.ok(true, 'models/team.js should pass jshint.');
  });
});
define('fan-score-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/fan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/fan.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/fan.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/fanscore.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/fanscore.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/fanscore.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/team.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/team.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/team.js should pass jshint.');
  });
});
define('fan-score-app/tests/routes/teams.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/teams.js should pass jshint', function (assert) {
    assert.ok(true, 'routes/teams.js should pass jshint.');
  });
});
define('fan-score-app/tests/serializers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/application.js should pass jshint', function (assert) {
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('fan-score-app/tests/serializers/fan.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/fan.js should pass jshint', function (assert) {
    assert.ok(true, 'serializers/fan.js should pass jshint.');
  });
});
define('fan-score-app/tests/serializers/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers');
  QUnit.test('serializers/game.js should pass jshint', function (assert) {
    assert.ok(true, 'serializers/game.js should pass jshint.');
  });
});
define('fan-score-app/tests/test-helper', ['exports', 'fan-score-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _fanScoreAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_fanScoreAppTestsHelpersResolver['default']);
});
define('fan-score-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('fan-score-app/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/adapters/test-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:test', 'Unit | Adapter | test', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('fan-score-app/tests/unit/adapters/test-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/adapters');
  QUnit.test('unit/adapters/test-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/adapters/test-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('fan-score-app/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/controllers/fan-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:fan', 'Unit | Controller | fan', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('fan-score-app/tests/unit/controllers/fan-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/fan-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/fan-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/controllers/team-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:team', 'Unit | Controller | team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('fan-score-app/tests/unit/controllers/team-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/team-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/team-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/controllers/teams-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:teams', 'Unit | Controller | teams', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('fan-score-app/tests/unit/controllers/teams-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers');
  QUnit.test('unit/controllers/teams-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/controllers/teams-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/helpers/format-dasherize-test', ['exports', 'fan-score-app/helpers/format-dasherize', 'qunit'], function (exports, _fanScoreAppHelpersFormatDasherize, _qunit) {

  (0, _qunit.module)('Unit | Helper | format dasherize');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _fanScoreAppHelpersFormatDasherize.formatDasherize)(42);
    assert.ok(result);
  });
});
define('fan-score-app/tests/unit/helpers/format-dasherize-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/format-dasherize-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/helpers/format-dasherize-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/models/fan-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('fan', 'Unit | Model | fan', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('fan-score-app/tests/unit/models/fan-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/fan-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/fan-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/models/fanscore-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('fanscore', 'Unit | Model | fanscore', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('fan-score-app/tests/unit/models/fanscore-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/fanscore-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/fanscore-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/models/field-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('field', 'Unit | Model | field', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('fan-score-app/tests/unit/models/field-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/field-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/field-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/models/game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game', 'Unit | Model | game', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('fan-score-app/tests/unit/models/game-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/game-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/game-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/models/team-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('team', 'Unit | Model | team', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('fan-score-app/tests/unit/models/team-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/team-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/models/team-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/fan-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:fan', 'Unit | Route | fan', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/fan-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/fan-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/fan-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/fanscore-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:fanscore', 'Unit | Route | fanscore', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/fanscore-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/fanscore-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/fanscore-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/index-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/team-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:team', 'Unit | Route | team', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/team-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/team-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/team-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/routes/teams-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:teams', 'Unit | Route | teams', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('fan-score-app/tests/unit/routes/teams-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/teams-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/routes/teams-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('fan-score-app/tests/unit/serializers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/application-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/serializers/fan-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('fan', 'Unit | Serializer | fan', {
    // Specify the other units that are required for this test.
    needs: ['serializer:fan']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('fan-score-app/tests/unit/serializers/fan-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/fan-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/serializers/fan-test.js should pass jshint.');
  });
});
define('fan-score-app/tests/unit/serializers/game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game', 'Unit | Serializer | game', {
    // Specify the other units that are required for this test.
    needs: ['serializer:game']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('fan-score-app/tests/unit/serializers/game-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/serializers');
  QUnit.test('unit/serializers/game-test.js should pass jshint', function (assert) {
    assert.ok(true, 'unit/serializers/game-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('fan-score-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map