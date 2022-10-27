(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports=[{id:1,title:"Blank_Questions",body:"This quiz is full of blank questions and is not published",published:!1,questionList:[{id:1,body:"",type:"multiple_choice_question",options:[],expected:"",points:1,published:!1},{id:47,body:"",type:"multiple_choice_question",options:[],expected:"",points:1,published:!1},{id:2,body:"",type:"short_answer_question",options:[],expected:"",points:1,published:!1}]},{id:2,title:"Simple_Questions",body:"This quiz is full of simple questions and is published",published:!0,questionList:[{id:1,body:"What is 2+2?",type:"short_answer_question",options:[],expected:"4",points:1,published:!0},{id:2,body:"What is the last letter of the English alphabet?",type:"short_answer_question",options:[],expected:"Z",points:1,published:!1},{id:5,body:"Which of these is a color?",type:"multiple_choice_question",options:["red","apple","firetruck"],expected:"red",points:1,published:!0},{id:9,body:"What shape can you make with one line?",type:"multiple_choice_question",options:["square","triangle","circle"],expected:"circle",points:2,published:!1}]},{id:3,title:"Trivia_Questions",body:"This quiz is full of trivia questions and is published",published:!0,questionList:[{id:1,body:"What is the name of the UD Mascot?",type:"multiple_choice_question",options:["Bluey","YoUDee","Charles the Wonder Dog"],expected:"YoUDee",points:7,published:!1},{id:2,body:"What is the University of Delaware's motto?",type:"multiple_choice_question",options:["Knowledge is the light of the mind","Just U Do it","Nothing, what's the motto with you?"],expected:"Knowledge is the light of the mind",points:3,published:!1},{id:3,body:"How many goats are there usually on the Green?",type:"multiple_choice_question",options:["Zero, why would there be goats on the green?","18420","Two"],expected:"Two",points:10,published:!1}]},{id:4,title:"Empty_Questions",body:"This quiz is full of empty questions and is published",published:!0,questionList:[{id:1,body:"This question is not empty, right?",type:"multiple_choice_question",options:["correct","it is","not"],expected:"correct",points:5,published:!0},{id:2,body:"",type:"multiple_choice_question",options:["this","one","is","not","empty","either"],expected:"one",points:5,published:!0},{id:3,body:"This questions is not empty either!",type:"short_answer_question",options:[],expected:"",points:5,published:!0},{id:4,body:"",type:"short_answer_question",options:[],expected:"Even this one is not empty",points:5,published:!0},{id:5,body:"",type:"short_answer_question",options:[],expected:"",points:5,published:!1}]},{id:5,title:"Simple_Questions2",body:"This quiz is the second full of simple questions and is published",published:!0,questionList:[{id:478,body:"How many students are taking CISC275 this semester?",type:"short_answer_question",options:[],expected:"90",points:53,published:!0},{id:1937,body:"On a scale of 1 to 10, how important is this quiz for them?",type:"short_answer_question",options:[],expected:"10",points:47,published:!0},{id:479,body:"Is it technically possible for this quiz to become sentient?",type:"short_answer_question",options:[],expected:"Yes",points:40,published:!0},{id:777,body:"If this quiz became sentient, would it pose a danger to others?",type:"short_answer_question",options:[],expected:"Yes",points:60,published:!0},{id:1937,body:"Is this quiz listening to us right now?",type:"short_answer_question",options:[],expected:"Yes",points:100,published:!0}]}]},24:function(e,t,n){e.exports=n(42)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(9),o=n.n(s),l=(n(29),n(6)),c=(n(30),n(11)),u=n(1),r=n(46),d=(n(31),function(e){var t=e.quiz,n=e.handleClick,i=t.questionList.filter(function(e){return t.published&&e.published||!t.published});return a.a.createElement("div",{className:"quiz_view_card"},a.a.createElement("div",{className:"d-flex align-items-baseline"},a.a.createElement("h3",{className:"title",onClick:function(){n(t.id)}},t.title),a.a.createElement("p",null,i.length," question",1!==i.length?"s":"")),a.a.createElement("p",null,t.body))}),p=(n(32),n(33),n(45)),m=(n(34),function(e){var t=e.index,n=e.question,i=e.submitted,s=e.handleSubmit,o=e.addPoints,l=e.editQuestionSub,c=function(e){i||l(n.id,e.target.value)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("div",{className:"question"},a.a.createElement("div",{className:"question_header"},a.a.createElement("h4",{"data-testid":"question_body"},t+1,". ",n.body),a.a.createElement("h4",null,n.points," pt",1!==n.points?"s":"")),"f",a.a.createElement("div",{className:"answer_box"},"short_answer_question"===n.type&&a.a.createElement(p.a.Group,{controlId:"formShortAnswerBox"},a.a.createElement(p.a.Control,{"data-testid":"select-option",value:n.submission,onChange:c})),"multiple_choice_question"===n.type&&a.a.createElement("div",null,n.options.map(function(e,i){return a.a.createElement(p.a.Check,{type:"checkbox",name:"questionChoice"+t,key:e+" | "+i,label:e,value:e,checked:n.submission===e,onChange:c})})),a.a.createElement("div",{className:"sub_check"},a.a.createElement("h2",{className:i?"":"hidden"},n.submission===n.expected?"\u2714\ufe0f":"\u274c"),a.a.createElement(r.a,{disabled:i,className:"submit_btn",onClick:function(){s(t),n.submission===n.expected&&o(5)}},"Submit")))))}),h=function(e){var t=e.quiz,n=e.editQuiz,s=e.resetView,o=e.switchEdit,d=t.questionList.filter(function(e){return t.published&&e.published||!t.published}),p=Object(i.useState)(0),h=Object(l.a)(p,2),b=h[0],E=h[1],f=Object(i.useState)(new Array(d.length)),q=Object(l.a)(f,2),_=q[0],y=q[1],v=function(e){var t=Object(c.a)(_);t.splice(e,3,!0),y(t)},w=d.reduce(function(e,t){return e+t.points},0),g=function(e){E(function(t){return t+e})},x=function(){console.log("daf"),y(new Array(d.length)),n(t.id,Object(u.a)({},t,{questionList:t.questionList.map(function(e){return Object(u.a)({},e,{submission:""})})})),E(0)},z=function(e,i){n(t.id,Object(u.a)({},t,{questionList:t.questionList.map(function(t){return e===t.id?Object(u.a)({},t,{submission:i}):Object(u.a)({},t)})}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},a.a.createElement("div",{className:"d-flex align-items-baseline"},a.a.createElement("h1",{className:"title"},t.title),a.a.createElement("p",null,d.length," question",1!==d.length?"s":"")),a.a.createElement("div",null,a.a.createElement(r.a,{className:"esc_button text-align-center",variant:"warning",onClick:function(){x(),o()}},"Edit"),a.a.createElement(r.a,{className:"esc_button text-align-center",variant:"danger",onClick:s},"Exit"))),a.a.createElement("p",{className:"desc"},t.body),d.map(function(e,n){return a.a.createElement(m,{key:t.id+"|"+e.id,index:n,question:e,submitted:_[n],handleSubmit:v,addPoints:g,editQuestionSub:z})}),a.a.createElement("hr",null),a.a.createElement("div",{className:"footer"},a.a.createElement(r.a,{variant:"danger",onClick:x},"Reset"),a.a.createElement("span",{className:"score_report"},b,"/",w)))},b=(n(38),function(e){var t=e.index,n=e.lastIndex,s=e.question,o=e.editQuestion,d=e.removeQuestion,m=e.swapQuestion,h=Object(i.useState)(s.options.findIndex(function(e){return s.expected===e})),b=Object(l.a)(h,2),E=b[0],f=b[1],q=function(e){var t=parseInt(e.target.value);f(t),o(s.id,Object(u.a)({},s,{expected:s.options[t]}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement("div",{className:"edit_question"},a.a.createElement("div",{className:"edit_title_row"},a.a.createElement("div",{className:"edit_title_box"},a.a.createElement("h4",null,t+1,". "),a.a.createElement(p.a.Group,{className:"title_input",controlId:"editTitleFormId"},a.a.createElement(p.a.Control,{value:s.body,"data-testid":"edit_question_title",onChange:function(e){o(s.id,Object(u.a)({},s,{body:e.target.value}))}}))),a.a.createElement("div",{className:"edit_title_box"},a.a.createElement(p.a.Group,{className:"points_input",controlId:"editPointsFormId"},a.a.createElement(p.a.Control,{value:s.points,type:"number",onChange:function(e){s.points=parseInt(e.target.value),o(s.id,s)}})),a.a.createElement("h4",null,"pt",1!==s.points?"s":""))),a.a.createElement("div",{className:"center_section"},a.a.createElement("div",{className:"edit_answer_box"},a.a.createElement("div",{className:"type_form"},a.a.createElement(p.a.Group,{controlId:"questionTypeFormId"},a.a.createElement(p.a.Label,null,"Type: "),a.a.createElement(p.a.Select,{className:"type_dropdown",value:s.type,onChange:function(){f(0),o(s.id,Object(u.a)({},s,{type:"multiple_choice_question",expected:"Example Answer",options:Array(3).fill("Example Answer")}))}},a.a.createElement("option",{"data-testid":"question_type_dropdown_"+t,value:"multiple_choice_question"},"Multiple Choice"),a.a.createElement("option",{"data-testid":"question_type_dropdown_"+t,value:"short_answer_question"},"Short Answer"))),"multiple_choice_question"===s.type&&a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a.Group,{controlId:"editNumChoicesId"},a.a.createElement(p.a.Label,null,"Choices: "),a.a.createElement(p.a.Control,{className:"num_choices",value:s.options.length,type:"number",onChange:function(e){f(0);var t=parseInt(e.target.value)<1?1:parseInt(e.target.value);o(s.id,Object(u.a)({},s,{type:"multiple_choice_question",expected:"Example Answer",options:Array(t).fill("Example Answer")}))}})))),a.a.createElement("div",null,"short_answer_question"===s.type&&a.a.createElement(p.a.Group,{controlId:"formEditShortExpectedBox"},a.a.createElement(p.a.Label,null,"Answer:"),a.a.createElement(p.a.Control,{value:s.expected,onChange:function(e){o(s.id,Object(u.a)({},s,{expected:e.target.value}))}})),"multiple_choice_question"===s.type&&a.a.createElement(p.a.Group,{controlId:"formEditMultipleExpectedBox"},a.a.createElement(p.a.Label,null,"Answer:"),s.options.map(function(e,n){return a.a.createElement("div",{key:n,className:"radio_question_box"},a.a.createElement(p.a.Check,{type:"radio",name:"questionChoice"+t,value:n,checked:E===n,onChange:q}),a.a.createElement(p.a.Control,{name:"questionChoice"+t,value:e,onChange:function(e){!function(e,t){var n=Object(c.a)(s.options);n.splice(t,1,e.target.value),o(s.id,Object(u.a)({},s,{options:n,expected:E===t?e.target.value:s.expected}))}(e,n)}}))})))),a.a.createElement("div",{className:"swap_button_container"},a.a.createElement(r.a,{disabled:0===t,className:"swap_button",onClick:function(){m(t,t-1)}},"\u25b2"),a.a.createElement(r.a,{disabled:t===n,className:"swap_button",onClick:function(){m(t,t+1)}},"\u25bc"))),a.a.createElement("div",{className:"edit_question_footer"},a.a.createElement(p.a.Check,{className:"published_question_check","data-testid":"question_published_check",type:"checkbox",id:"is_question_published_check",label:"Published",checked:s.published,onChange:function(e){o(s.id,Object(u.a)({},s,{published:e.target.checked}))}}),a.a.createElement(r.a,{variant:"danger",onClick:function(){d(s.id)}},"Delete"))))}),E=(n(39),function(e){var t=e.quiz,n=e.editQuiz,s=e.deleteQuiz,o=e.switchEdit,d=e.resetView,m=Object(i.useState)(Object(u.a)({},t)),h=Object(l.a)(m,2),E=h[0],f=h[1],q=function(e,t){f(Object(u.a)({},E,{questionList:E.questionList.map(function(n){return e===n.id?Object(u.a)({},t):n})}))},_=function(e){f(Object(u.a)({},E,{questionList:E.questionList.filter(function(t){return e!==t.id})}))},y=function(e,t){f(Object(u.a)({},E,{questionList:E.questionList.map(function(n,i){return i===e?E.questionList[t]:i===t?E.questionList[e]:n})}))};return a.a.createElement("div",null,a.a.createElement("div",{className:"edit_header"},a.a.createElement(p.a.Group,{controlId:"formEditQuizId"},a.a.createElement("div",{className:"title_published_flex"},a.a.createElement("div",{className:"edit_title_area"},a.a.createElement(p.a.Label,null,"Title: "),a.a.createElement(p.a.Control,{value:E.title,onChange:function(e){return f(Object(u.a)({},E,{title:e.target.value}))}})),a.a.createElement(p.a.Check,{className:"published_check",type:"checkbox",id:"is-published_check",label:"Quiz Published","data-testid":"Quiz Published",checked:E.published,onChange:function(e){f(Object(u.a)({},E,{published:e.target.checked}))}})),a.a.createElement(p.a.Label,null,"Description: "),a.a.createElement(p.a.Control,{as:"textarea",rows:3,value:E.body,onChange:function(e){return f(Object(u.a)({},E,{body:e.target.value}))}}))),a.a.createElement("div",null,E.questionList.map(function(e,t){return a.a.createElement(b,{key:E.id+"|"+e.id,index:t,lastIndex:E.questionList.length-1,question:e,editQuestion:q,removeQuestion:_,swapQuestion:y})})),a.a.createElement("hr",null),a.a.createElement("div",null,a.a.createElement(r.a,{className:"add_question_button",onClick:function(){f(Object(u.a)({},E,{questionList:[].concat(Object(c.a)(E.questionList),[{id:E.questionList.length,body:"Example Question",type:"short_answer_question",options:[],submission:"",expected:"Example Answer",points:1,published:!1}])}))}},"Add Question"),a.a.createElement("div",{className:"edit_footer"},a.a.createElement("div",null,a.a.createElement(r.a,{variant:"success",className:"save_edit_btn",onClick:function(){!function(){var e=Object(u.a)({},E,{title:"spam"});f(e),n(t.id,E)}(),o()}},"Save"),a.a.createElement(r.a,{variant:"warning",onClick:o},"Cancel")),a.a.createElement(r.a,{variant:"danger",onClick:function(){s(t.id),d()}},"Delete Quiz"))))}),f=(n(40),function(e){var t=e.quiz,n=e.editQuiz,s=e.deleteQuiz,o=e.resetView,c=Object(i.useState)(!1),u=Object(l.a)(c,2),r=u[0],d=u[1],p=function(){d(!r)};return a.a.createElement("div",{className:"quiz_card"},r&&a.a.createElement(E,{quiz:t,editQuiz:n,deleteQuiz:s,switchEdit:p,resetView:o}),!r&&a.a.createElement(h,{quiz:t,editQuiz:n,resetView:o,switchEdit:p}))}),q=function(e){var t=e.quizzes,n=e.editQuiz,s=e.deleteQuiz,o=e.showModal,c=Object(i.useState)(null),u=Object(l.a)(c,2),p=u[0],m=u[1],h=function(e){m(e)},b=function(){m(null)};return a.a.createElement("div",{className:"quiz_list"},!p&&a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(d,{key:e.id,quiz:e,handleClick:h})}),a.a.createElement(r.a,{className:"add_btn",onClick:o},"Add New Quiz")),t.map(function(e){if(p===e.id)return a.a.createElement(f,{key:e.id,quiz:e,editQuiz:n,deleteQuiz:s,resetView:b})}))},_=n(44),y=function(e){var t=e.show,n=e.handleCloseModal,s=e.addQuiz,o=Object(i.useState)("Example Quiz"),c=Object(l.a)(o,2),u=c[0],d=c[1],m=Object(i.useState)("Example Description"),h=Object(l.a)(m,2),b=h[0],E=h[1];return a.a.createElement("div",null,a.a.createElement(_.a,{show:t,onHide:n,animation:!1},a.a.createElement(_.a.Header,{closeButton:!0},a.a.createElement(_.a.Title,null,"Add New Quiz")),a.a.createElement(_.a.Body,null,a.a.createElement(p.a.Group,{controlId:"formQuizId"},a.a.createElement(p.a.Label,null,"Title: "),a.a.createElement(p.a.Control,{value:u,onChange:function(e){return d(e.target.value)}}),a.a.createElement(p.a.Label,null,"Description: "),a.a.createElement(p.a.Control,{as:"textarea",rows:3,value:b,onChange:function(e){return E(e.target.value)}}))),a.a.createElement(_.a.Footer,null,a.a.createElement(r.a,{variant:"secondary",onClick:function(){d("Example Quiz"),E("Example Description"),n()}},"Close"),a.a.createElement(r.a,{variant:"primary",onClick:function(){s(u,b),n()}},"Save Changes"))))},v=(n(41),n(22).map(function(e){return Object(u.a)({},e,{questionList:e.questionList.map(function(e){return Object(u.a)({},e,{submission:"",type:e.type})})})})),w=function(){var e=Object(i.useState)(v),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(i.useState)(!1),u=Object(l.a)(o,2),r=u[0],d=u[1];return a.a.createElement("div",{className:"quizzer"},a.a.createElement(q,{quizzes:n,editQuiz:function(e,t){s(n.map(function(n){return n.id===e?t:n}))},deleteQuiz:function(e){s(n.filter(function(t){return e!==t.id}))},showModal:function(){return d(!0)}}),a.a.createElement(y,{show:r,handleCloseModal:function(){return d(!1)},addQuiz:function(e,t){var i={title:e,body:t,id:0,published:!1,questionList:[]};s([].concat(Object(c.a)(n),[i]))}}),a.a.createElement("hr",null),a.a.createElement("h2",{style:{color:"white"}},"Application Sketch"),a.a.createElement("hr",null),a.a.createElement("div",{style:{color:"white"}},a.a.createElement("h2",null,"Completed Features"),a.a.createElement("ul",{className:"completedList"},a.a.createElement("li",null," ","Users can see a list of quizzes, including the quizzes title, description, and how many questions it has (TESTED)"),a.a.createElement("li",null,"Users can select a specific quiz to see the questions, including the questions name, body, and points (TESTED)"),a.a.createElement("li",null,"Quiz questions can be of AT LEAST two types: a short answer question or multiple choice question (TESTED)"),a.a.createElement("li",null,"Users can enter or choose an answer for a quiz question, and be told if they are correct (TESTED)"),a.a.createElement("li",null,"Users can see how many total points they have earned (TESTED)"),a.a.createElement("li",null,"Users can clear out their existing answers for a quiz (TESTED)"),a.a.createElement("li",null,"Users can publish or unpublish a question (TESTED)"),a.a.createElement("li",null,"Users can filter the questions in a list so that only published questions are shown (TESTED)"),a.a.createElement("li",null,"Users can edit the questions and fields of a quiz (TESTED)"),a.a.createElement("li",null,"Users can add a new quiz question (TESTED)"),a.a.createElement("li",null,"Users can delete an existing quiz question (TESTED)"),a.a.createElement("li",null,"Users can reorder quiz questions (TESTED)"),a.a.createElement("li",null,"Users can add a new quiz (TESTED)"),a.a.createElement("li",null,"Users can delete an existing quiz (TESTED)"))))};var g=function(){var e=Object(i.useState)(!0),t=Object(l.a)(e,2),n=t[0],s=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"UD CISC275 with React Hooks and TypeScript",a.a.createElement(r.a,{onClick:function(){s(!n)}},n?"Quizzer":"Tasks")),a.a.createElement("div",{style:{display:n?"block":"none"}},a.a.createElement(w,null)))},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then(function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)})};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.701a566c.chunk.js.map