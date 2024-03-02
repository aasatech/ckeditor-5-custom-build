/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import {
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { CKFinder } from "@ckeditor/ckeditor5-ckfinder";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/pluginns/installing-plugins.html for details.


const csrfMeta = document.querySelector('meta[name="csrf-token"]');
const csrfToken = csrfMeta ? csrfMeta.getAttribute('content') : '';

class BaseEditor extends ClassicEditor {
	public static override builtinPlugins = [
		Alignment,
		AutoLink,
		Autoformat,
		Autosave,
		BlockQuote,
		Bold,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		Heading,
		Highlight,
		HorizontalLine,
		Image,
		ImageCaption,
		ImageInsert,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		List,
		ListProperties,
		MediaEmbed,
		MediaEmbedToolbar,
		Mention,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		Strikethrough,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Underline,
		Undo,
		WordCount,
		CKFinder
	];


	public static override defaultConfig: EditorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'heading',
				'bold',
				'underline',
				'italic',
				'link',
				'removeFormat',
				'strikethrough',
				'fontColor',
				'fontBackgroundColor',
				'fontFamily',
				'fontSize',
				'highlight',
				'|',
				'bulletedList',
				'todoList',
				'numberedList',
				'|',
				'alignment',
				'outdent',
				'indent',
				'|',
				'imageUpload',
				'imageInsert',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'|',
				'selectAll',
				'findAndReplace',
				'horizontalLine',
				"ckfindr"
			]
		},
		language: 'en',
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		},
		image: {
			toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
		},
		simpleUpload: {
			uploadUrl: '/uploads',
			// headers: {
			// 	'X-CSRF-TOKEN': csrfToken,
			// }
		},
		fontFamily: {
			options: [
				'default',
				'Ubuntu, Arial, sans-serif',
				'Ubuntu Mono, Courier New, Courier, monospace',
				'NotoSansCJKjp-Black',
				'NotoSansCJKjp-Bold',
				'NotoSansCJKjp-DemiLight',
				'NotoSansCJKjp-Light',
				'NotoSansCJKjp-Medium',
				'NotoSansCJKjp-Regular',
				'NotoSansCJKjp-Thin',
				'NotoSansMonoCJKjp-Bold',
				'NotoSansMonoCJKjp-Regular'
			]
		},
		fontColor: {
			colors: [
				{
					color: '#000000',
					label: 'Black'
				},
				{
					color: '#424242',
					label: 'Dim grey'
				},
				{
					color: '#757575',
					label: 'Grey'
				},
				{
					color: '#BDBDBD',
					label: 'Light grey'
				},
				{
					color: '#fff',
					label: 'White',
					hasBorder: true
				},
				{
					color: '#D50000',
					label: 'Red'
				},
				{
					color: '#E91E63',
					label: 'Pink'
				},
				{
					color: '#9C27B0',
					label: 'Purple'
				},
				{
					color: '#3F51B5',
					label: 'Indigo'
				},
				{
					color: '#2196F3',
					label: 'Blue'
				},
				{
					color: '#03A9F4',
					label: 'Light blue'
				},
				{
					color: '#018D00',
					label: 'Green'
				},
				{
					color: '#AEEA00',
					label: 'Light green'
				},
				{
					color: '#FFEB3B',
					label: 'Yellow'
				},
				{
					color: '#FF5722',
					label: 'Orange'
				}
			]
		},
	};
}
