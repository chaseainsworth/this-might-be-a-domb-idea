let paragraph = document.querySelector('p');

paragraph.style.color = 'lightblue';

let heading = document.querySelector('h1');

heading.style.fontSize = '5em';

paragraph.textContent = "Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.";

let item13 = document.querySelector('#item-13');

item13.style.opacity = '0.5';

let item3 = document.querySelector('#item-3');

item3.textContent = 'I say, "Hi!"';

let pic = document.querySelector('img');

pic.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

pic.height = '300';

let picTwo = document.createElement('img');

picTwo.src = 'https://cdn0.kontraband.com/uploads/image/2019/2/27/preview_5288ef9c.jpeg';

let div = document.querySelector('div');

div.appendChild(picTwo);

picTwo.style.height = '300px';

let newLi = document.createElement('li');

newLi.textContent = "Won't get fooled again.";

let ul = document.querySelector('ul');

ul.appendChild(newLi);
