import Layer from './components/layer/layer.js';
import './css/common.css';

const App = function(){
    console.log(Layer);
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'json',
        arr: ['apple','meizu','xiaomi']
    });
}

new App();