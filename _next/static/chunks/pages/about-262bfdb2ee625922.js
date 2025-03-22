(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(286)}])},2441:function(e,s,t){"use strict";t.d(s,{Z:function(){return Layout}});var l=t(5893),a=t(7294),r=t(1664),i=t.n(r),n=t(1163);function Header(){let[e,s]=(0,a.useState)(!1),t=(0,n.useRouter)(),toggleMenu=()=>{s(!e)},isActive=e=>t.pathname===e?"text-ptv-blue font-semibold":"text-gray-700 hover:text-ptv-blue";return(0,l.jsx)("header",{className:"bg-white shadow-sm",children:(0,l.jsxs)("div",{className:"container mx-auto px-4 py-4",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center",children:[(0,l.jsx)(i(),{href:"/",className:"flex items-center space-x-2",children:(0,l.jsx)("span",{className:"text-xl font-bold text-ptv-blue",children:"PTV-LML"})}),(0,l.jsx)("button",{className:"md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none",onClick:toggleMenu,"aria-label":"Toggle menu",children:(0,l.jsx)("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e?(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),(0,l.jsxs)("nav",{className:"hidden md:flex space-x-8",children:[(0,l.jsx)(i(),{href:"/",className:"".concat(isActive("/")," transition-colors"),children:"Home"}),(0,l.jsx)(i(),{href:"/routes",className:"".concat(isActive("/routes")," transition-colors"),children:"Routes"}),(0,l.jsx)(i(),{href:"/allgigs",className:"".concat(isActive("/allgigs")," transition-colors"),children:"Live Music"}),(0,l.jsx)(i(),{href:"/about",className:"".concat(isActive("/about")," transition-colors"),children:"About"})]})]}),e&&(0,l.jsx)("nav",{className:"md:hidden mt-4 pt-4 border-t border-gray-200",children:(0,l.jsxs)("ul",{className:"space-y-4",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/",className:"".concat(isActive("/")," block py-2"),onClick:toggleMenu,children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/routes",className:"".concat(isActive("/routes")," block py-2"),onClick:toggleMenu,children:"Routes"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/allgigs",className:"".concat(isActive("/allgigs")," block py-2"),onClick:toggleMenu,children:"Live Music"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/about",className:"".concat(isActive("/about")," block py-2"),onClick:toggleMenu,children:"About"})})]})})]})})}var c=t(5675),o=t.n(c);function Footer(){let e=new Date().getFullYear();return(0,l.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)(o(),{src:"/images/LML_1_RGB.png",alt:"Live Music Locator Logo",width:80,height:80,className:"mr-3"}),(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"PTV-LML"})]}),(0,l.jsx)("p",{className:"text-gray-300 text-sm",children:"A web application that displays Public Transport Victoria route information (including SkyBus) and integrates with live music gig data."}),(0,l.jsx)("p",{className:"text-gray-300 text-sm mt-2",children:(0,l.jsx)("a",{href:"http://lml.live",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 transition-colors",children:"Powered by Live Music Locator technology"})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,l.jsxs)("ul",{className:"space-y-2 text-gray-300 text-sm",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/",className:"hover:text-white transition-colors",children:"Home"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/routes",className:"hover:text-white transition-colors",children:"Routes"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/allgigs",className:"hover:text-white transition-colors",children:"Live Music"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/about",className:"hover:text-white transition-colors",children:"About"})})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"External Resources"}),(0,l.jsxs)("ul",{className:"space-y-2 text-gray-300 text-sm",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.ptv.vic.gov.au/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"PTV Official Website"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.ptv.vic.gov.au/footer/data-and-reporting/datasets/ptv-timetable-api/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"PTV API Documentation"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"http://lml.live",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"Live Music Locator"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://github.com/yourusername/ptv-lml",target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:"GitHub Repository"})})]})]})]}),(0,l.jsxs)("div",{className:"border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400",children:[(0,l.jsxs)("p",{children:["\xa9 ",e," PTV-LML. All rights reserved."]}),(0,l.jsxs)("p",{className:"mt-2",children:["PTV data is used under ",(0,l.jsx)("a",{href:"https://www.ptv.vic.gov.au/footer/data-and-reporting/datasets/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300",children:"Creative Commons Attribution 4.0 International license"}),"."]}),(0,l.jsx)("p",{className:"mt-2",children:"This is an unofficial application and is not affiliated with Public Transport Victoria."}),(0,l.jsxs)("p",{className:"mt-2",children:["Live Music Locator technology used with permission. Visit ",(0,l.jsx)("a",{href:"http://lml.live",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300",children:"lml.live"})," for more information."]})]})]})})}function Layout(e){let{children:s}=e;return(0,l.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,l.jsx)(Header,{}),(0,l.jsx)("main",{className:"flex-grow",children:s}),(0,l.jsx)(Footer,{})]})}},286:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return About}});var l=t(5893),a=t(9008),r=t.n(a),i=t(1664),n=t.n(i),c=t(5675),o=t.n(c),h=t(2441);function About(){return(0,l.jsxs)(h.Z,{children:[(0,l.jsx)(r(),{children:(0,l.jsx)("title",{children:"PTV-LML | About"})}),(0,l.jsxs)("div",{className:"container py-8",children:[(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsxs)(n(),{href:"/",className:"text-ptv-blue hover:underline mb-4 inline-flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-1",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z",clipRule:"evenodd"})}),"Back to Home"]}),(0,l.jsx)("h1",{className:"text-3xl font-bold text-ptv-blue mb-2 md:text-4xl",children:"About PTV-LML"}),(0,l.jsx)("p",{className:"text-gray-600",children:"Learn more about this application and how it works."})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,l.jsxs)("div",{className:"md:col-span-2",children:[(0,l.jsxs)("div",{className:"card p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"What is PTV-LML?"}),(0,l.jsxs)("div",{className:"flex items-center mb-4",children:[(0,l.jsx)(o(),{src:"/images/LML_1_RGB.png",alt:"Live Music Locator Logo",width:100,height:100,className:"mr-4"}),(0,l.jsx)("p",{className:"text-gray-700",children:"PTV-LML (Public Transport Victoria - Live Music Locator) is a web application that combines public transport information from the PTV API with live music event data to help users find gigs near public transport stops."})]}),(0,l.jsx)("p",{className:"text-gray-700 mb-4",children:"Whether you're planning a night out or just exploring Melbourne's vibrant music scene, PTV-LML makes it easy to find live music events that are accessible via public transport."}),(0,l.jsx)("p",{className:"text-gray-700",children:"This application is built with Next.js and is designed to be mobile-friendly, making it easy to use on the go."})]}),(0,l.jsxs)("div",{className:"card p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"How It Works"}),(0,l.jsx)("p",{className:"text-gray-700 mb-4",children:"PTV-LML integrates two main data sources:"}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("h3",{className:"text-lg font-medium text-ptv-blue mb-2",children:"PTV Timetable API"}),(0,l.jsx)("p",{className:"text-gray-700 ml-4",children:"We use the official Public Transport Victoria API to fetch real-time data about routes, stops, and timetables. This allows us to display accurate and up-to-date information about public transport options, including trains, trams, buses, and SkyBus services."}),(0,l.jsxs)("p",{className:"text-gray-700 ml-4 mt-2",children:["PTV data is used under the ",(0,l.jsx)("a",{href:"https://www.ptv.vic.gov.au/footer/data-and-reporting/datasets/",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"Creative Commons Attribution 4.0 International license"}),"."]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-medium text-music-purple mb-2",children:"Live Music Locator API"}),(0,l.jsx)("p",{className:"text-gray-700 ml-4",children:"We integrate with the Live Music Locator API to get information about current and upcoming live music events in Melbourne. This data is then cross-referenced with public transport stops to show you gigs that are easily accessible."}),(0,l.jsxs)("p",{className:"text-gray-700 ml-4 mt-2",children:[(0,l.jsx)("a",{href:"http://lml.live",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"Live Music Locator"})," technology is used with permission. Visit lml.live for more information about this service."]})]})]}),(0,l.jsxs)("div",{className:"card p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Features"}),(0,l.jsxs)("ul",{className:"space-y-3 text-gray-700",children:[(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"Browse all PTV routes by type (train, tram, bus, SkyBus)"})]}),(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"View all stops for each route with proper sequencing"})]}),(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"Discover live music events near public transport stops"})]}),(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"Browse all live music events happening today"})]}),(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"Filter events by genre or search by name"})]}),(0,l.jsxs)("li",{className:"flex items-start",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 text-ptv-blue mt-0.5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}),(0,l.jsx)("span",{children:"Mobile-friendly responsive design"})]})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"card p-6 mb-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Technologies Used"}),(0,l.jsxs)("ul",{className:"space-y-2 text-gray-700",children:[(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"Next.js"]}),(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"React"]}),(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"TypeScript"]}),(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"TailwindCSS"]}),(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"PTV Timetable API"]}),(0,l.jsxs)("li",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"inline-block w-2 h-2 bg-ptv-blue rounded-full mr-2"}),"Live Music Locator API"]})]})]}),(0,l.jsxs)("div",{className:"card p-6",children:[(0,l.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"External Links"}),(0,l.jsxs)("ul",{className:"space-y-3 text-gray-700",children:[(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"https://www.ptv.vic.gov.au/",target:"_blank",rel:"noopener noreferrer",className:"text-ptv-blue hover:underline flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,l.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,l.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]}),"PTV Official Website"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"https://www.ptv.vic.gov.au/footer/data-and-reporting/datasets/ptv-timetable-api/",target:"_blank",rel:"noopener noreferrer",className:"text-ptv-blue hover:underline flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,l.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,l.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]}),"PTV API Documentation"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"http://lml.live",target:"_blank",rel:"noopener noreferrer",className:"text-music-purple hover:underline flex items-center",children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:[(0,l.jsx)("path",{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}),(0,l.jsx)("path",{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"})]}),"Live Music Locator"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("a",{href:"https://github.com/yourusername/ptv-lml",target:"_blank",rel:"noopener noreferrer",className:"text-ptv-blue hover:underline flex items-center",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0010 2z",clipRule:"evenodd"})}),"GitHub Repository"]})})]})]})]})]})]})]})}}},function(e){e.O(0,[664,675,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);