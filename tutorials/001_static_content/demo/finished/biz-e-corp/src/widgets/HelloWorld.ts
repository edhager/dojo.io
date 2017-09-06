import { v } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

export default class HelloWorld extends WidgetBase {
	protected render(): DNode {
		return v('h1', { title: 'I am a title!' }, [ 'Biz-E-Bodies' ]);
	}
}