			var toast = new auiToast();
			// 如果邮箱和验证码都对点亮下一步
			function iphones(){
				var myreg=/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/
				var phone=document.querySelector('#mobel').value;
				var codeValue=document.querySelector('#_num').value;
				if(phone && codeValue){//与验证码
				  // 如果验证码大于点亮确认按钮
					$(".comfirm-btn").removeClass("default-next").addClass("active-next")
				}else{
					$(".comfirm-btn").removeClass("active-next").addClass("default-next")
					
				}
			}
	// 获取验证码
	// _mun变量为接收到的验证码
		var _num=false
				 function getCode(){
							  checkPhone()
				 }
				// 验证邮箱
					 function checkPhone(){
						var myreg=/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/
						 var phone=document.querySelector('#mobel').value;
						 if(!myreg.test(phone)){
							    if(phone==''){
										toast.success({
											title:"邮箱不能为空",
											duration:2000
										});
										return false
									};
									if(phone.length >0){
										toast.success({
											title:"邮箱格式不对",
											duration:2000
										});
										return false
									}
						 }else{
							   setTimer()
									_num="123456"
								  return true
						 }
						 
					}
						// 倒计时
						function setTimer(){
							 var timer =null;
								var num =60;
							 	timer=setInterval(function(){
												if(num >0){
														num-=1;
													$(".get-code").html(+num+"S后重新获取").addClass("default-code").removeClass("active-code")
// 													document.getElementsByClassName("get-code")[0].onclick=false
// 													console.log('dd')
													return false
												}else{
	
													clearInterval(timer);
													$(".get-code").addClass("active-code").removeClass("default-code").html(" 获取验证码")
// 													document.getElementsByClassName("get-code")[0].onclick=function(){
// 														checkPhone()
// 													}
													return true
											}
									},1000);
									return  false
						}
						// 确认登录
						function comfirm_btn(){
						    var myreg=/^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/
						    var phone=document.querySelector('#mobel').value;
								var codeValue=document.querySelector('#_num').value;
								console.log(_num)
						    if(myreg.test(phone) && (codeValue==_num)){
									toast.success({
											title:"修改成功",
											duration:2000
										});	
										return true
								}else{
									 toast.success({
									 		title:"输入有误请重新输入",
									 		duration:2000
									 	});	
										return false
									}
								}