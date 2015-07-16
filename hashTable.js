function HashTable()
{
	this.table=new Array(137);
	//this.simpleHash
	//this.showDistro
	//this.put
}
HashTable.prototype.simpleHash=function(data)
{
	var total=0;
	for(var i=0; i<data.length; ++i)
	{
		total+=data.charCodeAt(i);
	}
	//charCodeAt()	返回指定位置字符在Unicode字符集中的编码值
	//charAt() 返回指定位置字符
	return total%this.table.length;
}
HashTable.prototype.betterHash=function(data)
{
	var total=0;
	var H=37;
	for(var i=0; i<data.length; ++i)
	{
		total=total*H+data.charCodeAt(i);
	}
	total=total%this.table.length;
	return parseInt(total);
}
HashTable.prototype.put=function(data)
{
	this.table[this.betterHash(data)]=data;
}
HashTable.prototype.showDistro=function()
{
	var num="";
	for(var i=0; i<this.table.length; ++i)
	{
		if(typeof(this.table[i])!="undefined")
		{
			num+=i+":"+this.table[i]+"\n";
		}
	}
	return num;
}
