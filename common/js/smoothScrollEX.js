;(function($) {
	$(window).load(function(){
			
	var headerHight = 135; 
				
		$('[href*=#]:not([href*=collapse])').click(function(event){  //href属性に#が含まれている要素をクリックした時
			
			var element = $(this);
			var elementHref = element.attr('href');
			
			
			if(elementHref.search(/^#.+/) === 0){  //href属性が#から始まる場合（通常のスムーススクロール）

                                    var href= $(this).attr("href");
                                    var target = $(href == "#" || href == "" ? 'html' : href);
                                    var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
                                        $("html, body").animate({scrollTop:position}, 550, "swing");
                                   return false;
			}
			else {  //それ以外の場合
	
				var hrefSplit = elementHref.split(/#/);  //href属性を"#"の前後で分割し、配列にする
				var hrefFirst = hrefSplit[0];  //#より前の文字列をhrefFirst
				var hrefLast = '#' + hrefSplit[1];//#より後の文字列を、"#"をつけてhrefLast
				
				var pathname = location.pathname;  //URLのpathnameを取得
				var pathnameSplit = pathname.split(/\//);  //pathnameを"/"で分割して配列にする
				var pathNameLast = pathnameSplit[pathnameSplit.length - 1];  //pathnameの最後の文字列を取得
 
				var hostname = location.hostname;  //URLのhostnameを取得
				
				
				function aHrefCheck(){  //"page.html#anchor","http://hostnameA/page.html#anchor","http://hostnameB/page.html#anchor"を振り分ける関数
				 
					var check1 = hrefFirst.match(/https?:\/\/.[^\/]+\//);  //#より前の文字列に"http(s)://文字列"が含まれているか判別
					if(check1 === null){  //含まれていない場合は"true"を返す
						return true;
					}else{  //含まれている場合
						var check2 = check1[0].indexOf(hostname);  //その文字列にhostnameが含まれているか判別
						if (check2 != -1){  //含まれている場合、trueを返す
							return true;
						}else{  //含まれていない場合、falseを返す(何もしない)
							return false;
						}
					}
				}			
		
				function aHrefChange(){  //"#"を"?id="に変換する関数
					
					if (hrefFirst.indexOf(pathNameLast) != -1){  //#より前の文字列にpathnameの最後の文字列が含まれているか判別 ex."pageA.html#anchor" or "pageB.html#anchor"
						return;  //含まれていたら何もしない
					}else{  //含まれていない場合、"#"を"?id="に変換する
						hrefLast = hrefLast.replace('#','?id=');			
						elementHref = hrefFirst + hrefLast;
						element.attr('href',elementHref);			
					}
				}
				
				if(aHrefCheck() === true){  //aHrefCheck関数でtrueが返ってきた時
					aHrefChange();  //aHrefChangeが実行される
				}else{  //それ以外は何もしない（falseの時）
					return;
				}		
			}
		});
		//ページが読み込まれた時		
		var url = $(location).attr('href');  //URLのhrefを取得
		var stringMatch = url.indexOf('?id=');  //urlに"?id="の文字列が含まれているか判別
		
		if(stringMatch === -1){  //含まれていない場合（-1を返す）、何もしない
			return;
		}else {  //含まれている場合、アニメーションさせる
			var urlSplit = url.split(/\?id=/);
			var anchorLink = '#' + urlSplit[urlSplit.length -1];
			var anchorLinkTop = $(anchorLink).offset().top-headerHight;
			$('html,body').animate({scrollTop:anchorLinkTop}, 550, "swing");
			
		}
 
	return this;
	
	});
		
})(jQuery);