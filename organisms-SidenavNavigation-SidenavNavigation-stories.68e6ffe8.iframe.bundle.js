"use strict";(self.webpackChunk_typedbootstrap_admin_components=self.webpackChunk_typedbootstrap_admin_components||[]).push([[427],{"./src/organisms/SidenavNavigation/SidenavNavigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SidenavNavigation_stories});var react=__webpack_require__("./node_modules/react/index.js"),SidenavUserFooter=__webpack_require__("./src/molecules/SidenavUserFooter/SidenavUserFooter.tsx"),Sidenav=__webpack_require__("./src/atoms/Sidenav/index.ts"),SidenavMenu=__webpack_require__("./src/atoms/SidenavMenu/index.ts"),SidenavMenuHeading=__webpack_require__("./src/atoms/SidenavMenuHeading/index.ts"),SidenavSubmenu=__webpack_require__("./src/molecules/SidenavSubmenu/SidenavSubmenu.tsx"),SidenavLink=__webpack_require__("./src/molecules/SidenavLink/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SidenavNavigation=function(props){var footer=props.footer,items=props.items,rest=_object_without_properties(props,["footer","items"]),_useState=_sliced_to_array((0,react.useState)({}),2),collapse=_useState[0],setCollapse=_useState[1],toggleCollapse=function(itemName){for(var c in collapse)!0===collapse[c]&&c!==itemName&&setCollapse(_object_spread_props(_object_spread({},collapse),_define_property({},c,!1)));setCollapse(_object_spread_props(_object_spread({},collapse),_define_property({},itemName,!collapse[itemName])))},renderMenu=function(items){return react.createElement(react.Fragment,null,items.map(function(item,index){var heading=item.heading,name=item.name,submenu=item.submenu,rest=_object_without_properties(item,["heading","name","submenu"]);return heading?react.createElement(SidenavMenuHeading.Z,{key:index},heading):submenu?submenu&&name?react.createElement(react.Fragment,{key:index},react.createElement(SidenavLink.Z,_object_spread({onClick:function(){return toggleCollapse(name)}},rest),name),react.createElement(SidenavSubmenu.Z,{isOpen:collapse[name]},renderMenu(submenu))):null:react.createElement(SidenavLink.Z,_object_spread({key:index},rest),name)}))};return react.createElement(Sidenav.Z,rest,react.createElement(SidenavMenu.Z,null,renderMenu(items)),footer)};try{SidenavNavigation.displayName="SidenavNavigation",SidenavNavigation.__docgenInfo={description:"",displayName:"SidenavNavigation",props:{footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SidenavNavigationItems"}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},light:{defaultValue:null,description:"",name:"light",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/organisms/SidenavNavigation/SidenavNavigation.tsx#SidenavNavigation"]={docgenInfo:SidenavNavigation.__docgenInfo,name:"SidenavNavigation",path:"src/organisms/SidenavNavigation/SidenavNavigation.tsx#SidenavNavigation"})}catch(__react_docgen_typescript_loader_error){}let SidenavNavigation_stories={title:"Organisms/SidenavNavigation",component:SidenavNavigation,decorators:[],tags:["autodocs"]};var Example={args:{dark:!0,light:!1,footer:react.createElement(SidenavUserFooter.Z,{name:"Andrew Dyer"}),items:[{heading:"Core"},{name:"Dashboard",href:"/dashboard",icon:react.createElement("i",{className:"fas fa-tachometer-alt"})},{heading:"Interface"},{name:"Layouts",href:"#",icon:react.createElement("i",{className:"fas fa-columns"}),submenu:[{name:"Static Navigation",href:"/layout-static"},{name:"Light Sidenav",href:"/layout-sidenav-light"}]},{name:"Pages",href:"#",icon:react.createElement("i",{className:"fas fa-book-open"}),submenu:[{name:"Authentication",href:"#",submenu:[{name:"Login",href:"/login"},{name:"Register",href:"/register"},{name:"Forgot Password",href:"/forgot-password"}]},{name:"Error",href:"#",submenu:[{name:"401 Page",href:"/401"},{name:"404 Page",href:"/404"},{name:"500 Page",href:"/500"}]}]},{heading:"Addons"},{name:"Charts",href:"/charts",icon:react.createElement("i",{className:"fas fa-chart-area"})},{name:"Tables",href:"/tables",icon:react.createElement("i",{className:"fas fa-table"})}]},render:function(args){return react.createElement(SidenavNavigation,args)}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  args: {\n    dark: true,\n    light: false,\n    footer: <SidenavUserFooter name=\"Andrew Dyer\" />,\n    items: [{\n      heading: 'Core'\n    }, {\n      name: 'Dashboard',\n      href: '/dashboard',\n      icon: <i className=\"fas fa-tachometer-alt\"></i>\n    }, {\n      heading: 'Interface'\n    }, {\n      name: 'Layouts',\n      href: '#',\n      icon: <i className=\"fas fa-columns\"></i>,\n      submenu: [{\n        name: 'Static Navigation',\n        href: '/layout-static'\n      }, {\n        name: 'Light Sidenav',\n        href: '/layout-sidenav-light'\n      }]\n    }, {\n      name: 'Pages',\n      href: '#',\n      icon: <i className=\"fas fa-book-open\"></i>,\n      submenu: [{\n        name: 'Authentication',\n        href: '#',\n        submenu: [{\n          name: 'Login',\n          href: '/login'\n        }, {\n          name: 'Register',\n          href: '/register'\n        }, {\n          name: 'Forgot Password',\n          href: '/forgot-password'\n        }]\n      }, {\n        name: 'Error',\n        href: '#',\n        submenu: [{\n          name: '401 Page',\n          href: '/401'\n        }, {\n          name: '404 Page',\n          href: '/404'\n        }, {\n          name: '500 Page',\n          href: '/500'\n        }]\n      }]\n    }, {\n      heading: 'Addons'\n    }, {\n      name: 'Charts',\n      href: '/charts',\n      icon: <i className=\"fas fa-chart-area\"></i>\n    }, {\n      name: 'Tables',\n      href: '/tables',\n      icon: <i className=\"fas fa-table\"></i>\n    }]\n  },\n  render: args => <SidenavNavigation {...args} />\n}",...Example.parameters?.docs?.source}}};let __namedExportsOrder=["Example"]},"./src/molecules/SidenavLink/SidenavLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reactstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reactstrap/esm/NavLink.js"),_atoms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/index.ts");function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SidenavLink=function(props){var children=props.children,icon=props.icon,rest=_object_without_properties(props,["children","icon"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Z,rest,icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__.L$,null,icon),children)};let __WEBPACK_DEFAULT_EXPORT__=SidenavLink;try{SidenavLink.displayName="SidenavLink",SidenavLink.__docgenInfo={description:"",displayName:"SidenavLink",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/molecules/SidenavLink/SidenavLink.tsx#SidenavLink"]={docgenInfo:SidenavLink.__docgenInfo,name:"SidenavLink",path:"src/molecules/SidenavLink/SidenavLink.tsx#SidenavLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/molecules/SidenavLink/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_SidenavLink__WEBPACK_IMPORTED_MODULE_0__.Z});var _SidenavLink__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/molecules/SidenavLink/SidenavLink.tsx")},"./src/molecules/SidenavSubmenu/SidenavSubmenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reactstrap__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reactstrap/esm/Collapse.js"),_atoms_SidenavMenuNested__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/SidenavMenuNested/index.ts");function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SidenavSubmenu=function(props){var children=props.children,rest=_object_without_properties(props,["children"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Z,rest,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms_SidenavMenuNested__WEBPACK_IMPORTED_MODULE_1__.Z,null,children))};let __WEBPACK_DEFAULT_EXPORT__=SidenavSubmenu;try{SidenavSubmenu.displayName="SidenavSubmenu",SidenavSubmenu.__docgenInfo={description:"",displayName:"SidenavSubmenu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/molecules/SidenavSubmenu/SidenavSubmenu.tsx#SidenavSubmenu"]={docgenInfo:SidenavSubmenu.__docgenInfo,name:"SidenavSubmenu",path:"src/molecules/SidenavSubmenu/SidenavSubmenu.tsx#SidenavSubmenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/molecules/SidenavUserFooter/SidenavUserFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_atoms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/atoms/index.ts"),SidenavUserFooter=function(props){var name=props.name;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_atoms__WEBPACK_IMPORTED_MODULE_1__.RW,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"small"},"Logged in as:"),name)};let __WEBPACK_DEFAULT_EXPORT__=SidenavUserFooter;try{SidenavUserFooter.displayName="SidenavUserFooter",SidenavUserFooter.__docgenInfo={description:"",displayName:"SidenavUserFooter",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/molecules/SidenavUserFooter/SidenavUserFooter.tsx#SidenavUserFooter"]={docgenInfo:SidenavUserFooter.__docgenInfo,name:"SidenavUserFooter",path:"src/molecules/SidenavUserFooter/SidenavUserFooter.tsx#SidenavUserFooter"})}catch(__react_docgen_typescript_loader_error){}}}]);