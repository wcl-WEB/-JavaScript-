var sentence="we are good friend";
var words=sentence.split(" ");
for(var i=0; i<words.length; ++i;)
{
	document.write("word "+i+": "+words[i]);
}

var num=[];
for(var i=0; i<10; ++i)
{num[i]=i;}
var arr=num;
arr[0]=40;
alert(num[0]); //弹出值为40，改变arr的同时也改变了num

var arr=[];
for(var i=0; i<num.length; ++i)
{arr[i]=num[i]};
arr[0]=40;
alert(num[0]); //弹出值为0；

//查找元素
indexOf(n)函数用来查找参数n是否在目标数组中存在

//数组的字符串表达
// join() 
// toString()
var namestr=names.join();
alert(namestr);
var namestring=names.toString();
alert(namestring);
