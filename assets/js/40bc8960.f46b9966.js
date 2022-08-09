"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9946],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",hide_table_of_contents:!1,keywords:["leetcode","template","bit manipulation"]},l=void 0,u={unversionedId:"bit-manipulation",id:"bit-manipulation",title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",source:"@site/templates/bit-manipulation.md",sourceDirName:".",slug:"/bit-manipulation",permalink:"/leetcode-the-hard-way/templates/bit-manipulation",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/templates/bit-manipulation.md",tags:[],version:"current",frontMatter:{title:"Bit Manipulation",description:"Bit Manipulation utilises different bitwise operations to manipulate bits",hide_table_of_contents:!1,keywords:["leetcode","template","bit manipulation"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/leetcode-the-hard-way/templates/"},next:{title:"Disjoint Set Union (DSU)",permalink:"/leetcode-the-hard-way/templates/dsu"}},p={},c=[{value:"Sum of Submask",id:"sum-of-submask",level:3},{value:"Sum of Super Mask",id:"sum-of-super-mask",level:3},{value:"Largest Bit Set",id:"largest-bit-set",level:3},{value:"Lowest Bit Set",id:"lowest-bit-set",level:3},{value:"Index of Lowest Bit Set",id:"index-of-lowest-bit-set",level:3},{value:"Enumerating all submasks of a given mask",id:"enumerating-all-submasks-of-a-given-mask",level:3}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"sum-of-submask"},"Sum of Submask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_out, typename T_in>\nvector<T_out> submask_sums(int n, const vector<T_in> &values) {\n    assert(int(values.size()) == 1 << n);\n    vector<T_out> dp(values.begin(), values.end());\n    for (int i = 0; i < n; i++)\n        for (int base = 0; base < 1 << n; base += 1 << (i + 1))\n            for (int mask = base; mask < base + (1 << i); mask++)\n                dp[mask + (1 << i)] += dp[mask];\n    return dp;\n}\n")),(0,i.kt)("h3",{id:"sum-of-super-mask"},"Sum of Super Mask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T_out, typename T_in>\nvector<T_out> supermask_sums(int n, vector<T_in> values) {\n    reverse(values.begin(), values.end());\n    vector<T_out> result = submask_sums<T_out>(n, values);\n    reverse(result.begin(), result.end());\n    return result;\n}\n")),(0,i.kt)("h3",{id:"largest-bit-set"},"Largest Bit Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int largest_bit(int x) {\n    return x == 0 ? -1 : 31 - __builtin_clz(x);\n}\n")),(0,i.kt)("h3",{id:"lowest-bit-set"},"Lowest Bit Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int lowest_bit(int x) {\n    return x & (-x);\n}\n")),(0,i.kt)("h3",{id:"index-of-lowest-bit-set"},"Index of Lowest Bit Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int lowest_bit_index(int x) {\n    // 1 based\n    // __builtin_ffs(10) = 2 (10[1]0)\n    return __builtin_ffs(x);\n}\n")),(0,i.kt)("h3",{id:"enumerating-all-submasks-of-a-given-mask"},"Enumerating all submasks of a given mask"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"for (int s = m; s; s = (s - 1) & m) {\n    // use s\n}\n")))}f.isMDXComponent=!0}}]);