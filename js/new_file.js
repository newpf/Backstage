
		
		$(".search:eq(2)").click(function(){
			var A=$("input:eq(0)").val()
			var B=$("input:eq(1)").val()
			console.log(A)
			if(A=="1234"&B=="12345678"){
				window.open('new_file.html');
			}else{
				alert("账号或密码错误")
			}
		})
//		   						注册
		$(".txt-tow").click(function(){
			$(".box-row").hide({
				duration: 1000,
			});
			$(".register-box").toggle(100)
		})
		
		$(".search:eq(7)").click(function(){
			var A=$("input:eq(3)").val()
			var B=$("input:eq(4)").val()
			var C=$("input:eq(5)").val()
			var D=$("input:eq(6)").val()
			
			if(A=="1234"&B=="v9am"&C=="1234"&D=="12345678"){
				$(".register-box").hide({
					duration:1000,
				});
				$(".box-row").toggle(1000)
			}else{
				alert("输入错误,请检查")
			}
		})
		






		











