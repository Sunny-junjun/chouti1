var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var contentHeight=280;
var titleHeight=30;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.length;i++){
			if(i<=this.index){
				ctbox[i].style.top=i*titleHeight+'px';
			}else{
				ctbox[i].style.top=i*titleHeight+contentHeight+'px';
			}
		}
	}
}