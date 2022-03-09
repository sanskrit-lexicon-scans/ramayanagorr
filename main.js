// (setq js-indent-level 1)  # for Emacs

function verse_error(verse) {
 let elt=document.getElementById('verse');
 let html = '<p>Warning: ' + verse + '</p>';
 elt.innerHTML = html;
}

function get_verse_from_url() {
 /* two ways to get kanda, sarga, verse from current url
 ?
 ? kanda is 1-6
*/
 let href = window.location.href;
 let url = new URL(href);
 let verse = url.searchParams.get('verse'); // Could be null
 if (verse == null) {
  let search = url.search  // ?X
  verse = search.substr(1)  // drop initial ?
 }
 //console.log('get_verse_from_url: ',verse);
 return verse;
}
function get_index_from_verse(verse,indexdata) {
 // verse = k.s.v where k is kaRqa, s is sarga number, and v is verse number
 if ((typeof verse) != 'string') {return null;}
 // use regex literal
 let regex = /[., ]+/;
 let parts = verse.split(regex);
 let k,s,v;
 if (parts.length == 3) {
  k = parts[0];
  s = parts[1];
  v = parts[2];
 }else if (parts.length == 2) {
  k = parts[0];
  s = parts[1];
  v = 1;
 }else {
  return null;
 }
 if (k in indexdata) {
  let sd = indexdata[k];
  if (s in sd) {
   let pagerecs = sd[s];
   for (let pagerec of pagerecs) {
    //let v = pagerec['v']; // volume
    //let p = pagerec['page'];
    let v1 = pagerec['v1'];
    let v2 = pagerec['v2'];
    if ((v1 <= v) && (v <= v2)) {
     // what to return?
     return pagerec;
    }
   }
   return null;
  } else {
   return null;
  }
 }else {
  return null;
 }
}

function display_verse_url() {
 //console.log('begin display_verse_url')
 let verse = get_verse_from_url();
 //console.log('verse=',verse);
 if (verse == null){
  verse_error('Invalid url: use kanda,sarga[,verse]');
 }else {
  let pagerec = get_index_from_verse(verse,indexdata);
  //console.log('pagerec=',pagerec);
  let v = pagerec['v'];
  let p = pagerec['page'];
  let id = `page${v}.${p}`;
  //console.log('id=',id);
  let elt = document.getElementById(id); // null on error
  if (! elt) {
   verse_error(`Cannot find verse: ${verse}`)
  }else {
   let elt1 = elt.querySelector('span');
   elt1.click();
   openTreeAtPageId(id);
  }
 }
}

function get_indexdata_from_vol_page(vol0,page) {
 // Use a slow method. indexdata assumed global
 let vol = vol0.toString();
 let kd = indexdata; // kanda object
 for (let k in kd) { // kanda
  let sd = indexdata[k]; // sarga object
  for (let s in sd) {
   let pagerecs = sd[s]; // array of page objects
   for (let pagerec of pagerecs) {
    //console.log(pagerec['v'],pagerec['p']);
    if (pagerec['v'] != vol) {continue;}
    if (pagerec['page'] != page) {continue;}
    return pagerec; // Success
   }
  }
 }
 return undefined; 
}
function display_page(vol,page) {
 let pagerec = get_indexdata_from_vol_page(vol,page);
 let elt1 = document.getElementById('verseid');
 let elt2 = document.getElementById('verse');
 let html = '';
 if (!pagerec) {
  html = `Vol ${vol}, Page ${page} NOT FOUND`;
  elt1.innerHTML = html;
  elt2.innerHTML = '';
 }else {
  //console.log('pagerec=',pagerec);
  //html = `Vol ${vol}, Page ${page}`;
  let k = pagerec['k'];
  let s = pagerec['s'];
  let v1 = pagerec['v1'];
  let v2 = pagerec['v2'];
 
  html = `Kanda ${k}, Sarga ${s}, verses ${v1}-${v2}`;
  elt1.innerHTML = html;
  let page1 = page.toString().padStart(3,'0');
  let pdfcur = `rgorr_${vol}.${page1}.pdf`;
  let urlcur = `pdfpages/${pdfcur}`;
  if (true){ // (true || doesFileExist(urlcur)) 
   let android = ` <a href='${urlcur}' style='position:relative; left:100px;'>Click to load pdf</a>`;
   //let imageElt = `<object id='servepdf' type='application/pdf' data='${urlcur}' 
   //           style='width: 98%; height:98%'> ${android} </object>`;
   let imageElt = `<object id='servepdf' type='application/pdf' data='${urlcur}' 
              width="98%"; height="98%"> ${android} </object>`;
   elt2.innerHTML = imageElt;
  }else {
   html = `Vol ${vol}, Page ${page} NOT FOUND`;
   elt1.innerHTML = html;
   elt2.innerHTML = '';
  }
 }
}

/* =======================================================*/
// indexdata assumed available. Startup function actions
/* =======================================================*/

document.getElementsByTagName("BODY")[0].onload = () => {
 test_make_index();  // construct and show index
 display_verse_url(); // parse url and show a verse if indicated.
}

/* =======================================================*/
// functions used in development, but not currently used
/* =======================================================*/
function display_page_crude(vol,page,divelt) {
 let page1 = page.toString().padStart(3,'0');
 let pdfcur = `rgorr_${vol}.${page1}.pdf`;
 let urlcur = `pdfpages/${pdfcur}`;
 let android = ` <a href='${urlcur}' style='position:relative; left:100px;'>Click to load pdf</a>`;
 let imageElt = `<object id='servepdf' type='application/pdf' data='${urlcur}' 
              style='width: 98%; height:98%'> ${android} </object>`;
 divelt.innerHTML = imageElt;
}

function display_page_crude_id(vol,page,divid) {
 // divid is the name of an element with this 'id'
 let elt=document.getElementById(divid);
 display_page(vol,page,elt);
}
function doesFileExist(urlToFile)
{ /* This may work with an Apache server (e.g. Xampp)
  but does not work file 'file:///' (CORS error).
 */
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();

    if (xhr.status == "404") {
        //console.log("File doesn't exist");
        return false;
    } else {
        //console.log("File exists");
        return true;
    }
}

