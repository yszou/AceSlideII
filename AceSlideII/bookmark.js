javascript:(function(){ var n=document.createElement('script'); n.type='text/javascript'; n.src='http://ajax.googleapis.com/ajax/libs/dojo/1.8.0/dojo/dojo.js'; n.setAttribute('data-dojo-config', "async: true, packages:[{name: 'AceSlideII', location: 'http://localhost:8000'}], fw: 600, fh: 450"); document.getElementsByTagName('head')[0].appendChild(n); var n2=document.createElement('script'); n2.type='text/javascript'; n2.src='http://localhost:8000/AceSlideII/init.js'; document.getElementsByTagName('head')[0].appendChild(n2); })();
