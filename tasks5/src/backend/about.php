<?php $main['textAbout']=Array([
'id'=>'1',
'name'=>'Яковлев Илья',
'text'=> 'Меня зовут Илья, мне очень трудно дался текст, но я старался',
'img'=>'assets/images/sun.jpg',
'alt'=>'сын'
],['id'=>'2',
'name'=>'Илья Илья',
'text'=> 'Меня зовут Илья,',
'img'=>'assets/images/sun.jpg',
'alt'=>'сын 123']);

echo json_encode($main);
/*	echo '{
  "textAbout": 
  [
    {
      "id": "1",
      "name": "subaru",
      "text": "120000",
	  "img": "assets/images/sun.jpg",
	  "alt": "сын 123"
    },
    {
      "id": "2",
      "name": "s22222",
      "text": "123213123 sadasd asdasd0000",
	  "img": "assets/images/sun.jpg",
	  "alt": "сын 123"
    }
  ]
}';*/
?>