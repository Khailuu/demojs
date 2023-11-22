// click đổi bài
let getEleAll = (ele) => {
  return document.querySelectorAll(ele);
};

let getEle = (ele) => {
  return document.querySelector(ele);
};

var baitap = getEleAll("#baitap");
var tab__baitaps = getEleAll(".tab__baitap");

baitap.forEach((baitap, index) => {
  baitap.onclick = function () {
  var tab__baitap =  tab__baitaps[index];
    getEle('.baitap.active').classList.remove('active');
    getEle('.tab__baitap.active__tab').classList.remove('active__tab');
    
    this.classList.add("active");
    tab__baitap.classList.add("active__tab");
  };
});

//  Bài 1
function tinhLuong() {
  var luongMotNgay = parseFloat(document.getElementById("luongMotNgay").value);
  var soNgayLam = parseFloat(document.getElementById("soNgayLam").value);

  // Kiểm tra nếu giá trị là số hợp lệ
  if (
    !isNaN(luongMotNgay) &&
    !isNaN(soNgayLam) &&
    luongMotNgay >= 0 &&
    soNgayLam >= 0
  ) {
    var tongLuong = luongMotNgay * soNgayLam;

    document.getElementById("output").textContent =
      "Tổng tiền lương: " + tongLuong.toFixed(2);
  } else {
    document.getElementById("output").textContent =
      "Nhập không hợp lệ. Vui lòng kiểm tra lại.";
  }
}


//bài 2
function tinhGiaTriTrungBinh() {
  var soThuNhat = parseFloat(getEle('#so1').value);
  var soThuHai = parseFloat(getEle('#so2').value);
  var soThuBa = parseFloat(getEle('#so3').value);
  var soThuTu = parseFloat(getEle('#so4').value);
  var soThuNam = parseFloat(getEle('#so5').value);

  if(!isNaN(soThuNhat) && !isNaN(soThuHai) && !isNaN(soThuBa) && !isNaN(soThuTu) && !isNaN(soThuNam)) {
    
    var giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

    getEle("#output2").textContent = "Gia tri trung binh: " + giaTriTrungBinh.toFixed(2);
  }
  else {
    getEle("#output2").textContent = "Nhập không hợp lệ. Vui lòng kiểm tra lại.";
  }
}


// bài 3 
function quyDoiTien() {
  var soUsd = parseFloat(getEle('#usd').value);

  if (!isNaN(soUsd) && soUsd >= 0){
    var tienDaQuyDoi = soUsd * 23500;

    getEle('#output3').textContent = "Số tiền quy đổi được là: " + tienDaQuyDoi.toFixed(2); 
  }
  else {
    getEle("#output3").textContent = "Nhập không hợp lệ. Vui lòng kiểm tra lại.";
  }
}


// bài 4 
function tinhDienTich() {
  var chieuDai = parseFloat(getEle('#chieuDai').value);
  var chieuRong = parseFloat(getEle('#chieuRong').value);

  if(!isNaN(chieuDai) && !isNaN(chieuRong) && chieuDai >=0 && chieuRong >=0 ) {
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    getEle("#outputDT").textContent = "Diện tích là: " + dienTich.toFixed(2);
    getEle("#outputCV").textContent = "Chu Vi là: " + chuVi.toFixed(2);
  }
  else {
    getEle("#outputDT").textContent = "Nhập không hợp lệ.";
    getEle("#outputCV").textContent = " Vui lòng kiểm tra lại."
  }
}


// bài 5  
function tinhTongHaiKySo() {
  var so2KySo = getEle('#so2KySo').value;

   var soDonVi = so2KySo % 10;
   var soHangChuc = so2KySo / 10; 

   var sum = soDonVi + soHangChuc;

   if(!isNaN(so2KySo) && so2KySo >=0){
    getEle("#output5").textContent = "Tổng 2 ký số là : " + Math.floor(sum);
   }
   else {
    getEle("#output5").textContent = "Nhập không hợp lệ. Vui lòng kiểm tra lại.";
   }
}