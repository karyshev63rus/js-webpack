import Person from './person.js';
import './styles/style.css';
import './styles/style.less';
import './styles/style.scss';
import logo from './images/webpack_logo.png';

const person = new Person('Mick', 46, 'Russia');
console.log(person);

document.querySelector('.img img').src = logo;
