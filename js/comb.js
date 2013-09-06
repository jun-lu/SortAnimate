/**
	梳排序 金锐提供
*/
function combSort(list){
	var len = list.length;
	var gap = len;
	var swapped = true;
	
	while(gap > 1 || swapped){
		if(gap > 1){
			gap = Math.floor(gap / 1.3); //获取排序间隔
		}
		
		var i = 0;
		swapped = false;
		while(i + gap < len){
			if(list[i] - list[i + gap] > 0){ //如果为正数,交换位置
				var tmp = list[i];
				list[i] = list[i + gap];
				list[i + gap] = tmp;
				swapped = true;
			}
			i++;
		}				
	}
	
	return list;
}


function combSortAnimate(list, srotanimte){
	var len = list.length;
	var gap = len;
	var swapped = true;
	
	while(gap > 1 || swapped){
		if(gap > 1){
			gap = Math.floor(gap / 1.3); //获取排序间隔
		}
		
		var i = 0;
		swapped = false;
		while(i + gap < len){
			srotanimte.activeOne(i);
			srotanimte.activeOne(i + gap);
			if(list[i] - list[i + gap] > 0){ //如果为正数,交换位置
				var tmp = list[i];
				list[i] = list[i + gap];
				list[i + gap] = tmp;
				swapped = true;
				srotanimte.exchange(i, i + gap);
			}
			srotanimte.blurOne(i);
			srotanimte.blurOne(i + gap);
			i++;
		}				
	}
	
	return list;
}
		