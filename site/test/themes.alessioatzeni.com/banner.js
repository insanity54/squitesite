var filename='http://themes.alessioatzeni.com/banner.css?' + new Date().getTime();		
var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", filename);
document.getElementsByTagName("head")[0].appendChild(fileref);

var demoad = document.createElement('div');
demoad.id = 'banner';
demoad.innerHTML = '<div id="banner-mode"><a href="http://themeforest.net/item/alice-agency-freelance-portfolio-theme/11302841/?ref=Bluxart"><img src="http://themes.alessioatzeni.com/banner.png" /></a></div><span id="cda-remove"></span>';
document.getElementsByTagName('body')[0].appendChild(demoad);

document.getElementById('cda-remove').addEventListener('click',function(e){
	demoad.style.display = 'none';
	e.preventDefault();
});