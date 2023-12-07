//body element
const list = document.querySelector('body');
list.style.cssText = 'text-align: center;';


// the test container
const content = document.createElement('div');
content.classList.add('setka');
content.textContent = 'sosososososo';

//container this setka
const container = document.createElement('div');
container.classList.add('container');
container.style.cssText = 'display: flex; flex-wrap: wrap; border: 1px solid black; width: 512px; height: 512px; justify-content: center; text-alig: center;'

//items for container

const content1 = document.createElement('div');
content1.classList.add('item');
content1.textContent = 'Alan';
content1.style.cssText = 'border: 1px solid black; width: 100px; height: 100px;'


function generateItems(n) {

    const container = document.querySelector('.container');

    for (let i = 1; i <= n; i++) {
        let newItem = document.createElement('div');
        newItem.className = 'item';
        newItem.style.cssText = 'border: 1px solid black; width: 32px; height: 32px; box-sizing: border-box; ';

        function generatebuttons(n) {

    
            for (let i = 1; i <= n; i++) {
                let button = document.createElement('button');
                button.className = 'but';

                button.style.cssText = 'width: 100%;height: 100%;text-align: center;color: #ff9000 !important; transition: color 9999999s; .button:active {color: green;transition: color 0s }';
                
                newItem.appendChild(button);

                
                button.addEventListener("click", function() {
                    this.classList.add("active");
                });
                
            }
            
        }

        container.appendChild(newItem);
        newItem.appendChild.innerHTML = generatebuttons(1);
        //newItem.textContent = i;
        
    }
}



list.appendChild(container);
container.appendChild.innerHTML = generateItems(256);
//document.querySelector('.item').appendChild(button);

//generateItems(16);


alert('hello world');