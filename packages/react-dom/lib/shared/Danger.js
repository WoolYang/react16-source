
'use strict';

var DOMLazyTree = require('../utils/DOMLazyTree');

var createNodesFromMarkup = require('../utils//createNodesFromMarkup');

var Danger = {
  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {

    if (typeof markup === 'string') {
      var newChild = createNodesFromMarkup(markup, function emptyFunction(){})[0];
      oldChild.parentNode.replaceChild(newChild, oldChild);
    } else {
      DOMLazyTree.replaceChildWithTree(oldChild, markup);
    }
  }
};

module.exports = Danger;