(window.webpackJsonp=window.webpackJsonp||[]).push([[10,13,15,27,33,37],{288:function(t,e,s){},289:function(t,e,s){"use strict";s.r(e);s(7),s(64);var i=s(19),n={props:{item:{required:!0}},computed:{link(){return Object(i.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.g,isMailto:i.h,isTel:i.i,focusoutAction(){this.$emit("focusout")}}},o=s(0),a=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=a.exports},290:function(t,e,s){},291:function(t,e,s){"use strict";s.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(s(292),s(0)),o=Object(n.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},292:function(t,e,s){"use strict";s(288)},296:function(t,e,s){},298:function(t,e,s){"use strict";s(290)},302:function(t,e,s){},306:function(t,e,s){"use strict";s.r(e);var i=s(289),n=s(291),o=s(124),a=s.n(o),r={components:{NavLink:i.default,DropdownTransition:n.default},data:()=>({open:!1,isMQMobile:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},beforeMount(){this.isMQMobile=window.innerWidth<720,window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720})},methods:{toggle(){this.isMQMobile&&(this.open=!this.open)},isLastItemOfArray:(t,e)=>a()(e)===t},watch:{$route(){this.open=!1}}},l=(s(298),s(0)),u=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[t.item.link?e("router-link",{staticClass:"link-title",attrs:{to:t.item.link}},[t._v(t._s(t.item.text))]):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.item.link,expression:"!item.link"}],staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})],1),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(s,i){return e("li",{key:s.link||i,staticClass:"dropdown-item"},["links"===s.type?e("h4",[t._v(t._s(s.text))]):t._e(),t._v(" "),"links"===s.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(s.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,s.items)&&t.isLastItemOfArray(s,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},311:function(t,e,s){"use strict";s(296)},315:function(t,e,s){"use strict";s.r(e);s(7),s(20),s(64);var i=s(306),n=s(19),o={components:{NavLink:s(289).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const o=t[n],a=i[n]&&i[n].label||o.lang;let r;return o.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,n),s.some(t=>t.path===r)||(r=n)),{text:a,link:r}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.k)(t),{items:(t.items||[]).map(n.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}}},a=(s(311),s(0)),r=Object(a.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=r.exports},330:function(t,e,s){},331:function(t,e,s){"use strict";s(302)},332:function(t,e,s){},345:function(t,e,s){"use strict";s.r(e);s(331);var i=s(0),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",attrs:{title:"目录"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=n.exports},354:function(t,e,s){"use strict";s(330)},355:function(t,e,s){"use strict";s(332)},370:function(t,e,s){"use strict";s.r(e);s(43),s(7),s(15),s(20),s(64);var i=s(126),n=s.n(i),o=(t,e,s=null)=>{let i=n()(e,"title","");return n()(e,"frontmatter.tags")&&(i+=" "+e.frontmatter.tags.join(" ")),s&&(i+=" "+s),a(t,i)};const a=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp("[^\0-]"),n=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(i.test(t))return n.some(t=>e.toLowerCase().indexOf(t)>-1);{const i=t.endsWith(" ");return new RegExp(n.map((t,e)=>n.length!==e+1||i?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var r={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,n=[];for(let a=0;a<e.length&&!(n.length>=s);a++){const r=e[a];if(this.getPageLocalePath(r)===i&&this.isSearchable(r))if(o(t,r))n.push(r);else if(r.headers)for(let e=0;e<r.headers.length&&!(n.length>=s);e++){const s=r.headers[e];s.title&&o(t,r,s.title)&&n.push(Object.assign({},r,{path:r.path+"#"+s.slug,header:s}))}}return n},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},l=(s(354),s(0)),u=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,i){return e("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,c=s(345),h=s(315);function f(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var d={components:{SidebarButton:c.default,NavLinks:h.default,SearchBox:u,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(f(this.$el,"paddingLeft"))+parseInt(f(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},p=(s(355),Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar blur"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.default=p.exports}}]);