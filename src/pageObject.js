'use strict';

// Header class
class Header {
  get logo() {
    return 'Conduit logo';
  }
}

// PageObject class
class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the' + this.header.logo; // Removed space before logo
  }
}

// ArticlePage class extending PageObject
class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url + slug); // optional improvement: pass concatenated URL to super
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the' + this.commentButton; // Removed space before button
  }

  assertPageOpened() {
    return 'The ' + this.url + 'is opened'; // Removed space before "is"
  }
}

// Export classes for testing
module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
