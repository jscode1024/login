		var toast = new auiToast();
		// 验证弹出框
		function prop_msk_win(){
			$(".prop-mask").fadeIn();
			$(".prop-mask").find(".prop-win").animate({bottom:'0'},500)
		}
		// 取消弹出框
		function cancel_btn(obj){
			let prop_mask=$(obj).parent().parent()
			$(".prop-mask").find(".prop-win").animate({bottom:'-234px'},500);
			$(".prop-mask").fadeOut()
		}
			// 如果手机号和验证码都对点亮下一步
			function iphones(){
				var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
				var phone=document.querySelector('#mobel').value;
				var codeValue=document.querySelector('#_num').value;
				if(phone && codeValue){//手机号与验证码
				  // 如果验证码大于点亮确认按钮
					$(".comfirm-btn").removeClass("default-next").addClass("active-next")
				}else{
					$(".comfirm-btn").removeClass("active-next").addClass("default-next")
					
				}
			}
	// 获取验证码
	var _num=false
	// _num变量为接收来的验证码
			 function getCode(){
						  checkPhone()
			 }
			// 验证手机号
				 function checkPhone(){
					 var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
					 var phone=document.querySelector('#mobel').value;
					 if(!myreg.test(phone)){
						    if(phone==''){
									toast.success({
										title:"手机号不能为空",
										duration:2000
									});
									return false
								};
								if(phone.length >0){
									toast.success({
										title:"手机号格式不对",
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
// 												document.getElementsByClassName("get-code")[0].onclick=false
// 												console.log('dd')
												return false
											}else{
												clearInterval(timer);
												$(".get-code").addClass("active-code").removeClass("default-code").html(" 获取验证码")
// 												document.getElementsByClassName("get-code")[0].onclick=function(){
// 													checkPhone()
// 												}
												return true
										}
								},1000);
								return  false
					}
					// 确认登录
					function comfirm_btn(){
					    var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
					    var phone=document.querySelector('#mobel').value;
							var codeValue=document.querySelector('#_num').value;
							console.log(_num)
					    if(myreg.test(phone) && (codeValue==_num)){
								toast.success({
										title:"成功",
										duration:2000
									});	
									window.location.href="revise_phone.html"
							}else{
								 toast.success({
								 		title:"输入有误请重新输入",
								 		duration:2000
								 	});	
									return false
								}
							}
						// 手机验证弹窗事件	
			var dialog = new auiDialog();
								function openDialog(type){
										switch (type) {
													case "邮箱验证":
															dialog.alert({
																	title:"弹出提示",
																	msg:'这里是内容',
																	buttons:['取消','确定']
															},function(ret){
																	console.log(ret)
															})
															break;
													case "联系在线客服":
															dialog.alert({
																			title:"弹出提示",
																			msg:'这里是内容',
																			buttons:['取消','确定']
																	},function(ret){
																			if(ret){
																					dialog.alert({
																							title:"提示",
																							msg:"您点击了第"+ret.buttonIndex+"个按钮",
																							buttons:['确定']
																					});
																			}
																	})
													default:
													break;
												}
											}
					