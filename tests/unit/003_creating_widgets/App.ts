import * as registerSuite from 'intern!object';
import * as assert from 'intern/chai!assert';
import App from 'site/source/tutorials/003_creating_widgets/demo/finished/biz-e-corp/src/widgets/App';
import harness, { Harness } from '@dojo/test-extras/harness';
import { WidgetProperties } from '@dojo/widget-core/interfaces';

let widgetHarness: Harness<WidgetProperties, typeof App>;
registerSuite({
	name: '003_creating_widgets App widget',

	rendering() {
		const widgetHarness = harness(App);

		assert.ok(false, 'Failed on purpose.');

	}
});
