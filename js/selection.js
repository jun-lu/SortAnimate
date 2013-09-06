/**
	选择排序
*/
function selectionSort(array){
	var len = array.length;
	var index = 0;
	var k;
	var item;
	var c;
	for(var i=0; i<len; i++){
		
		item = array[i];
		index = i;
		//寻找最小的数位置
		for(j=i+1; j<len;j++){
			if(array[j] < item){
				index = j;
				item = array[j];
			}
		}
		if(index != i){
			c = array[i];
			array[i] = array[index];
			array[index] = c;
		}
	}
	return array;
}

function selectionSortAnimate(array, srotanimte){
	var len = array.length;
	var index = 0;
	var k;
	var item;
	var c;
	for(var i=0; i<len; i++){
		
		item = array[i];
		index = i;
		
		srotanimte.activeOne(i);
		//寻找最小的数位置
		for(j=i+1; j<len;j++){
			srotanimte.activeOne(j);
			if(array[j] < item){
				srotanimte.blurOne(index);
				srotanimte.activeOne(j);
				index = j;
				item = array[j];
			}
			srotanimte.blurOne(j);
		}
		srotanimte.blurOne(i);
		if(index != i){
			srotanimte.blurOne(index);
			srotanimte.exchange(i, index);
			c = array[i];
			array[i] = array[index];
			array[index] = c;
		}
	}
	
	return array;
	
}
		