(this.webpackJsonpHoneyBadgerInstitute=this.webpackJsonpHoneyBadgerInstitute||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/quiz-badger-logo.3ee9ec14.png"},,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),i=(a(12),a(6)),c=a(2),l=a(5),d=a.n(l);function u(e){var t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logo-section"},r.a.createElement("p",null,e.correct),r.a.createElement("img",(t={src:d.a,alt:"Honey Badger Institute Logo"},Object(c.a)(t,"alt","Honey Badger Institute of Higher Learning Logo"),Object(c.a)(t,"aria-label","Honey Badger Institute of Higher Learning Logo"),Object(c.a)(t,"className","logo"),t)),r.a.createElement("h3",null,"Can you please ",r.a.createElement("span",{id:"nowrap"},"The Badger?"))))}function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-section"},r.a.createElement("h2",null,"Honey Badger Institute of Higher Learning")))}function w(e){return r.a.createElement("h2",{className:"progress-header"},"Question ",e.current," of ",e.total)}var m=Object(n.createContext)();function p(){var e=Object(n.useContext)(m).state,t=e.currentQuestion,a=e.questions[t];return r.a.createElement("h1",{className:"question-text"},a.question)}function b(e){var t=["answer"];return e.selected&&t.push("selected"),r.a.createElement("button",{value:e.letter,className:t.join(" "),onClick:function(t){e.dispatch({type:"SET_CURRENT_ANSWER",currentAnswer:t.target.value}),e.dispatch({type:"SET_ERROR",error:""})}},e.letter,". ",e.answer)}function f(){var e=Object(n.useContext)(m),t=e.state,a=e.dispatch,s=t.currentAnswer,o=t.currentQuestion,i=t.questions[o];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{className:"letter",letter:"a",answer:i.answer_a,dispatch:a,selected:"a"===s}),r.a.createElement(b,{className:"letter",letter:"b",answer:i.answer_b,dispatch:a,selected:"b"===s}),r.a.createElement(b,{className:"letter",letter:"c",answer:i.answer_c,dispatch:a,selected:"c"===s}),r.a.createElement(b,{className:"letter",letter:"d",answer:i.answer_d,dispatch:a,selected:"d"===s}))}var _=[{id:1,question:"When running a JavaScript function, what is the difference between scope and context?",answer_a:"Scope is the object that `this` refers to. Context is the environment that the function is written in.",answer_b:"Scope refers to the availability of variables while running. The object within which the function runs is the context. ",answer_c:"Scope refers to the receiver of a function. Context refers to the variables that are available in that scope.",answer_d:"Scope refers to the ability of a function to modify elements outside of its definition. The context is the JavaScript engine that runs the code.",correct_answer:"b"},{id:2,question:"In React, every time the render method in a react component is called...",answer_a:"every DOM element on the entire page will be re-painted",answer_b:"every DOM element referenced by the React component will be re-painted.",answer_c:"only DOM elements with updated content will be re-painted",answer_d:"DOM elements with updated content and any DOM elements refernced by the React component will be re-painted.",correct_answer:"c"},{id:3,question:"Which is true for the React lifecycle method componentDidUpdate?",answer_a:"It is only called on initial render.",answer_b:"It is called immediately after updating occurs, but is not called on the initial render.",answer_c:"It is called immediately after updating occurs, including the initial render.",answer_d:"It can be used to prevent a component from mounting.",correct_answer:"b"},{id:4,question:"What is a Closure in JavaScript?",answer_a:"A collection of all the variables in scope at the time of creation of the function.",answer_b:"A collection of all the variables in the context at the time of creation of the function.",answer_c:"Any function within another function.",answer_d:"A different way of describing a callback.",correct_answer:"a"},{id:5,question:"What are the primitive data types in JavaScript?",answer_a:"String, Number, Boolean, NaN, Object, null, Symbol",answer_b:"String, Number, Boolean, undefined, Object, null, Symbol",answer_c:"String, Number, Boolean, undefined, null, Symbol",answer_d:"String, Number, Boolean, undefined, Object, Symbol",correct_answer:"c"},{id:6,question:"What is the difference between Attributes and Property in JavaScript?",answer_a:"An Property provides more details about an element like id, type, value etc, whereas the Attribute is the value assigned to the Property like type='text' or value='name'.",answer_b:"An Attribute provides more details about an element like id, type, value etc, whereas the Property is the value assigned to the Attrubute like type='text' or value='name'",answer_c:"A Property is any value that belongs to an object, and an Attribute describes it.",answer_d:"Unlike Attritbutes, in general a standard HTML Property automatically becomes a property of DOM objects.",correct_answer:"b"},{id:7,question:"Which of the below are four ways an HTML element can be accessed by JavaScript code?",answer_a:"getElementById, getElementsByClassName, queryTagName, querySelector",answer_b:"getElementById, getElementsByClassName, getElementsByTagName, querySelector",answer_c:"getElementById, getElementByClassName, getElementByTag, querySelector",answer_d:"getElementById, getElementByClassName, getElementByTagName, querySelector",correct_answer:"b"},{id:8,question:"What is the difference between window & document in JavaScript?",answer_a:"While window is a global object which holds variables, functions, history,and location, the document comes under the window and can be considered as the property of the window.",answer_b:"Document and window both are global objects but document is called at runtime.",answer_c:"While document is a global object which holds variables, functions, history,and location, the window comes under the document and can be considered as the property of the document.",answer_d:"The window hold variables and functions whereas the document holds history and location of an object.",correct_answer:"a"},{id:9,question:"In JavaScript, what is the difference in how primitive and object types are passed in functions?",answer_a:"Primitives are passed by value and objects are passed by reference.",answer_b:"There is no difference in how they are passed.",answer_c:"Objects are passed by value and primitive data types are passed by reference.",answer_d:"Primitives can only be passed by value whereas objects can be passed by value or by reference.",correct_answer:"a"},{id:10,question:"Which of the following is not true about 'strict mode' in JavaScript?",answer_a:"It can be enabled by adding \u201cuse strict\u201d at the beginning of a file, a program, or a function.",answer_b:"It enforces strict limits on the number of variables you can use in any given file.",answer_c:"It enables better error-checking into JavaScript code.",answer_d:"You cannot use implicitly declared variables or add a property to an object that is not extensible.",correct_answer:"b"},{id:11,question:"What is the difference between Call and Apply in JavaScript?",answer_a:"Apply creates a copy of the function and sets the this keyword.",answer_b:"Call accepts an array of arguments while Apply accepts comma-separated values.",answer_c:"Apply accepts accepts an array of arguments instead of comma separated values.",answer_d:"Call creates a copy of the function and sets the this keyword.",correct_answer:"c"},{id:12,question:"In JavaScript, what is the difference between event.preventDefault() and event.stopPropagation() methods?",answer_a:"event.preventDefault() can only be used with controlled components.",answer_b:"They are the same.",answer_c:"The event.stopPropagation() method prevents the default behavior of an element. The event.preventDefault() method stops the propogation of an event in the bubbling or capturing phase.",answer_d:"The event.preventDefault() method prevents the default behavior of an element. The event.stopPropagation() method stops the propogation of an event in the bubbling or capturing phase.",correct_answer:"d"},{id:13,question:"In JavaScript, what is event.currentTarget?",answer_a:"It is the element on which the event occurred or the element that triggered the event.",answer_b:"It is the element on which we attach the event handler explicitly.",answer_c:"It is the element event that is handled during the current event loop.",answer_d:"It is the parent element of the elment where the event occurred.",correct_answer:"b"},{id:14,question:"Whis of these statements about var, let and const are not true?",answer_a:"var declarations are globally scoped or function scoped while letand const are block scoped.",answer_b:"var variables can be updated by value and re-declared within their scopes, but let variables cannot be re-declared. const variables can neither be updated nor re-declared.",answer_c:"All three of these keywords are hoisted to the top of their scope and are initialized with undefined.",answer_d:"While var and let can be declared without being initialized, const must be initialized during declaration.",correct_answer:"c"},{id:15,question:"Which of the following statements about ES6 Promise objects are true?",answer_a:"Promises allow the writing of asynchronous JavaScript code in a linear manner.",answer_b:"Promises prevent asynchronous functions from executing and transforms them into synchronous functions.",answer_c:"Promises create a private scope around a function, preventing it from making changes to surround variables.",answer_d:" Promises create the need for deeply nested callbacks for asynchronous operations.",correct_answer:"a"},{id:16,question:"Which of the following is not a reserved work in JavaScript?",answer_a:"const",answer_b:"type of",answer_c:"void",answer_d:"class",correct_answer:"b"},{id:17,question:"What is the difference between function declaration and function expression?",answer_a:"Function expressions load only when the interpreter reaches that line of code, while function declarations are hoisted to the top of other code.",answer_b:"Function declarations are not hoisted to the top of other code while expressions are.",answer_c:"Unlike function expressions, function declarations retain a copy of the local variables from the scope where they were defined.",answer_d:"Function declarations and function expressions are the same.",correct_answer:"a"},{id:18,question:"Which one of these is not a Hook?",answer_a:"useState()",answer_b:"useConst()",answer_c:"useReducer()",answer_d:"useEffect()",correct_answer:"b"},{id:19,question:"Which statement about Hooks is not true?",answer_a:"Hooks are 100% backwards-compatible and can be used side by side with classes.",answer_b:"Hooks are still in beta and not available yet.",answer_c:"Hooks are completely opt-in; there is no need to rewrite existing code.",answer_d:"Hooks are completely opt-in; there is no need to rewrite existing code.",correct_answer:"All of the above."},{id:20,question:"What Hook should be used for data fetching?",answer_a:"useDataFetch()",answer_b:"useAPI()",answer_c:"useEffect()",answer_d:"useRequest()",correct_answer:"c"},{id:21,question:"What is functional programming, as opposed to object-oriented programming?",answer_a:"Process that can cause side-effects, as long as they are immutable.",answer_b:"Process of composing function imperatively, avoiding shared state, mutable data, and side-effects",answer_c:"Process of composing pure functions, avoiding shared state, mutable data, and side-effects",answer_d:"OOP tends to be radically simplified and easily recomposed for more generally reusable code compared to functional programming.",correct_answer:"c"},{id:22,question:"What is the difference between classical inheritance and prototypal inheritance?",answer_a:" The first inherits from classes, like a blueprint, while the latter inherits directly from other objects. ",answer_b:"Class inheritance always instatiated using a factory function.",answer_c:" The first inherits from objects, like a blueprint, while the second inherits from prototypal classes.",answer_d:"Unlike the former, the latter is typically instantiated via constructor functions with the `new` keyword. ",correct_answer:"a"},{id:23,question:"Which of the following are JavaScript design patterns?",answer_a:"Module, Prototype, Observer, Singles",answer_b:"Modular, Factorial, Observer, Singleton",answer_c:"Modular, Prototypical, Observer, Singleton",answer_d:"Module, Prototype, Observer, Singleton",correct_answer:"d"},{id:24,question:"Which of the following is not a way to empty an array in JavaScript?",answer_a:"Assigning an empty array [ ]",answer_b:"Assigning array length to 0",answer_c:"Using slice array function array.slice(0, array.length)",answer_d:"Iterating through array, popping elements out of it",correct_answer:"c"},{id:25,question:"Which of the following is not a CSS framework?",answer_a:"Bootstrap",answer_b:"Foundations",answer_c:"Foundation",answer_d:"Gumby",correct_answer:"b"},{id:26,question:"In CSS, what is the difference between the usage of an ID and a Class?",answer_a:"An ID is a collective way to identify an element.",answer_b:"ID and Class are both collective ways to identify a DOM element.",answer_c:"ID's are not unique and multiple elements can have the same ID.",answer_d:"Classes are not unique and multiple elements can have the same class.",correct_answer:"d"},{id:27,question:"What is the correct order of CSS Specificity?",answer_a:"DOM Elements, ID, Class, Attribute",answer_b:"Class, ID, Attribute, The Elements",answer_c:"Style Attribute, ID, Class/Pseudo-Class/Attribute, Element",answer_d:"Pseudo-Class, ID, Class, Element",correct_answer:"c"},{id:28,question:"How many numbers are used to calculate CSS specificity?",answer_a:"2",answer_b:"3",answer_c:"4",answer_d:"6",correct_answer:"c"},{id:29,question:"In CSS, name three types of selectors?",answer_a:"ID, tag, Class",answer_b:"ID-tag, Class, Name",answer_c:"Descendant Combinator, ID, Pseudo-Descendant",answer_d:"Descendant Combinator, ID, Pseudo-Class",correct_answer:"d"},{id:30,question:"Which is the correct HTML for referring to an external style sheet?",answer_a:"<style src='mystyle.css'>",answer_b:"<style rel='stylesheet' type='text / css' href='mystyle.css'>",answer_c:"<link rel='stylesheet' type='text / css' href='mystyle.css'>",answer_d:"<link>mystyle.css</link>",correct_answer:"c"},{id:31,question:"What is the correct syntax for comments in CSS?",answer_a:"/* */ ",answer_b:"<* *>",answer_c:"\x3c!-- --\x3e",answer_d:"//",correct_answer:"a"},{id:32,question:"What CSS would you use to remove the underline from a hyperlink?",answer_a:" a {text-decoration:none;}",answer_b:" a {christmas-decoration:none;}",answer_c:" a {decoration:none;}",answer_d:" a {underline:none;}",correct_answer:"a"},{id:33,question:"What does the BEM methodology stand for?",answer_a:"Block, Element, Model",answer_b:"Block, Element, Modifier",answer_c:"Block, Elements, Models",answer_d:"Badgers, Eat, Mongooses",correct_answer:"b"},{id:34,question:"Which is the appropriate CSS syntax for a general sibling combinator?",answer_a:"Which is the appropriate CSS syntax for a general sibling combinator?",answer_b:"general-sibling p {  }",answer_c:"p ~ p {  }",answer_d:"p & p {  }",correct_answer:"c"},{id:35,question:"In JavaScript, what function do you use to convert a string into any base integer in JavaScript?",answer_a:"parseInteger()",answer_b:"parseInt()",answer_c:"parseStringtoInt()",answer_d:"parseIntBase()",correct_answer:"b"},{id:36,question:"In JavaScript, explain the difference between '==' and '==='?",answer_a:"They are functionally the same.",answer_b:"The former checks for equality while the latter checks if value is an Integer.",answer_c:"The former checks only for equality in value whereasthe latter returns false if either the value or the type of the two variables are different.",answer_d:"The former checks only for equality in value whereasthe latter returns true if either the value or the type of the two variables are different.",correct_answer:"c"},{id:37,question:"In JavaScript, what would be the result of 3+2+'7'?",answer_a:"12",answer_b:"327",answer_c:"57",answer_d:"NaN",correct_answer:"c"},{id:38,question:"In CSS, what is the difference between visibility:hidden vs. display: none?",answer_a:"They are functionally the same.",answer_b:"visibility:hidden removes the element from the DOM and does not show it to the user. display:none displays nothing and will not be available in the DOM.",answer_c:"visibility:hidden neither occupies the space nor is displayed to the user. display:none will not be available in the DOM but can display.",answer_d:"visibility:hidden keeps the element in the page but does not show it to the user. display:none will not be available in the DOM.",correct_answer:"d"},{id:39,question:"In JavaScript, which of the following is the best way to determine if a value is a number?",answer_a:"parseInt()",answer_b:"isNaN()",answer_c:"isNum()",answer_d:"Number()",correct_answer:"b"},{id:40,question:"In JavaScript, which of the following is not a state in Promises?",answer_a:"fulfilled",answer_b:"rejected",answer_c:"settled",answer_d:"await",correct_answer:"d"},{id:41,question:"What of the following is an accurate description of local storage, as opposed to session storage?",answer_a:"Any changes made are saved and available for the current page in that tab until it is closed.",answer_b:"Any changes made are saved and available for the current and next session.",answer_c:"It is never deleted, and changes made are saved and available for all current and future visits to the site.",answer_d:"It persists until explicitly deleted, and changes made are saved and available for all current and future visits to the site.",correct_answer:"d"},{id:42,question:"Which of the following is not used to make an API call in JavaScript?",answer_a:"Axios",answer_b:"APIHttpRequest",answer_c:"fetch",answer_d:"XMLHttpRequest",correct_answer:"b"},{id:43,question:"Which of the following is not an API verb type in JavaScript?",answer_a:"POST",answer_b:"GET",answer_c:"DELETE",answer_d:"FETCH",correct_answer:"d"},{id:44,question:"What are the case types of the following variable names, respectively: randomNumber, random-number, RandomNumber",answer_a:"camel, camel-kebab, snake",answer_b:"camel, kebab, pascal",answer_c:"camel, snake, bactrian camel",answer_d:"camel, snake, upper camel",correct_answer:"b"},{id:45,question:"Which statment is true about prototypal Inheritance in JavaScript?",answer_a:"Every object has a prototype property, where you can add methods to it and when you create another object from these, the newly created object will automatically inherit its parent\u2019s property.",answer_b:"Prototypal inheritance is a way for one object's class to extend another class. ",answer_c:"Proptypes inherit from classes and create subclass relationships.",answer_d:"Class taxonomies are an automatic side-effect of prototypal inheritance.",correct_answer:"a"}];var y=function(e){for(var t,a=[],n=_.length;a.length<5;){var r=(t=n,Math.floor(Math.random()*Math.floor(t)));a.includes(_[r])||a.push(_[r])}return a}(),v=["You do know you were supposed to select the CORRECT answers, right?","There are other careers than programming. Maybe try, say, being a cobbler?","They say there are no dumb questions. However, there are dumb answers.","Went to public school, huh?","You have failed the badger.","Not to damn you with faint praise, but... YOU BLEW IT.","There is still time to sign up for Housesitter Bootcamp. Just FYI.","With enough practice and study, you might not fail as horribly next time.","At the Honey Badger Institute of Higher Learning, we value everyone's effort. Except when they answer like you just did.","Socrates said 'The only true wisdom is in knowing you know nothing.' You appear to be very, very wise.","Socrates said 'Education is the kindling of a flame, not the filling of a vessel.' Your answers lit the vessel on fire and sank it."];var g=function(){var e=v.length,t=Math.floor(Math.random()*e);return v[t]}(),E=(a(13),a(1));function S(e,t){switch(t.type){case"SET_CURRENT_ANSWER":return Object(E.a)({},e,{currentAnswer:t.currentAnswer});case"SET_CURRENT_QUESTION":return Object(E.a)({},e,{currentQuestion:t.currentQuestion});case"SET_ERROR":return Object(E.a)({},e,{error:t.error});case"SET_SHOW_RESULTS":return Object(E.a)({},e,{showResults:t.showResults});case"SET_ANSWERS":return Object(E.a)({},e,{answers:t.answers});case"RESET_QUIZ":return Object(E.a)({},e,{answers:[],currentQuestion:0,currentAnswer:"",showResults:!1,error:""});default:return e}}function I(){var e=y,t=0,a={questions:e,currentQuestion:0,currentAnswer:"",answers:[],showResults:!1,error:""},s=Object(n.useReducer)(S,a),o=Object(i.a)(s,2),c=o[0],l=o[1],d=c.currentQuestion,b=c.currentAnswer,_=c.answers,v=c.showResults,E=c.error,I=e[d];return v?r.a.createElement("div",{className:"container results"},r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement("ul",null,function(){var a,n=_.map((function(a){var n=e.find((function(e){return e.id===a.questionId}));return r.a.createElement("div",{key:n.id},n.question," | ",function(e,a){return e.correct_answer===a.answer?(t++,r.a.createElement("span",{className:"correct",id:"nowrap"},"Guessed Correctly")):r.a.createElement("span",{className:"failed",id:"nowrap"},"Utter Failure")}(n,a))}));return a=t<5?g:"You have pleased the badger.",r.a.createElement("div",null,r.a.createElement("h4",null,"You got ",t," correct"),r.a.createElement("h5",null,a),r.a.createElement("hr",null),n)}()),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){l({type:"RESET_QUIZ"})}},"Start New Quiz")):r.a.createElement(m.Provider,{value:{state:c,dispatch:l}},r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(w,{total:e.length,current:d+1}),r.a.createElement(p,null),function(){if(E)return r.a.createElement("div",{className:"error"}," ")}(),r.a.createElement(f,null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t={questionId:I.id,answer:b};b?(_.push(t),l({type:"SET_ANSWERS",answers:_}),l({type:"SET_CURRENT_ANSWER",currentAnswer:""}),d+1<e.length?l({type:"SET_CURRENT_QUESTION",currentQuestion:d+1}):l({type:"SET_SHOW_RESULTS",showResults:!0})):l({type:"SET_ERROR",error:"Select an option, dagnabbit!"})}},"Confirm and continue")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f5bc374f.chunk.js.map