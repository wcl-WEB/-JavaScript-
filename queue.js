function Queue()
{
	this.dataStore=[];
}
Queue.prototype.inQueue=function(element)
{
	// 在队尾加入新元素
	this.dataStore.push(element);
}
Queue.prototype.outQueue=function()
{
	//队首元素出列，即删除队首元素
	return this.dataStore.shift()
}
Queue.prototype.empty=function()
{
	if(this.dataStore.length==0)
	{return true;}
	else
	{return false;}
}
Queue.prototype.front=function()
{
	return this.dataStore[0];
}
Queue.prototype.back=function()
{
	return this.dataStore[this.dataStore.length-1];
}
Queue.prototype.show=function()
{
	var str="";
	for(var i=0; i<this.dataStore.length;++i)
	{
		str=this.dataStore[i]+"\n";
	}
	return str;
}

/*测试程序*/
/*
var dancerQueue=new Queue();
dancerQueue.inQueue("Tom");
alert(dancerQueue.show());
alert(dancerQueue.empty());
dancerQueue.outQueue();
alert(dancerQueue.empty());
*/