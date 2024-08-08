"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[928],{2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(4848),o=n(8453);const r={toc_min_heading_level:2,toc_max_heading_level:5,sidebar_position:1,title:"Common Development",description:"Start here for MS development"},i="Development",c={id:"development/dev-common",title:"Common Development",description:"Start here for MS development",source:"@site/docs/development/dev-common.md",sourceDirName:"development",slug:"/development/dev-common",permalink:"/multi-scrobbler/docs/development/dev-common",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/development/dev-common.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:5,sidebar_position:1,title:"Common Development",description:"Start here for MS development"},sidebar:"tutorialSidebar",previous:{title:"Development",permalink:"/multi-scrobbler/docs/category/development"},next:{title:"Source Development/Tutorial",permalink:"/multi-scrobbler/docs/development/dev-source"}},a={},l=[{value:"Architecture",id:"architecture",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Common Development",id:"common-development",level:2},{value:"Config",id:"config",level:3},{value:"Concrete Class",id:"concrete-class",level:3},{value:"Stages",id:"stages",level:4},{value:"Stage: Build Data",id:"stage-build-data",level:5},{value:"Stage: Check Connection",id:"stage-check-connection",level:5},{value:"Stage: Test Auth",id:"stage-test-auth",level:5},{value:"Play Object",id:"play-object",level:3},{value:"Creating Clients and Sources",id:"creating-clients-and-sources",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"development",children:"Development"}),"\n",(0,s.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsxs)(t.p,{children:["Multi-scrobbler is written entirely in ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"Typescript"}),". It consists of a backend and frontend. The backend handles all Source/Client logic, mounts web server endpoints that listen for Auth callbacks and Source ingress using ",(0,s.jsx)(t.a,{href:"https://expressjs.com/",children:"expressjs"}),", and  serves the frontend. The frontend is a standalone ",(0,s.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vitejs"})," app that communicates via API to the backend in order to render the dashboard."]}),"\n",(0,s.jsx)(t.h2,{id:"project-setup",children:"Project Setup"}),"\n",(0,s.jsxs)(t.p,{children:["Development requires ",(0,s.jsx)(t.a,{href:"https://nodejs.org/en",children:"Node v18.19.1"})," or higher is installed on your system. It is recommended to use ",(0,s.jsx)(t.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," to manage the installed node version."]}),"\n",(0,s.jsx)(t.p,{children:"Clone this repository somewhere and then install from the working directory"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/FoxxMD/multi-scrobbler.git .\ncd multi-scrobbler\ngit checkout --track origin/develop\nnvm use # optional, to set correct Node version\nnpm install\nnpm run start\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/tree/develop",children:(0,s.jsx)(t.code,{children:"develop"})})," branch as the target for any Pull Requests. The ",(0,s.jsx)(t.code,{children:"master"})," branch is reserved for releases and minor documentation updates only."]}),"\n",(0,s.jsx)(t.h2,{id:"common-development",children:"Common Development"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In this document, when referring to aspects of Sources and Clients that are shared between both, the Source/Client will be referred to as a ",(0,s.jsx)(t.strong,{children:"Component."})]})}),"\n",(0,s.jsx)(t.p,{children:"A Component is composed of two parts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Typescript interfaces describing structure of configuration for that Component"}),"\n",(0,s.jsx)(t.li,{children:'A concrete class inheriting from a common "startup" abstract class that enforces how the Component is built and operates'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In both parts Source/Clients share some common properties/behavior before diverging in how they operate."}),"\n",(0,s.jsx)(t.h3,{id:"config",children:"Config"}),"\n",(0,s.jsxs)(t.p,{children:["The configuration for a Component should always have this minimum shape, enforced respectively by the interfaces ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/develop/src/backend/common/infrastructure/config/source/index.ts#L105",children:"CommonSourceConfig"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/ce1c70a4e1e87fb5bea7cca960eaafbd15881a1f/src/backend/common/infrastructure/config/client/index.ts#L68",children:"CommonClientConfig"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"interface MyConfig {\n  name: string\n  data?: object\n  options?: object\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data"})," contains data that is required for a Component to operate such as credentials, callback urls, api keys, endpoints, etc..."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"options"})," are ",(0,s.jsx)(t.strong,{children:"optional"})," settings that can be used to fine-tune the usage of the Component but are not required or do not majorly affect behavior. EX additional logging toggles"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"concrete-class",children:"Concrete Class"}),"\n",(0,s.jsxs)(t.p,{children:["Components inherit from an abstract base class, ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/develop/src/backend/common/AbstractComponent.ts",children:(0,s.jsx)(t.code,{children:"AbstractComponent"})}),', that defines different "stages" of how a Component is built and initialized when MS first starts as well as when restarting the Component in the event it stops due to an error/network failure/etc...']}),"\n",(0,s.jsx)(t.h4,{id:"stages",children:"Stages"}),"\n",(0,s.jsx)(t.p,{children:"Stages below are invoked in the order listed. All stages are asynchronous to allow fetching network requests or reading files."}),"\n",(0,s.jsx)(t.p,{children:"The stage function (described in each stage below) should return a value or throw:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["return ",(0,s.jsx)(t.code,{children:"null"})," if the stage is not required"]}),"\n",(0,s.jsxs)(t.li,{children:["return ",(0,s.jsx)(t.code,{children:"true"})," if the stage succeeded"]}),"\n",(0,s.jsxs)(t.li,{children:["return a ",(0,s.jsx)(t.code,{children:"string"})," if the stage succeeded and you wish to append a result to the log output for this stage"]}),"\n",(0,s.jsxs)(t.li,{children:["throw an ",(0,s.jsx)(t.code,{children:"Exception"})," if the stage failed for any reason and the Component should not continue to run/start up"]}),"\n"]}),"\n",(0,s.jsx)(t.h5,{id:"stage-build-data",children:"Stage: Build Data"}),"\n",(0,s.jsx)(t.p,{children:"This stage should be used to validate user configuration, parse any additional data from async sources (file, network), and finalize the shape of any configuration/data needed for the Component to operate."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Implement ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/develop/src/backend/common/AbstractComponent.ts#L71",children:(0,s.jsx)(t.code,{children:"doBuildInitData"})})," in your child class to invoke this stage."]})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Examples"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Parse a full URL like ",(0,s.jsx)(t.code,{children:"http://SOME_IP:7000/subfolder/api"})," from user config containing a base url like ",(0,s.jsx)(t.code,{children:"data.baseUrl: 'SOME_IP'"})," and then store this in the class config"]}),"\n",(0,s.jsxs)(t.li,{children:["Validate that config ",(0,s.jsx)(t.code,{children:"data"})," contains required properties ",(0,s.jsx)(t.code,{children:"user"})," ",(0,s.jsx)(t.code,{children:"password"})," ",(0,s.jsx)(t.code,{children:"salt"})]}),"\n",(0,s.jsxs)(t.li,{children:["Read stored credentials from ",(0,s.jsx)(t.code,{children:"${this.configDir}/currentCreds-MySource-${name}.json"}),";"]}),"\n"]})]}),"\n",(0,s.jsx)(t.h5,{id:"stage-check-connection",children:"Stage: Check Connection"}),"\n",(0,s.jsx)(t.p,{children:"This stage is used to validate that MS can communicate with the service the Component is interacting with. This stage is invoked on MS startup as well as any time the Component tries to restart after a failure."}),"\n",(0,s.jsxs)(t.p,{children:["If the Component depends on ",(0,s.jsx)(t.strong,{children:"ingress"})," (like Jellyfin/Plex webhook) this stage is not necessary."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Implement ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/develop/src/backend/common/AbstractComponent.ts#L103",children:(0,s.jsx)(t.code,{children:"doCheckConnection"})})," in your child class to invoke this stage."]})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Examples"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Make a ",(0,s.jsx)(t.a,{href:"https://nodejs.org/docs/latest-v18.x/api/http.html#httprequesturl-options-callback",children:(0,s.jsx)(t.code,{children:"request"})})," to the service's server to ensure it is accessible"]}),"\n",(0,s.jsx)(t.li,{children:"Open a websocket connection and check for a ping-pong"}),"\n"]})]}),"\n",(0,s.jsx)(t.h5,{id:"stage-test-auth",children:"Stage: Test Auth"}),"\n",(0,s.jsxs)(t.p,{children:["MS determines if Auth is required for a Component based on two class properties. You should set these properties during ",(0,s.jsx)(t.code,{children:"constructor"})," initialization for your Component class:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"requiresAuth"})," - (default ",(0,s.jsx)(t.code,{children:"false"}),") Set to ",(0,s.jsx)(t.code,{children:"true"})," if MS should check/test Auth for this Component"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"requiresAuthInteraction"})," - (default ",(0,s.jsx)(t.code,{children:"false"}),") Set to ",(0,s.jsx)(t.code,{children:"true"})," if user interaction is required to complete auth IE user needs to visit a callback URL"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If the Component requires authentication in order to communicate with a service then any required data should be built in this stage and a request made to the service to ensure the authentication data is valid."}),"\n",(0,s.jsx)(t.p,{children:"This stage should return:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"true"})," if auth succeeded"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"false"})," if auth failed without unexpected errors","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"IE the authentication data is not valid and requires user interaction to resolve the failure"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"throw an exception if network failure or unexpected error occurred"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You ",(0,s.jsx)(t.em,{children:"should"})," attempt to re-authenticate, if possible. Only throw an exception or return ",(0,s.jsx)(t.code,{children:"false"})," if there is no way to recover from an authentication failure."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Implement ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/develop/src/backend/common/AbstractComponent.ts#L111",children:(0,s.jsx)(t.code,{children:"doAuthentication"})})," in your child class to invoke this stage."]})}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Examples"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Generate a Bearer Token for Basic Auth from user/password given in config and store in class properties"}),"\n",(0,s.jsx)(t.li,{children:"Make a request to a known endpoint with Authorization token from read credentials file to see if succeeds or returns 403"}),"\n",(0,s.jsx)(t.li,{children:"Catch a 403 and attempt to reauthenticate at an auth endpoint with user/password given in config"}),"\n"]})]}),"\n",(0,s.jsx)(t.h3,{id:"play-object",children:"Play Object"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"PlayObject"})," is the standard data structure MS uses to store listen (track) information and data required for scrobbling. It consists of:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Track Data -- a standard format for storing track, artists, album, track duration, the date the track was played at, etc..."}),"\n",(0,s.jsxs)(t.li,{children:["Listen Metadata -- Optional but useful data related to the specific play or specifics about the Source/Client context for this play such as","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Platform specific ID, web URL to track, device/user ID that played this track, etc..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Both Sources and Clients use the ",(0,s.jsx)(t.strong,{children:"PlayObject"})," interface. When a Component receives track info from its corresponding service it must transform this data into a PlayObject before it can be interacted with."]}),"\n",(0,s.jsxs)(t.p,{children:["For more refer to the TS documentation for ",(0,s.jsx)(t.code,{children:"PlayObject"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/FoxxMD/multi-scrobbler/blob/master/src/core/Atomic.ts#L141",children:(0,s.jsx)(t.code,{children:"AmbPlayObject"})})," in your project"]}),"\n",(0,s.jsx)(t.h2,{id:"creating-clients-and-sources",children:"Creating Clients and Sources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/multi-scrobbler/docs/development/dev-source",children:"Source Development and Tutorial"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/multi-scrobbler/docs/development/dev-client",children:"Client Development and Tutorial"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);