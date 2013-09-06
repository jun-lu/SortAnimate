/**
	奇偶 金锐提供
*/
function oddEvenSort(list){
	var len = list.length;
	var sorted = true;
	
	while(sorted){
		sorted = false;
		
		for(var i = 1; i < len - 1; i += 2)
		{
			if(list[i] > list[i + 1])
			{
				var t = list[i];
				list[i] = list[i + 1];
				list[i + 1] = t;
				sorted = true;
			}
		}	
		
		for(var i = 0; i < len; i += 2){
			
			if(list[i] > list[i + 1]){
				var tmp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = tmp;
				sorted = true;
			}
		}
	}
	
	return list;
}


function oddEvenSortAnimate(list, srotanimte){
	var len = list.length;
	var sorted = true;
	
	while(sorted){
		sorted = false;
		
		for(var i = 1; i < len - 1; i += 2)
		{
			srotanimte.activeOne(i);
			srotanimte.activeOne(i+1);
			if(list[i] > list[i + 1])
			{
				var t = list[i];
				list[i] = list[i + 1];
				list[i + 1] = t;
				sorted = true;
				srotanimte.exchange(i, i+1);
			}
			srotanimte.blurOne(i);
			srotanimte.blurOne(i+1);
		}	
		
		for(var i = 0; i < len; i += 2){
		
			srotanimte.activeOne(i);
			srotanimte.activeOne(i+1);
			
			if(list[i] > list[i + 1]){
				var tmp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = tmp;
				sorted = true;
				srotanimte.exchange(i, i+1);
			}
			srotanimte.blurOne(i);
			srotanimte.blurOne(i+1);
		}
	}
	
	return list;
}
