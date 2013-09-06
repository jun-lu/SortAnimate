/**
	快速排序
*/
function quickSort(array){
	if(array.length == 0){
		return array;
	}
	var i = 0;
	var j = array.length - 1;
	var Sort = function(i, j){
	
		// 结束条件
		if(i == j ){ 
			return; 
		};
		
		var key = array[i];
		var stepi = i; // 记录开始位置
		var stepj = j; // 记录结束位置
	
		while(j > i){
			// j <<-------------- 向前查找
			if(array[j] >= key){
				j--;
			}else{
				
				array[i] = array[j]
				//i++ ------------>>向后查找
				while(j > ++i){
					if(array[i] > key){
						array[j] = array[i];
						break;
					}
					
				}
			}

		}
		
		// 如果第一个取出的 key 是最小的数
		if(stepi == i){
			Sort(++i, stepj);
			return ;
		}
		
		// 最后一个空位留给 key
		array[i] = key;
		
		
		// 递归
		Sort(stepi, i);
		Sort(j, stepj);
	}
	
	Sort(i, j);
	
	return array;
}


function quickSortAnimate(array, srotanimte){
	if(array.length == 0){
		return array;
	}
	var i = 0;
	var j = array.length - 1;
	var Sort = function(i, j){
		
		
		// 结束条件
		if(i == j ){ 
			return; 
		};
		
		srotanimte.activeFragment(i, j)
		
		var key = array[i];
		var stepi = i; // 记录开始位置
		var stepj = j; // 记录结束位置
		//srotanimte.activeOne(i);
		while(j > i){
			srotanimte.activeOne(j);

			// j <<-------------- 向前查找
			if(array[j] >= key){
				srotanimte.blurOne(j);
				j--;
			}else{
				srotanimte.exchange(i, j);
				array[i] = array[j]
				//i++ ------------>>向后查找
				while(j > ++i){
					srotanimte.activeOne(i);
					if(array[i] > key){
						srotanimte.exchange(i, j);
						srotanimte.blurOne(i);
						array[j] = array[i];
						break;
					}
					srotanimte.blurOne(i);
				}
			}
			srotanimte.blurOne(j);
		}
		
		// 如果第一个取出的 key 是最小的数
		srotanimte.blurFragment()
		
		if(stepi == i){
			Sort(++i, stepj);
			return ;
		}
		
		// 最后一个空位留给 key
		array[i] = key;
		
		
		// 递归
		Sort(stepi, i);
		Sort(j, stepj);
	}
	
	Sort(i, j);
	
	return array;
}
		