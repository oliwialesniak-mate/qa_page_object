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
    // The test expects a space after "the"
    return 'Click on the ' + this.header.logo;
  }
}

// ArticlePage class extending PageObject
class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url + slug); // URL concatenated and passed to parent
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    // The test expects a space after "the"
    return 'Click on the ' + this.commentButton;
  }

  assertPageOpened() {
    // The test expects a space before "is opened"
    return 'The ' + this.url + ' is opened';
  }
}

// Export classes for testing
module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
