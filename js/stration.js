		$(document).ready(function(){
				layui.use(['element','form','table','carousel'], function(){
				  	var element = layui.element,
				  		form = layui.form,
				  		table = layui.table,
				  		carousel = layui.carousel
//						轮播图
				carousel.render({
					elem:'#text'
					,width:'100%'
					,height:'800px'
					,arrow:'always'
					,interval:'1000'
				});
//					表单监听提交
				  	form.on('submit(formDemo)', function(data){
				    layer.msg(JSON.stringify(data.field));
				    return false;
			 	});

//			 	监听导航点击					
			 	element.on('nav(side)',function(elem){
			 		//layui 2.3.0 版,elem 返回的是当前 A元素,需要在父元素中找 _href 值
			 		var title = elem.find('cite').text();
			 		var	url = elem.offsetParent().find('a').attr('_href');
//			 	        	如果没有节点
						if(url == undefined){
							return false;
						}else{
							for(var i=0;i<$(".x-iframe").length;i++){
								t = $('.x-iframe').eq(i).attr('src').split("?");
								if(t[0] == url){
									element.tabChange('x-tab',i)
									return;
								}
							}
						}
//								新建选项卡
							if(i == $('.layui-tab-title li').length){
								rand = Math.random();
								if(url.length == 0 || url.indexOf("javascript")>-1){
									return;
								}else if(url.indexOf("?" > -1)){

								}else{
									url = url + "?versions=" + rand;
								}
								res = element.tabAdd('x-tab',{
									title:title,
									content:'<iframe frameborder="0" src="' + url + '" class="x-iframe"></iframe>'
									,id:i
								});
								element.tabChange("x-tab",i);
							}

			 	});
			});
						
	
					var isShow = true;  //定义一个标志位
//									点击按钮,收缩左边导航条
					    $('.kit-side-fold').click(function(){
					        $('.x-side li:eq(0)').each(function(){
					            if($(this).is(':hidden')){
						            $(this).show();
//						            		字体
						            $('.layui-nav-side i').show()
//						            		图标
					                $('.layui-side .layui-nav-more').show()
//					                		子级菜单
					                $('.layui-side .layui-nav-child dd').show()

					            }else{
					            	$(this).hide();
					                $('.layui-nav-side i').hide()
					                $('.layui-side .layui-nav-more').hide()
					                $('.layui-side .layui-nav-child dd').hide()
					            }
					            
					        });
					        if(isShow){
//					        				收缩以后的宽度
					            $('.layui-side.layui-bg-black').width(60); 
//					           				 内容区域扩大
					            $('.layui-body').css('margin-left', -140 +'px');
//					            			header
					            $('.x-side li:eq(1)').css('margin-top', 199 +'px');
					            $('.layui-header').css('margin-left', -280 +'px')
//					            			底部区域
								$('.layui-footer').css('margin-left', -140 +'px');
					            isShow =false;
					        }else{
					            $('.layui-side.layui-bg-black').width(200);
					            $('.layui-body').css('margin-left', 0 +'px');
					            $('.x-side li:eq(1)').css('margin-top', 0 +'px');
					            $('.layui-footer').css('margin-left', 0 +'px');
					            $('.layui-header').css('margin-left', 0 +'px')
					            isShow =true;
					        }
					    });
//					    					点击收缩以后的菜单
					    $('#sideul li').click(function(){
					    	isShow =true;
					    	if($('#sideul').width() == 60){
					    		$('#sideul').width(200);
					    		$('.layui-nav-item i').show();
					            $('.layui-nav-more').show();
								$('.header').show();
					    		$('.layui-body').css('margin-left', 0 +'px');
					            $('.x-side li:eq(1)').css('margin-top', 0 +'px');
					            $('.layui-footer').css('margin-left', 0 +'px');
					            $('.layui-header').css('margin-left', 0 +'px')
					            $('.layui-nav-child dd').show();
					    	}
					    })
					    	
//					     				判断当屏幕宽度小于1000px的时候
						$(window).resize(function(){
							if($('.layui-container').width()<1000){
								$('.kit-side-fold').unbind('click');
//					        				左侧导航栏消失
					       		$('.layui-nav-side').hide()
//					        				内容区域
						   		$('.site-content').css('margin-left', 0 +'px');
					       }else{
					       		$('.kit-side-fold').bind('click')
					        	$('.layui-nav-side').show()
					        	$('.site-content').css('margin-left', 200 +'px');
					        }
						})
					});
					   