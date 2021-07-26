const canvas = document.getElementById('snowman');
const ctx = canvas.getContext('2d');
const circle = (x, y, radius, color, isFilled = true) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    if (isFilled) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

const smile = (x, y, radius, color) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI);
    ctx.strokeStyle = color;
    ctx.stroke();
}

circle(200, 70, 60, '#c8fcff');
circle(200, 200, 80, '#c8fcff');
circle(300, 200, 30, '#c8fcff');
circle(100, 200, 30, '#c8fcff');
circle(200, 350, 100, '#c8fcff');
circle(200, 160, 10, '#795548');
circle(200, 200, 10, '#795548');
circle(200, 240, 10, '#795548');
circle(180, 60, 10, '#000');
circle(220, 60, 10, '#000');
circle(200, 80, 10, '#ff8f00');
smile(200, 80, 35, '#000');


const scene = new THREE.Scene();
const fov = 70;
const aspectRatio = 1000 / 400;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(1000, 400);
renderer.setClearColor('#6e6e6e');
document.body.append(renderer.domElement);

const geometry = new THREE.ConeGeometry(3, 5, 32, );
const material = new THREE.MeshPhongMaterial({ color: 'aqua' });
const cone = new THREE.Mesh(geometry, material);

scene.add(cone);

const light = new THREE.DirectionalLight('#fff', 0.5);
light.position.set(-1, 2, 4);
scene.add(light);

function rotate() {
    requestAnimationFrame(rotate);
    renderer.render(scene, camera);

    cone.rotation.z += 0.01;
    cone.rotation.x += 0.01;
}
rotate();