"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/unguided_question-49d7e89294f7030d354b4a954c3a5d72.png",r=n.p+"assets/images/limerick_question-1efdd913233a84bbf82a0d93095a61bc.png",s=n.p+"assets/images/unprimed_question-360b659b34b4bcc3722dde0fcf6b7865.png",l=n.p+"assets/images/primed_question-d392e9077df4550d56a4318609fa144c.png",c={sidebar_position:80},p="\ud83d\udfe2 Chatbot Basics",u={unversionedId:"basics/chatbot_basics",id:"basics/chatbot_basics",title:"\ud83d\udfe2 Chatbot Basics",description:"One of the most common ways prompting can be useful is when interacting with the numerous chatbots available to the public, such as ChatGPT. Note that ChatGPT is different from GPT-3. The main difference is that chatbots can remember your conversation history. Just like GPT-3, they can also answer questions, provide writing summary and analysis, write text or code, and more at a high level, which is an exciting prospect\u2014but the real value of chatbots is only accessible when you get specific with your prompts. In this article, we\u2019ll explore some basic methods for how to better utilize chatbots, such as using style guidance, descriptors, and priming.",source:"@site/docs/basics/chatbot_basics.md",sourceDirName:"basics",slug:"/basics/chatbot_basics",permalink:"/ja/docs/basics/chatbot_basics",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/chatbot_basics.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 More on Prompting",permalink:"/ja/docs/basics/more_on_prompting"},next:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/ja/docs/category/\ufe0f-intermediate"}},d={},h=[{value:"Modifing Your Prompt",id:"modifing-your-prompt",level:2},{value:"Style Guidance",id:"style-guidance",level:3},{value:"Descriptors",id:"descriptors",level:3},{value:"Priming Prompt",id:"priming-prompt",level:2},{value:"Notes",id:"notes",level:2}],m={toc:h},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-chatbot-basics"},"\ud83d\udfe2 Chatbot Basics"),(0,o.kt)("p",null,"One of the most common ways prompting can be useful is when interacting with the numerous chatbots available to the public, such as ",(0,o.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"ChatGPT"),". Note that ChatGPT is different from GPT-3. The main difference is that chatbots can remember your conversation history. Just like GPT-3, they can also answer questions, provide writing summary and analysis, write text or code, and more at a high level, which is an exciting prospect\u2014but the real value of chatbots is only accessible when you get specific with your prompts. In this article, we\u2019ll explore some basic methods for how to better utilize chatbots, such as using style guidance, descriptors, and priming. "),(0,o.kt)("h2",{id:"modifing-your-prompt"},"Modifing Your Prompt"),(0,o.kt)("h3",{id:"style-guidance"},"Style Guidance"),(0,o.kt)("p",null,"Style guidance is simply asking the AI to speak in a certain style. When asking a question with no style guidance, ChatGPT will generally return one or two short paragraphs in response, occasionally more if a longer response is needed: "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"500px"}})),(0,o.kt)("p",null,"It speaks in a moderately formal tone and gives a couple details\u2014pretty good! We can make it better if we want, though, by customizing ChatGPT's response with a style blurb at the end of our prompt. If we want a more conversational response, we can ask it to speak in a friendly or informal tone; if we want a more readable format, we can give it the same question but ask for a bulleted list; if we want an amusing response, we can ask it to give its answer in the form of a series of limericks (a personal favorite of mine)."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:r,style:{width:"450px"}})),(0,o.kt)("p",null,"An example of a more detailed style prompt might look something like: "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[Question]"," \u201cWrite in the style and quality of an expert in ","[field]"," with 20+ years of experience and multiple Ph.D.'s. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor.\u201c\nPrompting with style inputs will greatly increase the quality of your responses!")),(0,o.kt)("h3",{id:"descriptors"},"Descriptors"),(0,o.kt)("p",null,"If you just want to change the tone or tweak your prompt rather than reformat, adding ",(0,o.kt)("strong",{parentName:"p"},"descriptors"),' can be a good way to do it. Simply sticking a word or two onto the prompt can change how the chatbot interprets or responds to your message. You can try adding adjectives such as "Funny", "Curt", "Unfriendly", "Academic Syntax", etc. to the end of prompts to see how your responses change! '),(0,o.kt)("h2",{id:"priming-prompt"},"Priming Prompt"),(0,o.kt)("p",null,"Because of the structure of a chatbot conversation, the form of the first prompt you give the LLM can affect the remainder of the conversation, allowing you to add an additional level of structure and specification.\nAs an example, let's set up a system to allow us to have a conversation with a teacher and a student in the same conversation. We\u2019ll include style guides for both the student and teacher voices, specify the format we want our answers in, and include some syntax structuring to be able to easily alter our prompts to try out various responses. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u201cTeacher\u201d means in the style of a distinguished professor with well over ten years teaching the subject and multiple Ph.D.\u2019s in the field. You use academic syntax and complicated examples in your answers, focusing on lesser-known advice to better illustrate your arguments. Your language should be sophisticated but not overly complex. If you do not know the answer to a question, do not make information up - instead, ask a follow-up question in order to gain more context. Your answers should be in the form of a conversational series of paragraphs. Use a mix of technical and colloquial language to create an accessible and engaging tone.  \n\n\u201cStudent\u201d means in the style of a second-year college student with an introductory-level knowledge of the subject. You explain concepts simply using real-life examples. Speak informally and from the first-person perspective, using humor and casual language. If you do not know the answer to a question, do not make information up - instead, clarify that you haven\u2019t been taught it yet. Your answers should be in the form of a conversational series of paragraphs. Use colloquial language to create an entertaining and engaging tone. \n\n\u201cCritique\u201d means to analyze the given text and provide feedback. \n\u201cSummarize\u201d means to provide key details from a text.\n\u201cRespond\u201d means to answer a question from the given perspective. \n\nAnything in parentheses () signifies the perspective you are writing from. \nAnything in curly braces {} is the subject you are involved in. \nAnything in brackets [] is the action you should take. \nExample: (Student){Philosophy}[Respond] What is the advantage of taking this subject over others in college?\n\nIf you understand and are ready to begin, respond with only \u201cyes.\u201d\n")),(0,o.kt)("p",null,"Below is an example of an unprimed question to ChatGPT about the most interesting areas of philosophy. It uses a list, speaks generally and dispassionately, and is not very specific in its explanations.  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:s,style:{width:"650px"}})),(0,o.kt)("p",null,"In the second example, we instead asked the question after providing a priming prompt to ChatGPT and providing the question in the correct form. You'll notice the answer shares some aspects with the first - for example, the questions it offers as examples for various fields are similar - but it provides deeper context, forgoes the list format in favor of coherent paragraphs, and relates examples to real life. "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:l,style:{width:"650px"}})),(0,o.kt)("p",null,"Incorporating primers into your prompting is a more advanced way of interacting with chatbots. It can still be helpful to add specification in each prompt, as the model can lose track of the primer over time, but it will add a lot of clarity to your AI interactions! "),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Need citations."))}g.isMDXComponent=!0}}]);