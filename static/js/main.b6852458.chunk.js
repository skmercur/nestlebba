(this.webpackJsonpsales_out=this.webpackJsonpsales_out||[]).push([[0],{223:function(e,t,a){e.exports=a(437)},228:function(e,t,a){},229:function(e,t,a){},282:function(e,t){},284:function(e,t){},437:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(3),c=a.n(u),o=(a(228),a(229),a(131)),i=a.n(o),l=a(71),s=a(199),d=a(200),m=a(201),h=a(219),f=a(202),p=a(220),b=a(447),S=a(441),E=a(443),v=a(5),F=a(442),k=a(445),N=a(446),g=a(444),w=a(203),P=(a(236),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).handleFileUpload=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],[],r=[],[],[],[],u=[],"uploading"!==t.file.status&&(b.a.info("Debut de la lecture"),a.setState({ModalVisible:!0}),Object(g.a)(t.file).then((function(e){e.length;e.forEach((function(e){null!=e[10]&&"* Salesman"!=e[10]&&n.push(e[10])}));var t;a.setState({TitleStatus:"Lecture terminer"}),t=500,new Promise((function(e){return setTimeout(e,t)})),a.addProgress(0,1),n=Object(l.a)(new Set(n)),e.forEach((function(e){null!==e[5]&&"Transaction Type"!==e[5]&&r.push(e[5])})),r=Object(l.a)(new Set(r)),b.a.info("Recherche Des vendeurs"),n.forEach((function(e){u.push({vendeur:e,NombreFacture:0,NombreFactureUnique:0,NombreCreditNote:0,NombreRetour:0,SkuParFacture:0})}));var c=0;b.a.info("Calcules des SKU/Facture"),n.forEach((function(t){a.addProgress(c,t.length);var n=[],o=[];r.forEach((function(a){e.forEach((function(e){t==e[10]&&a==e[5]&&("Invoice"===e[4]?(u[c].NombreFacture+=1,n.push(e[5])):(u[c].NombreRetour+=1,o.push(e[5])))})),n=Object(l.a)(new Set(n)),o=Object(l.a)(new Set(o)),u[c].NombreFactureUnique=n.length,u[c].NombreCreditNote=o.length})),c++}));var o=[];u.forEach((function(e){e.SkuParFacture=(e.NombreFacture-e.NombreRetour)/(e.NombreFactureUnique-e.NombreCreditNote),o.push({Vendeur:e.vendeur,SkuParFacture:e.SkuParFacture})})),a.setState({Status:"success",TitleStatus:"Terminer ! ",Vendeurs:o,title:"Termin\xe9"}),b.a.success("Terminer"),a.setState({ModalVisible:!1})})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={file:null,Vendeurs:[],Status:"info",TitleStatus:"Veuillez patienter ",percent:0,title:"Sku/Facutre"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"addProgress",value:function(e,t){var a=e/t*100;this.setState({percent:a,TitleStatus:"Fichier est encour de traitement",ModalVisible:!1})}},{key:"render",value:function(){var e=this,t=(S.a.Header,S.a.Footer,S.a.Sider,S.a.Content),a=E.a.Dragger;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,this.state.title),r.a.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.a.createElement(S.a,null,r.a.createElement(t,null,r.a.createElement(a,{name:"file",onChange:function(t){e.handleFileUpload(t)},beforeUpload:function(){return!1}},r.a.createElement("p",{className:"ant-upload-drag-icon"},r.a.createElement(v.a,{type:"inbox"})),r.a.createElement("p",{className:"ant-upload-text"},"Appuier ici ou deplacer le fichier ici"),r.a.createElement("p",{className:"ant-upload-hint"})),r.a.createElement(F.a,{columns:[{title:"Vendeur",dataIndex:"Vendeur",key:"Vendeur"},{title:"SKU/Facture",dataIndex:"SkuParFacture",key:"SkuParFacture"}],dataSource:this.state.Vendeurs}))),r.a.createElement(k.a,{title:"En cours de traitement",visible:this.state.ModalVisible,cancelButtonProps:{disabled:!0},okButtonProps:{disabled:!0}},r.a.createElement(N.a,{status:this.state.Status,title:this.state.TitleStatus})))}}]),t}(n.Component));var V=function(){return r.a.createElement(P,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[223,1,2]]]);
//# sourceMappingURL=main.b6852458.chunk.js.map