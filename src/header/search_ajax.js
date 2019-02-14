

function search(input){
	const xhr=new XMLHttpRequest()

	xhr.open('GET', 'https://www.zhihu.com/api/v4/search/suggest?q='+input, true)
	xhr.send(null)


	xhr.onload=()=>{
		console.log(xhr.responseText)
	}
}

export default search

