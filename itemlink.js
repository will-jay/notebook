/////////////////////////////////////////////////////////////////////
// Extension scripts for Mybase Desktop v8.x
// Copyright 2010-2021 Wjj Software. All rights Reserved.
// Website: www.wjjsoft.com  Contact: info@wjjsoft.com
/////////////////////////////////////////////////////////////////////
// This code is property of Wjj Software (WJJSOFT). You may not use it
// for any commercial purpose without preceding consent from authors.
/////////////////////////////////////////////////////////////////////
var xItemIDs={"3": "a1a40a02_f71042d_0.md.html"
	, "4": "a1d10a12_7dff0d03_0.md.html"
	, "5": "a15c09f0_3b2408ef_0.md.html"
	, "12": "a23509fc_f3d0431_0.md.html"
	, "13": "a19709dc_1039047f_0.md.html"
	, "14": "a1ab09d5_1007044b_0.md.html"
	, "15": "a16609df_f0a0436_0.md.html"
	, "16": "a2440a14_f880445_0.md.html"
	, "17": "a2a20a33_fc60454_0.md.html"
	, "18": "a13509cd_fb10436_0.md.html"
	, "19": "a1e809e9_fe90474_0.md.html"
	, "20": "a26f0a22_399b08a8_0.md.html"
	, "21": "a19b09f2_3ac008e4_0.md.html"
	, "23": "7d65090c_3a9308cb_0.md.html"
	, "24": "cc210abd_1bf00c6_0.md.html"
	, "25": "a29a09e8_81320d61_0.md.html"
	, "26": "cddd0b3f_13a11375_0.md.html"
	, "27": "a27909cd_7f1d0d3b_0.md.html"
	, "28": "a5040a6f_102c0474_0.md.html"
	, "29": "a34809e8_3777086c_0.md.html"
	, "30": "cdb00b2f_7d580d0a_0.md.html"
	, "31": "a3df0a1b_3959088c_0.md.html"
	, "32": "a5420a55_d8d41125_0.md.html"
	, "33": "a35409ff_a8370f3d_0.md.html"
	, "34": "cd8c0b26_3aa208c1_0.md.html"
	, "35": "a2b409ea_27e0145_0.md.html"
	, "36": "a4b20a39_f0e042a_0.md.html"
	, "37": "a46c0a26_3a8e08bd_0.md.html"
	, "38": "a2c509e7_a67c0f1c_0.md.html"
	, "39": "a32109fd_7e170d21_0.md.html"
	, "40": "a26709c7_ab2f0f5b_0.md.html"
	, "41": "a36209e0_1fe40640_0.md.html"
	, "47": "a6620aa1_6710231_0.md.html"
	, "48": "a47e0a4e_21100667_0.md.html"
	, "53": "a2b80a1f_6440218_0.md.html"
	, "54": "a14509a2_6b10237_0.md.html"
	, "55": "a3860a0e_aaf90f6e_0.md.html"
	, "56": "cc870ad0_591a0ad8_0.md.html"
	, "57": "a5160a4d_478020c_0.md.html"
	, "58": "a24d09bf_af7f0fa7_0.md.html"
	, "59": "a5630a50_7e220d3f_0.md.html"
	, "60": "a31709ef_7d530d1f_0.md.html"
	, "61": "a2bd09f6_7e970d2a_0.md.html"
	, "62": "a4ac0a40_22520692_0.md.html"
	, "63": "a60e0a8a_d6c1111d_0.md.html"
	, "64": "a34e0a00_7ee80d36_0.md.html"
	, "65": "a21209bb_dd201188_0.md.html"
	, "66": "a3d009fe_21c0068d_0.md.html"
	, "67": "a4870a32_3689084b_0.md.html"
	, "68": "a21509ba_e01711bf_0.md.html"
	, "69": "a4b20a52_7b2b0cf4_0.md.html"
	, "70": "a21109b8_aa270f4b_0.md.html"
	, "71": "a2be09e4_7e890d30_0.md.html"
	, "72": "a2ab09f0_a90b0f59_0.md.html"
	, "73": "a2e509f1_7c530d0b_0.md.html"
	, "74": "cd330af7_10370473_0.md.html"
	, "75": "a4a40a3e_2173066f_0.md.html"
	, "76": "9a3d09f3_36030841_0.md.html"
	, "77": "a39c0a2b_7e270d21_0.md.html"
	, "78": "a4e00a65_3a7408d9_0.md.html"
	, "79": "a3640a1b_80c90d50_0.md.html"
	, "80": "a3be09f5_221b068c_0.md.html"
	, "81": "746608bb_2187067e_0.md.html"
	, "82": "a4e00a48_fc20452_0.md.html"
	, "83": "a2b90a17_57b40ae4_0.md.html"
	, "84": "a52f0a53_4860218_0.md.html"
	, "85": "a3390a07_a2db0ef7_0.md.html"
	, "86": "a2ba09e2_a6950f29_0.md.html"
	, "87": "a2e60a03_a7130f26_0.md.html"
	, "88": "a3f40a47_7b8c0cf9_0.md.html"
	, "89": "a25e09c4_7cd90d0e_0.md.html"
};
var xBkmkIDs={
};
var _init=function(e){
	var _trim=function(s){return (s||'').replace(/^\s+|\s+$/g, '');};
	var _parse_nyflink=function(s){
		//nyf://entry?dbfile=/Users/wjj/temp/mybase_4.nyf&itemid=17&itemtext=p222222
		//nyf://entry/?dbfile=C%3A/Users/wjj/Desktop/mybase_2.nyf&itemid=16&itemtext=plain%20text%2033333333
		//2021.5.30 CHM/IE automatically appends a slash after hostname, like this; nyf://entry/?...
		var m=s.match(/^(nyf:\/\/entry)[/\\]*\?(.+)$/i), xRes;
		if(m){
			var v2=m[2].replace(/&amp;/g, '&').split('&');
			for(var i=0; i<v2.length; ++i){
				s=v2[i];
				var p=s.indexOf('=');
				if(p>0){
					var k=_trim(s.substring(0, p)).toLowerCase();
					var v=_trim(s.substring(p+1));
					if(k && v){
						if(xRes===undefined) xRes={};
						xRes[k]=v;
					}
				}
			}
		}
		return xRes;
	};
	var _target_of=function(sHref){
		var sRes;
		var d=_parse_nyflink(sHref);
		if(d){
			var sItemID=d.itemid, sSsgPath=d.itempath||d.ssgpath, sSsgName=d.file||d.ssgname, sBmID=d.bmid;
			if(sSsgName){
				var sFn=xItemIDs[ (sItemID + '/' + sSsgName) ] || xItemIDs[ (sSsgPath + '/' + sSsgName).replace(/[/\\]+/g, '/').replace(/[/\\]+$/, '') ];
				if(sFn){
					sRes=sFn;
				}else{
					alert('Could not locate the attachment file. \n\n' + sHref);
				}
			}else{
				if(sSsgPath || sItemID){
					var sFn=xItemIDs[sItemID] || xItemIDs[ (sSsgPath + '/').replace(/[/\\]+/g, '/') ];
					if(sFn){
						sRes=sFn;
					}else{
						alert('Could not locate the target page. \n\n' + sHref);
					}
				}else if(sBmID){
					var v=(xBkmkIDs[sBmID]||'').split('\t');
					if(v && v.length>2){
						var sItemID=parseInt(v[0]), sSsgName=v[1], sAnchor=v[2];
						var sFn=xItemIDs[sItemID];
						if(sFn){
							sRes=(sFn + '#' + sAnchor).replace(/#+$/, '');
						}else{
							alert('Could not locate the bookmarked page. \n\n' + sHref);
						}
					}
				}else{
					alert('Invalid page tags. \n\n' + sHref);
				}
			}
		}
		return sRes;
	};
	var _link_of=function(p){
		//2018.4.5 the target element could be a <SPAN> inside of <a> with in qrich --> html;
		var sHref='';
		while(p && !sHref){
			sHref=p.href||'';
			p=p.parentNode;
		}
		return sHref;
	};
	var _click=function(e){
		//2021.5.30 for qirch->html, the "e.srcElement" may return <span> embraced inside <a>;
		var sHref=_link_of(e.srcElement||e.target);
		if(sHref){
			var sRes=_target_of(sHref);
			if(sRes){
				if(sRes.replace(/#+$/, '').replace(/^(.+?)([^/.]+)$/, '$2').search(/^(html?)$/i)===0){
					//2021.5.29 let only html documents open in-place;
					document.location.href=sRes;
				}else{
					//2021.5.29 non-html documents (attachments) open in a new window;
					document.location.href=sRes; //window.open(sRes);
				}
			}else{
				window.open(sHref); //for other ordinary website/file links;
			}
			e.cancelBubble=true; //for IE;
			if(e.preventDefault) e.preventDefault();
			if(e.stopPropagation) e.stopPropagation();
			return false;
		}
	};
	var v=document.getElementsByTagName('a');
	if(v && v.length && v.length>0){
		for(var i=0; i<v.length; ++i){
			var a=v[i];
			if(a){
				if(a.addEventListener){
					a.addEventListener('click', _click, false);
				}else if(a.attachEvent){
					a.attachEvent('onclick', _click);
				}
				if(!a.getAttribute('title')){
					a.setAttribute('title', a.getAttribute('href'));
				}
			}
		}
	}
};
document.addEventListener('DOMContentLoaded', _init);