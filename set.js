function Set()
{
	this.dataStore=[];
	/*
	this.add=add;
	this.remove=remove;
	this.size=size;
	this.union=union; //并集操作
	this.intersect=intersect; // 交集操作
	this.subset=subset; // 子集
	this.difference=difference; // 补集操作
	this.show=show;
	*/
}
Set.prototype.add=function(data)
{
	if(this.dataStore.indexOf(data)<0)
	{
		this.dataStore.push(data);
		return true;
	}
	else
	{
		return false;
	}
}
Set.prototype.remove=function(data)
{
	var pos=this.dataStore.indexOf(data);
	if(pos>-1)
	{
		this.dataStore.splice(pos,1);
		return true;
	}
	else
	{
		return false;
	}
}
Set.prototype.size=function()
{
	return this.dataStore.length;
}
Set.prototype.union=function(set)
{
	var temSet=new Set();
	for(var i=0; i<this.dataStore.length; ++i)
	{
		temSet.add(this.dataStore[i]);
	}
	for(var i=0; i<set.dataStore.length; ++i)
	{
		if(temSet.dataStore.indexOf(set.dataStore[i])==-1)
		{
			temSet.dataStore.push(set.dataStore[i]);
		}
	}
	return temSet;
}
Set.prototype.intersect=function(set)
{
	var temSet=new Set();
	for(var i=0; i<set.dataStore.length;++i)
	{
		if(this.dataStore.indexOf(set.dataStore[i])>-1)
		{
			temSet.add(set.dataStore[i]);
		}
	}
	return temSet;
}
Set.prototype.subset=function()
{}
Set.prototype.difference=function()
{}
Set.prototype.show=function()
{
	return this.dataStore;
}