"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[8971],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),k=a,h=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},74705:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(8539),s=["components"],p={description:"Author: @wingkwong | https://leetcode.com/problems/kth-missing-positive-number/"},l="1539 - Kth Missing Positive Number (Easy)",m={unversionedId:"1500-1599/kth-missing-positive-number-easy",id:"1500-1599/kth-missing-positive-number-easy",title:"1539 - Kth Missing Positive Number (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/kth-missing-positive-number/",source:"@site/solutions/1500-1599/1539-kth-missing-positive-number-easy.md",sourceDirName:"1500-1599",slug:"/1500-1599/kth-missing-positive-number-easy",permalink:"/leetcode-the-hard-way/solutions/1500-1599/kth-missing-positive-number-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/1500-1599/1539-kth-missing-positive-number-easy.md",tags:[],version:"current",sidebarPosition:1539,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/kth-missing-positive-number/"},sidebar:"tutorialSidebar",previous:{title:"1523 - Count Odd Numbers in an Interval Range (Easy)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/count-odd-numbers-in-an-interval-range-easy"},next:{title:"1547 - Minimum Cost to Cut a Stick (Hard)",permalink:"/leetcode-the-hard-way/solutions/1500-1599/minimum-cost-to-cut-a-stick-hard"}},u={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Brute Force",id:"approach-1-brute-force",level:2}],k={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1539---kth-missing-positive-number-easy"},"1539 - Kth Missing Positive Number (Easy)"),(0,i.kt)("h2",{id:"problem-link"},"Problem Link"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/kth-missing-positive-number/"},"https://leetcode.com/problems/kth-missing-positive-number/")),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given an array ",(0,i.kt)("inlineCode",{parentName:"p"},"arr")," of positive integers sorted in a ",(0,i.kt)("strong",{parentName:"p"},"strictly increasing order"),", and an integer ",(0,i.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Find the")," ",(0,i.kt)("inlineCode",{parentName:"p"},"kth")," ",(0,i.kt)("em",{parentName:"p"},"positive integer that is missing from this array.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [2,3,4,7,11], k = 5\nOutput: 9\nExplanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: arr = [1,2,3,4], k = 2\nOutput: 6\nExplanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= arr.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= arr[i] <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= k <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"arr[i] < arr[j]")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"1 <= i < j <= arr.length"))),(0,i.kt)("h2",{id:"approach-1-brute-force"},"Approach 1: Brute Force"),(0,i.kt)("p",null,"Iterate each number to find out the ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"k")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"))))),"-th missing number."),(0,i.kt)(o.Z,{name:"@wingkwong",mdxType:"SolutionAuthor"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findKthPositive(vector<int>& arr, int k) {\n        int target = 1;\n        while (k > 0) {\n            // target is missing. decrease k by 1\n            if (find(arr.begin(), arr.end(), target) == arr.end()) k -= 1;\n            // find the ans\n            if (k == 0) break;\n            // check next number\n            target += 1;\n        }\n        return target;\n    }\n};\n")))}h.isMDXComponent=!0},8539:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",t))}}}]);