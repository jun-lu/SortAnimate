/**
	鸡尾酒
*/
function cocktailSort(array){
	
	var len = array.length;
	var item = array[0];
	var i = 0;
	var j = len;
	var k=0;
	var index = 0;
	var ischange = false;
	
	while(j - i > 1){
		//寻找最大
		ischange = false;
		item = array[i];
		index = i;
		for(k=i; k<j; k++){
			if(item > array[k]){
				array[index] = array[k];
				array[k] = item;
				ischange = true;
			}else{
				item = array[k];

			}
			index = k;
		}
		j--;
		
		//寻找最小
		item = array[j];
		index = j;
		for(k=j; k>i-1; k--){
			if(item < array[k]){
				array[index] = array[k];
				array[k] = item;
				ischange = true;
			}else{
				item = array[k];

			}
			index = k;
		}
		
		i++;
		//没有任何交换跳出
		if( ischange == false ){
			break;
		}
	}
	
	return array;
}

function cocktailSortAnimate(array, srotanimte){
	
	var len = array.length;
	var item = array[0];
	var i = 0;
	var j = len;
	var k=0;
	var index = 0;
	var ischange = false;
	
	while(j - i > 1){
		//寻找最大
		ischange = false;
		item = array[i];
		index = i;
		srotanimte.activeFragment(i, j);
		for(k=i; k<j; k++){
			srotanimte.activeOne(k);
			if(item > array[k]){
				array[index] = array[k];
				array[k] = item;
				ischange = true;
				srotanimte.exchange(index, k);
			}else{
				item = array[k];

			}
			index = k;
			srotanimte.blurOne(k);
		}
		srotanimte.blurFragment(i, j);
		j--;
		
		//寻找最小
		item = array[j];
		index = j;
		srotanimte.activeFragment(i-1, j);
		for(k=j; k>i-1; k--){
			srotanimte.activeOne(k);
			if(item < array[k]){
				array[index] = array[k];
				array[k] = item;
				ischange = true;
				srotanimte.exchange(index, k);
			}else{
				item = array[k];

			}
			index = k;
			srotanimte.blurOne(k);
		}
		srotanimte.blurFragment(i-1, j);
		i++;
		//没有任何交换跳出
		if( ischange == false ){
			break;
		}
	}
	
	return array;
}
		