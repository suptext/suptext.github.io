// See https://observablehq.com/framework/config for documentation.

import head from './docs/util/head.js'
import header from './docs/util/header.js'
// import footer from './docs/util/footer.js'

// import * as fs from 'fs';
// const dir = './docs/view'
// let files = await getFiles(dir); 

export default {

  title: "suptext",
  head, header, 
  footer: `<hr/><i>My thoughts on tools, language, development and what's behind them.</i><span class="copy"></>`,
  toc: false,
  search: false,
  typographer: true,
  theme: ["dark", "alt", "sun-faded"], // is overridden in css
  style: "./custom.css"

  // root: "docs", // path to the source root for preview
  // output: "dist", // path to the output root for build

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


};

/*function getFiles(directory) {
  return new Promise((resolve, reject) => {
     fs.readdir(directory, (err, files) => {
       if (err) {
         reject(err);
       } else {
         resolve(files);
       }
     });
  });
 }*/
