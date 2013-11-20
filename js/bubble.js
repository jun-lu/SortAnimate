/**
	冒泡排序
*/
function bubbleSort(array, srotanimte){
	var len = array.length,i,j, d;
	for(i=len;i--;){
		for(j=0; j<i; j++){
			var z = j+1;
			if(array[j] > array[z]){
				d = array[j];
				array[j] = array[z];
				array[z] = d;
			}
		}
	}
	return array;
};

function bubbleSortAnimate(array, srotanimte){
	var len = array.length,i,j, d;
	srotanimte.activeFragment(0,len);
	for(i=len;i--;){
		for(j=0; j<i; j++){
			var z = j+1;
			srotanimte.activeOne(j);
			if(array[j] > array[z]){
				d = array[j];
				array[j] = array[z];
				array[z] = d;
				srotanimte.exchange(j, z);
			}
			srotanimte.blurOne(j);
		}
		srotanimte.blurFragment(j,len);
	}
	return array;
};