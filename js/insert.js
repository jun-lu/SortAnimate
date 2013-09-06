/**
	插入排序
*/
function insertSort(array){

	var i = 1, j, step, key,
		len = array.length;
	
	for(; i < len; i++){
		step = j = i;
		key = array[j];
		while(--j > -1){
			if(array[j] > key){
				array[j+1] = array[j];
			}else{
				break;
			}
		}
		array[j+1] = key;
	}
	
	return array;
}

function insertSortAnimate(array, srotanimte){

	var i = 1, j, step, key,
		len = array.length;
	
	for(; i < len; i++){
		//srotanimte.activeOne(i);
		step = j = i;
		key = array[j];
		srotanimte.activeFragment(0, i);
		while(--j > -1){
			srotanimte.activeOne(j);
			if(array[j] > key){
				srotanimte.exchange(j+1, j);
				array[j+1] = array[j];
				srotanimte.blurOne(j);
			}else{
				srotanimte.blurOne(j);
				break;
			}
			srotanimte.blurOne(j);
		}
		//srotanimte.blurOne(i);
		array[j+1] = key;
		srotanimte.blurFragment(0, i);
	}
	
	return array;
}