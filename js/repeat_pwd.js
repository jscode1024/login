var toast = new auiToast();
function iphones(){
		var psw_check=true; //如果用户密码存在
		var password = document.getElementById("first_psw").value;  
		var repassword = document.getElementById("send_psw").value;
	 if(psw_check){
				check_psw(password,repassword)
	  }
}
// 判断两次输入是否一致点亮下一步
function check_psw(password,repassword){
	if(password.length && repassword){
						$(".comfirm-btn").addClass("active-next").removeClass("default-next")
						return true
				}else{
						$(".comfirm-btn").addClass("default-next").removeClass("active-next")
						return false
				}
}
// 确认表单下一步
function comfirm_btn(){
		 	var myreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,30}$/
	   var password = myreg.test(document.getElementById("first_psw").value)
	   var repassword =myreg.test(document.getElementById("send_psw").value);
     check_input(password,repassword)
}
// 判断两处输入是否一致验证表单
 function check_input(password,repassword){
	    
			if(password == repassword && repassword !='' ){
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
 // 点击图片显示隐藏密码
 	 var check_bg=true
 function change_bg(obj){
	 if(check_bg)
	    {
				$(obj).find("img").attr("src","images/password_icom_visible@2x.png")
				$(obj).prev("input").attr("type","text");
				check_bg=false
			}else{
				$(obj).find("img").attr("src","images/password_icom_invisible@2x.png")
				$(obj).prev("input").attr("type","password");
				check_bg=true
			}
 }