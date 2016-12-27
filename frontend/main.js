'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';
import React from 'react';
import ReactDOM from 'react-dom';

var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
	}
];

class Comments extends React.Component {
	render() {
		return(
			<div>Текст комментария</div>
		);
	}
}
class News extends React.Component {
	render() {
		return(
			<ul className="news">
				{this.props.data.map((i, index)=> {
					return(
						<li key={index}>
							<p className="news__author">{i.author}</p>
							<p className="news__text">{i.text}</p>
						</li>
					);
				})}
			</ul>
		);
	}
}
class App extends React.Component {
	render(){
		return (
			<div className="app">
				Всем привет, я компонент App! Я умею отображать новости.
				<News data={my_news} />
				<Comments />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
