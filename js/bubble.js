/**
	冒泡排序
*/
function bubbleSort(array){
	var i = 0, len = array.length,
		j, d;
	for(; i<len; i++){
		for(j=0; j<len; j++){
			if(array[i] < array[j]){
				d = array[j];
				array[j] = array[i];
				array[i] = d;
			
			}
		}
	}
	return array;
};

function bubbleSortAnimate(array, srotanimte){
	var i = 0, len = array.length,
		j, d;
	for(; i<len; i++){
		srotanimte.activeOne(i);
		for(j=0; j<len; j++){
			srotanimte.activeOne(j);
			if(array[i] < array[j]){
				d = array[j];
				array[j] = array[i];
				array[i] = d;
				srotanimte.exchange(i, j);
			}
			srotanimte.blurOne(j);
		}
		srotanimte.blurOne(i);
	}
	return array;
};