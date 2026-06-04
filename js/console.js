
function upDate(previewPic) {
    // 1. Kiểm tra sự kiện đã kích hoạt chưa
    console.log("mouseover đã kích hoạt!");

    // 2. In ra thông tin alt và source của ảnh
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // 3. Thay đổi văn bản của phần tử có id là 'image'
    document.getElementById("image").innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền của phần tử có id là 'image'
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").style.color = "white"; // Đảm bảo văn bản hiển thị rõ ràng trên hình nền
}

// Hàm được kích hoạt khi di chuột ra khỏi ảnh
function unDo() {
    // 5. Cập nhật lại hình nền về ban đầu
    document.getElementById("image").style.backgroundImage = "url('')";

    // 6. Cập nhật lại văn bản gốc
    document.getElementById("image").innerHTML = "di chuyen den hinh tiep theo!";
    
    document.getElementById("image").style.color = "black"; // Đặt lại màu văn bản về mặc định
    console.log("đã mouseout!");
}

function pickImage() {
    options = ["banhTrangDL1.jpg", "banhTrangDL2.jpg", "caoLau1.jpg", "caoLau2.jpg", "caoLau3.jpg", 
        "caoLau4.jpg", "caoLau5.jpg","caoLau6.jpg",  "myGa.jpg", "myTomThit.jpg", "myCaloc.jpg"];
    randomImg = "img/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("#feature-image");
    img.src = randomImg;
    img.alt = "Random image";
}

function setImages(){
    options = ["banhTrangDL1.jpg", "banhTrangDL2.jpg", "caoLau1.jpg", "caoLau2.jpg", "caoLau3.jpg", 
        "caoLau4.jpg", "caoLau5.jpg","caoLau6.jpg",  "myGa.jpg", "myTomThit.jpg", "myCaloc.jpg"];

    currentImages = document.querySelectorAll(".rand img")
    for (var i = 0; i < currentImages.length; i++) { 
        console.log("Image " + i); 
        randomImg = "img/" + options[Math.floor(Math.random() * options.length)];
        currentImages[i].src = randomImg;
        currentImages[i].alt = "image " + i;
        currentImages[i].setAttribute("tabindex", "0");
           
    }
}