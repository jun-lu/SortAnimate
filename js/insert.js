/**
	插入排序
*/
function insertSort(array){

	var i = 1, j, step, key,
		len = array.length;
	//二分法
	var fun2f = function(a, b) {
		return Math.floor((a + b) / 2)
	}
	for(; i < len; i++){
		step = j = i;
		key = array[j];
		var b=0,e=i,
			z = fun2f(b, e)
		// while(--j > -1){
		// 	if(array[j] > key){
		// 		array[j+1] = array[j];
		// 	}else{
		// 		break;
		// 	}
		// }
		while (z != b) {
			if (key < array[z]) {
				e = z;
			} else {
				b = z;
			}
			z = fun2f(b, e);
		}
		z += key < array[z] ? 0 : 1;
		array.splice(z, 0, array.splice(i, 1)[0]);
	}
	
	return array;
}

function insertSortAnimate(array,srotanimte){

	var i = 1, j, step, key,
		len = array.length;
	var fun2f = function(a, b) {
		return Math.floor((a + b) / 2)
	}
	for(; i < len; i++){
		srotanimte.activeOne(i);
		step = j = i;
		key = array[j];
		var b=0,e=i,
			z = fun2f(b, e);
		srotanimte.activeOne(z);
		while (z != b) {
			srotanimte.blurFragment(b, e);
			srotanimte.blurOne(z);
			if (key < array[z]) {
				e = z;
			} else {
				b = z;
			}
			srotanimte.activeFragment(b, e);
			z = fun2f(b, e);
			srotanimte.activeOne(z);
		}
		srotanimte.blurOne(z);
		z += key < array[z] ? 0 : 1;
		array.splice(z, 0, array.splice(i, 1)[0]);
		srotanimte.onsync(array);
		srotanimte.blurOne(i);
		srotanimte.blurFragment(0, i);
	}
	return array;
}

// function insertSortAnimate(array, srotanimte){

// 	var i = 1, j, step, key,
// 		len = array.length;
	
// 	for(; i < len; i++){
// 		//srotanimte.activeOne(i);
// 		step = j = i;
// 		key = array[j];
// 		srotanimte.activeFragment(0, i);
// 		while(--j > -1){
// 			srotanimte.activeOne(j);
// 			if(array[j] > key){
// 				srotanimte.exchange(j+1, j);
// 				array[j+1] = array[j];
// 				srotanimte.blurOne(j);
// 			}else{
// 				srotanimte.blurOne(j);
// 				break;
// 			}
// 			srotanimte.blurOne(j);
// 		}
// 		//srotanimte.blurOne(i);
// 		array[j+1] = key;
// 		srotanimte.blurFragment(0, i);
// 	}
	
// 	return array;
// }