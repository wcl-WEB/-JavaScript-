function Dictionary()
{
	this.dataStore=new Array();
}
Dictionary.prototype.add=function(key,value)
{
	this.dataStore[key]=value;
}
Dictionary.prototype.find=function(key)
{
	return this.dataStore[key];
}
Dictionary.prototype.remove=function(key)
{
	delete this.dataStore[key];
}
Dictionary.prototype.show=function()
{
	var str="";
	var keys= Object.keys(this.dataStore).sort();
	for(var i=0; i<keys.length; ++i)
	{
		key=keys[i];
		str+=key+":"+this.dataStore[key]+"\n";
	}
	return str;
}
Dictionary.prototype.count=function()
{
	var num=0;
	for(var key in this.dataStore)
	{
		++num;
	}
	return num;
}
Dictionary.prototype.clear=function()
{
	for (var key in this.dataStore )
	{
		delete this.dataStore[key];
	}
}