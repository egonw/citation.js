/**
 * Object containing HTML strings for building JSON and BibTeX. Made to match citeproc, for compatibility.
 *
 * @access protected
 * @memberof Cite.output.dict
 */
const htmlDict = {
  wr_start: '<div class="csl-bib-body">',
  wr_end: '</div>',
  en_start: '<div class="csl-entry">',
  en_end: '</div>',
  ul_start: '<ul style="list-style-type:none">',
  ul_end: '</ul>',
  li_start: '<li>',
  li_end: '</li>'
}

/**
 * Object containing text strings for building JSON and BibTeX. Made to match citeproc, for compatibility.
 *
 * @access protected
 * @memberof Cite.output.dict
 */
const textDict = {
  wr_start: '',
  wr_end: '\n',
  en_start: '',
  en_end: '\n',
  ul_start: '\n',
  ul_end: '',
  li_start: '\t',
  li_end: '\n'
}

/**
 * @namespace dict
 * @memberof Cite.output
 */

export { htmlDict, textDict }
