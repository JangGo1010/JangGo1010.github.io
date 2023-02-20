const canvas = document.getElementById("canvas");
//캔버스 요소를 id가 "canvas"인 요소로부터 가져옵니다.
const context = canvas.getContext("2d");
//캔버스의 컨텍스트를 가져옵니다.
const resetButton = document.getElementById("reset");
//초기화 버튼 요소를 id가 "reset"인 요소로부터 가져옵니다.
resetButton.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("distance").textContent = "";
    currX = 0;
    currY = 0;
    prevX = 0;
    prevY = 0;
    distance = 0;
    canvas.removeEventListener('click', onCanvasClick);
});
//초기화 버튼에 클릭 이벤트 핸들러를 추가합니다. 클릭 시, 캔버스를 초기화하고 거리 텍스트를 지우고, 이전 클릭 이벤트 핸들러를 제거합니다.

let prevX, prevY, currX, currY;
//현재 좌표와 이전 좌표를 저장하기 위한 변수를 정의합니다.
let distance = 0;
//누적 거리를 저장하기 위한 변수를 정의합니다.

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
//캔버스의 크기를 윈도우의 크기와 같게 설정하는 함수를 정의합니다.

window.onload = () => {
    //window.onload 웹 페이지가 로드될 때 실행되는 함수를 정의합니다. 캔버스를 초기화하고 클릭 이벤트 핸들러를 추가합니다.

    initCanvas();

    canvas.addEventListener('click', handleClick);

    function handleClick(e) {
        if (!currX && !prevX && !currY && !prevY) {
            currX = e.clientX;
            currY = e.clientY;
            prevX = currX;
            prevY = currY;
        } else {
            prevX = currX;
            prevY = currY;
            currX = e.clientX;
            currY = e.clientY;
            const currentDistance = getDistanceInCm();
            document.getElementById("distance").textContent = `${currentDistance.toFixed(2)} cm / ${getDistanceInInch().toFixed(2)} in`;
            draw();
        }
    }
    //사용자가 클릭한 좌표를 가져와서 현재 좌표와 이전 좌표를 갱신하고 거리를 계산하여 거리 텍스트를 업데이트하고 그림을 그리는 함수를 정의합니다.

    function draw() {
        context.beginPath();
        context.moveTo(prevX, prevY);
        context.lineTo(currX, currY);
        context.stroke();

        context.beginPath();
        context.arc(currX, currY, 5, 0, 2 * Math.PI);

        context.fillStyle = "white";
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
    }//이전 좌표와 현재 좌표를 연결하는 선을 그리고 현재 좌표에 원을 그리는 함수를 정의합니다.

    function getDistanceInCm() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const cmDistance = pixelDistance / 96 * 2.54;
        return cmDistance;
    }//이전 좌표와 현재 좌표 사이의 거리를 센티미터 단위로 계산하는 함수를 정의합니다.

    function getDistanceInMm() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const mmDistance = pixelDistance / 96 * 25.4;
        return mmDistance;
    }

    function getDistanceInM() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const mDistance = pixelDistance / 96 * 0.0254;
        return mDistance;
    }

    function getDistanceInNanoMeter() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const nmDistance = pixelDistance / 96 * 2.54 * 10000000;
        return nmDistance;
    }

    function getDistanceInInch() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const inchDistance = pixelDistance / 96;
        return inchDistance;
    }

    function getDistanceInMile() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const mileDistance = pixelDistance / 96 / 63360;
        return mileDistance;
    }

    function getDistanceInMicrometer() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const umDistance = pixelDistance / 96 * 2.54 * 10000;
        return umDistance;
    }

    function getDistanceInFeet() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const feetDistance = pixelDistance / 96 / 12;
        return feetDistance;
    }

    function getDistanceInKilometer() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const kmDistance = pixelDistance / 96 * 2.54 / 100000;
        return kmDistance;
    }

    function getDistanceInYard() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const yardDistance = pixelDistance / 96 / 36;
        return yardDistance;
    }

    function getDistanceInLeague() {
        const pixelDistance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);
        const leagueDistance = pixelDistance / 96 / 190080;
        return leagueDistance;
    }




    function handleClick(e) {
        if (!currX && !prevX && !currY && !prevY) {
            currX = e.clientX;
            currY = e.clientY;
            prevX = currX;
            prevY = currY;
        } else {
            prevX = currX;
            prevY = currY;
            currX = e.clientX;
            currY = e.clientY;
            distance += getDistanceInCm();
        }
        draw();
        const distanceElem = document.getElementById("distance");
        distanceElem.innerHTML = `Distance <br>
                                    ${getDistanceInNanoMeter().toFixed(2)} nm<br>
                                    ${getDistanceInMicrometer().toFixed(2)} μm<br>
                                    ${getDistanceInMm().toFixed(2)} <span style="color:red;">mm</span><br>
                                    ${getDistanceInCm().toFixed(2)} <span style="color:red;">cm</span><br>
                                    ${getDistanceInInch().toFixed(2)} inch<br>
                                    ${getDistanceInFeet().toFixed(2)} ft<br>
                                    ${getDistanceInYard().toFixed(2)} yd<br>
                                    ${getDistanceInM().toFixed(2)} m<br>
                                    ${getDistanceInKilometer().toFixed(6)} km<br>
                                    ${getDistanceInMile().toFixed(6)} mile<br>
                                    ${getDistanceInLeague().toFixed(6)} league<br>`;
    }




    function init() {
        initCanvas();
        resetButton.addEventListener("click", handleReset);
        document.addEventListener("click", handleClick);
    }

    init();
}