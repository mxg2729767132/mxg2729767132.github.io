//判断限制输入
$("#text").on("keydow keyup",function(){
   var l=$(this).val().length;
    if(l>100){
        l=100;
        alert("字数已经超过限制，最多可以写"+l+"个");
        $(this).val(function(index,value){
            return value.slice(0,100);
        });

    }
    $(".notice span").text(function(){
        return l<10?"0"+l:l;
    });
});
//点击提交
$("#submit").click(function(){
    var val=$("#text").val();
    if(val===""){
        alert("内容不能为空");
        return;
    };
    var data=getData();
    var date=new Date();
    var time=date.getTime();
    data.push({text:val,time:time,isDnone:false,isStar:false,isDelete:false});
    saveData(data);
    $("#text").val("");
    $(".notice span").text("00");
    location.reload();
})
//关闭添加界面
$(".guanbi").click(function(){
    $(".add").hide();
    $(".wait").slideDown();
})
//获取信息
function getData(){
    if(localStorage.todo){
        return JSON.parse(localStorage.todo);
    }else{
        return [];
    }
}
//保存信息
function saveData(data){
    localStorage.todo=JSON.stringify(data);
}
//重回页面
function reWrite(){
    $(".xuan ul").empty();
    var data=getData();
    var str1="",str2="";
    $.each(data,function(index,ele){
        if(ele.isDnone===false){
            str1+=`<li id="${index}">
                    <input type="checkbox">
                    <p>${ele.text}</p>
                    <time>${time(ele.time)}</time>
                    `;
            if(ele.isStar){
                str1+="<i class='active iconfont'>&#xe6b8;</i></li>"
            }else{
                str1+="<i class='iconfont'>&#xe6b8;</i></li>"
            }
        }else{
            str2+=`<li id="${index}">
                    <input type="checkbox">
                    <p>${ele.text}</p>
                    <time>${time(ele.time)}</time>
                    `;
            if(ele.isStar){
                str2+="<i class='active iconfont'>&#xe6b8;</i></li>"
            }else{
                str2+="<i class='iconfont'>&#xe6b8;</i></li>"
            }
        }
    });
    $(".wait ul").html(str1);
    $(".done ul").html(str2);
}
reWrite();
//处理时间格式的函数
function time(ms){
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDay());
    var hour=addZero(date.getHours());
    var min=addZero(date.getMinutes());
    var sec=addZero(date.getSeconds());
    return year+"/"+month+"/"+day+"/"+hour+"/"+min+"/"+sec;
}
function addZero(num){
    return num<10?"0"+num:num;
}
//选项效果
$("#shijian li").click(function(){
    var index=$(this).index();
    $(".container>div").css("display","none")
    $(".xuan").eq(index).slideDown();
})
//移动到已完成的事项
$(".wait>.del").click(function(){
    var data=getData();
    $(".wait ul li").each(function(){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDnone=true;

        }
    })
    saveData(data);
    reWrite();
})
//跳转到添加
//删除已完成
$(".done>.del").click(function(){
    var data=getData();
    $(".done ul li").each(function(){
        if($(this).find("input").prop("checked")){
            var index=$(this).attr("id");
            data[index].isDelete=true;
        }
    });
    data=data.filter(function(ele){
        return !ele.isDelete;
    })
    saveData(data);
    reWrite();
})
//重要事项
$(".wait ul").on("click","i",function(){
    var data=getData();
    var index=$(this).parent().attr("id");
    data[index].isStar=!data[index].isStar;
    saveData(data);
    reWrite();
})
//查看
$(".wait ul").on("click","p",function(){
    $(".wait").slideUp();
    $(".xianshi").slideDown();
    $(".xianshi p").html($(this).html());
    var index=$(this).parent().attr("id");
    var data=getData();
    $(".xianshi time").html(time(data[index].time));
})
$(".xianshi input").click(function(){
    $(".wait").slideDown();
    $(".xianshi").slideUp();
})
$(".xianshi span").click(function(){
    $(".wait").slideDown();
    $(".xianshi").slideUp();
})
//其他地方添加事项
$(".jia").click(function(){
    $(this).parent().slideUp();
    $(".add").slideDown();
});