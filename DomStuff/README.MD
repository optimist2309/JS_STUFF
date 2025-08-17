What is the DOM?
DOM stands for Document Object Model, and it is basically a structured representation of HTML documents. The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them. For example, we will be able to change text, modify HTML attributes, and also change CSS styles from our JavaScript. Therefore, the DOM is essentially a connection point between HTML documents and JavaScript code.

The DOM is automatically created by the browser as soon as the HTML page loads. It is stored in a tree structure. In this tree, each HTML element is represented as one object.

Understanding the DOM Tree Structure
Let's take a look at a simple HTML document and its corresponding DOM tree. The DOM tree is a hierarchical structure similar to a family tree. We use terms such as child element, parent element, and sibling element when discussing the DOM tree and DOM manipulation.

For each element in the HTML, there is one element node in the DOM tree. We can access and interact with each of these nodes using JavaScript.

The DOM always starts with the document object at the very top. The document is a special object accessible in JavaScript and serves as the entry point into the DOM. For example, the querySelector method is available on the document object, which is why we say that document is the entry point to the DOM because we need it to start selecting elements.

The first child element of document is usually the html element, which is the root element in all HTML documents. The html element typically has two child elements: head and body. These are adjacent elements in the HTML and siblings in the DOM tree.

As we go deeper into the nested HTML structure, more child elements are added to the DOM tree. Inside head and body, there are more child elements, and these sections themselves have child elements. For example, the first paragraph has a child which is a link element. This way, all HTML elements are represented in the DOM tree.

Beyond Element Nodes
A DOM tree contains more than just element nodes. It also includes nodes for all the text, comments, and other content because the rule is that whatever is in the HTML document must also be in the DOM. Thus, the DOM is a complete representation of the HTML document, allowing us to manipulate it in complex ways.

Clarifying Common Confusions
Many beginners believe that the DOM and all the methods and properties used to manipulate it, such as document or querySelector, are part of JavaScript. However, this is not the case. JavaScript is a dialect of the ECMAScript specification, and DOM-related features are not included in it.

Up to this point, we have only used the JavaScript language itself. Starting in this section, we will use JavaScript in a browser environment to manipulate webpages that are displayed and rendered in the browser, just like any normal website.

You might ask, "If the DOM is not part of the JavaScript language, then how does this all work?" The DOM and DOM methods are actually part of something called the Web APIs. Web APIs are libraries that browsers implement and that we can access from our JavaScript code. API stands for Application Programming Interface.

Web APIs are libraries also written in JavaScript and are automatically available for us to use. This happens behind the scenes; we do not have to import or do anything.

There is an official DOM specification that browsers implement, which is why DOM manipulation works the same in all browsers.

Besides the DOM, there are many more Web APIs, such as timers, the fetch API, and many others.
