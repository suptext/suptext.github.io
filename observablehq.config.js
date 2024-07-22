import * as fs from 'fs';
import header from './docs/comp/header.js'
import footer from './docs/comp/footer.js'

// const dir = './docs/view'
// let files = await getFiles(dir); 

// See https://observablehq.com/framework/config for documentation.
export default {

  // The project’s title; used in the sidebar and webpage titles.
  title: "suptext",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  /*pages: [
    {
      name: "view",
      pages: files.map((file,i) => ({
        name:file, path:"/view/"+file.split('.md')[0]
      }))
    },
    { 
      name: "meta",
      pages: [
      {name:'',path:''}
      ]
    }
  ],*/

  // Some additional configuration options and their defaults:
     theme: ["dark","alt","sun-faded"], // try "light", "dark", "slate", etc.
     head: `<meta name="view-transition" content="same-origin" />
     <!-- HTML Meta Tags -->
     <meta name="description" content="| thoughts on tools, language a development">
     
     <!-- Facebook Meta Tags -->
     <meta property="og:url" content="https://suptext.is/">
     <meta property="og:type" content="website">
     <meta property="og:title" content="suptext">
     <meta property="og:description" content="| thoughts on tools, language a development">
     <meta property="og:image" content="https://suptext.is/_file/imgs/logo.1a7c0c17.png">
     
     <!-- Twitter Meta Tags -->
     <meta name="twitter:card" content="summary_large_image">
     <meta property="twitter:domain" content="suptext.is">
     <meta property="twitter:url" content="https://suptext.is/">
     <meta name="twitter:title" content="suptext">
     <meta name="twitter:description" content="| thoughts on tools, language a development">
     <meta name="twitter:image" content="https://suptext.is/_file/imgs/logo.1a7c0c17.png">`,
     header, // what to show in the header (HTML)
     footer: `<hr/><i>My thoughts on tools, language and development and what's behind them.</i>`, // what to show in the footer (HTML)
     toc: false, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build
  // search: true, // activate search
     style:"./custom.css"
};

function getFiles(directory) {
  return new Promise((resolve, reject) => {
     fs.readdir(directory, (err, files) => {
       if (err) {
         reject(err);
       } else {
         resolve(files);
       }
     });
  });
 }
