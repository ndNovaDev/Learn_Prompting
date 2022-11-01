"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Welcome",l={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to this course on Prompt Engineering! This course is designed for both",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/promptgineering/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/promptgineering/docs/category/tutorial---basics"}},s={},c=[{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"welcome"},"Welcome"),(0,a.kt)("p",null,"Welcome to this course on Prompt Engineering! This course is designed for both\nML (machine learning) hobbyists and researchers, with a particular focus on undergraduate researchers\nwho often fall somewhere in between. We will cover basic vocabularly below, but\nfrequently assume basic ML/NLP (natural language processing) knowledge. Feel free\nto skip this page if you already know what prompt engineering is."),(0,a.kt)("h1",{id:"intro-to-prompting"},"Intro to Prompting"),(0,a.kt)("p",null,'Before we get to Prompt Engineering, what is prompting? It can be defined as\n"converting tasks into a language model format"',(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Slightly less\nformally, it is the process of taking a task and converting it into a question that\ncan be answered by a language model. Here are two examples of this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'If you are performing sentiment analysis on Tweets with the binary labels "positive" and "negative",\nyou can convert this into a language model format by posing the question "Is this tweet positive or negative?"')),(0,a.kt)("p",null,"Your full prompt could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Tweet: "What a beautiful day!"\n\nIs this tweet positive or negative?\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'If you have a dataset of mathematical equations that you would like a language model to solve,\nyou can convert this into a language model format by posing the question "What is EQUATION"')),(0,a.kt)("p",null,"Your full prompt could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"What is 100*100?\n")),(0,a.kt)("h1",{id:"intro-to-prompt-engineering"},"Intro to Prompt Engineering"),(0,a.kt)("p",null,"For this last prompt, GPT-3 (text-davinci-002)",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," will actually answer 1,000 (incorrect). This is where\nprompt engineering comes in. If, instead of asking ",(0,a.kt)("inlineCode",{parentName:"p"},'"What is 100\\*100?"'),", we ask\n",(0,a.kt)("inlineCode",{parentName:"p"},'"What is 100\\*100? Make sure your answer has the correct number of 0s:"'),", GPT-3 will\nanswer 10,000 (correct). Why is this the case? Why is the additional specification\nof the number of zeros necessary for the AI to get the right answer? How can we create\nprompts which yield optimal results on our task? This last question, in particular,\nis the focus of the field of Prompt Engineering, as well as this course."),(0,a.kt)("h1",{id:"vocabulary"},"Vocabulary"),(0,a.kt)("p",null,"Although familiarity with LLMs and MLMs is mostly assumed,\nwe provide a short introduct to each concept here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Large Language Models (LLMs)")),(0,a.kt)("p",null,"LLMs are models which have a large amount of weights, and have usually been trained\non a large amount of text."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Masked Language Models (MLMs)")),(0,a.kt)("p",null,"MLMs are a type of NLP model, which have a special token, usually ",(0,a.kt)("inlineCode",{parentName:"p"},"[MASK]"),', which is\nreplaced with a word from the vocabulary. The model then predicts the word that\nwas masked. For example, if the sentence is "The dog is ',"[MASK]",' the cat", the model\nwill predict "chasing" with high probability.'),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., & Singh, S. (2020). AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). https://doi.org/10.18653/v1/2020.emnlp-main.346\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);