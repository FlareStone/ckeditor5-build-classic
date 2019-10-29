/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
// import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import StrikeThroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
// import CodePlugin from '@ckeditor/ckeditor5-basic-styles/src/code';
// import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
// import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
// import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
// import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageResizePlugin from '@ckeditor/ckeditor5-image/src/imageresize';
// import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageTextAlternativePlugin from '@ckeditor/ckeditor5-image/src/imagetextalternative';
// import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import FontFamilyPlugin from '@ckeditor/ckeditor5-font/src/fontfamily';
// import FontSizePlugin from '@ckeditor/ckeditor5-font/src/fontsize';
// import FontColorPlugin from '@ckeditor/ckeditor5-font/src/fontcolor';
// import FontBackgroundColorPlugin from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
// import HighLightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';
// import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
// import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
// import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import LineHeightPlugin from 'ckeditor5-line-height-plugin/src/lineheight';
// import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// import PasteFromOfficePlugin from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import AutoFormatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import TextTransformationPlugin from '@ckeditor/ckeditor5-typing/src/texttransformation';
// import MentionPlugin from '@ckeditor/ckeditor5-mention/src/mention';
// import IndentPlugin from '@ckeditor/ckeditor5-indent/src/indent';
// import IndentBlockPlugin from '@ckeditor/ckeditor5-indent/src/indentblock';
// import HorizontalLinePlugin from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	// EssentialsPlugin,
	// HeadingPlugin,
	// ParagraphPlugin,
	// BoldPlugin,
	// ItalicPlugin,
	// LinkPlugin,
	// ImagePlugin,
	// ImageUploadPlugin,
	// ImageCaptionPlugin,
	// ImageResizePlugin,
	// ImageStylePlugin,
	// ImageTextAlternativePlugin,
	// ImageToolbarPlugin,
	// FontFamilyPlugin,
	// FontSizePlugin,
	// UnderlinePlugin,
	// StrikeThroughPlugin,
	// CodePlugin,
	// FontColorPlugin,
	// FontBackgroundColorPlugin,
	// HighLightPlugin,
	// AlignmentPlugin,
	// ListPlugin,
	// BlockQuotePlugin,
	// LineHeightPlugin,
	// TablePlugin,
	// TableToolbarPlugin,
	// PasteFromOfficePlugin,
	// AutoFormatPlugin,
	// TextTransformationPlugin,
	// MentionPlugin,
	// IndentPlugin,
	// // HorizontalLinePlugin,
	// IndentBlockPlugin,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	// language: 'zh-CN',
	// toolbar: {
	// 	items: [
	// 		'heading',
	// 		'|',
	// 		'fontsize',
	// 		'fontFamily',
	// 		'fontcolor',
	// 		'fontBackgroundColor',
	// 		'|',
	// 		'bold',
	// 		'italic',
	// 		'underline',
	// 		'strikethrough',
	// 		'highlight',
	// 		'code',
	// 		'|',
	// 		'alignment',
	// 		'lineHeight',
	// 		'outdent',
	// 		'indent',
	// 		'|',
	// 		'numberedList',
	// 		'bulletedList',
	// 		'|',
	// 		'link',
	// 		'blockquote',
	// 		'imageUpload',
	// 		'insertTable',
	// 		'horizontalLine',
	// 		'|',
	// 		'undo',
	// 		'redo',
	// 	]
	// },
	// table: {
	// 	contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ],
	// },
	// fontFamily: {
	// 	options: [
	// 		'default',
	// 		'Arial',
	// 		'Times New Roman',
	// 		'monospace',
	// 		'宋体',
	// 		'仿宋',
	// 		'微软雅黑',
	// 		'黑体',
	// 	],
	// },
	// image: {
	// 	// You need to configure the image toolbar, too, so it uses the new style buttons.
	// 	toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
	//
	// 	styles: [
	// 		// This option is equal to a situation where no style is applied.
	// 		'full',
	//
	// 		// This represents an image aligned to the left.
	// 		'alignLeft',
	//
	// 		// This represents an image aligned to the right.
	// 		'alignRight',
	// 	],
	// 	resizeUnit: 'px',
	// },
	// mention: {
	// 	feeds: [
	// 		{
	// 			marker: '@',
	// 			feed: [ '@迪恩', '@塞雷娅', '@青禾', '@圣魈', '@吉姆', '@秀则' ],
	// 			// minimumCharacters: 1,
	// 		},
	// 	],
	// },
	// lineHeight: { // specify your otions in the lineHeight config object. Default values are [ 0, 0.5, 1, 1.5, 2 ]
	// 	options: [ 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3 ]
	// }
};
