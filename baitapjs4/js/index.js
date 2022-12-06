
// Xét 6 trường hợp
// sn1>=sn2>=sn3
// sn1>=sn3>=sn2
// sn2>=sn1>=sn3
// sn2>=sn3>=sn1
// sn3>=sn1>=sn2
// sn3>=sn2>=sn1

document.getElementById('ketqua').onclick=function(){
    var sn1=document.getElementById('sn1').value*1
    var sn2=document.getElementById('sn2').value*1
    var sn3=document.getElementById('sn3').value*1
    if(sn1>=sn2 && sn2>=sn3){
        document.getElementById('inRa').innerHTML= `${sn3} ${sn2} ${sn1}` 
    }else if(sn2>=sn1 && sn1>=sn3){
        document.getElementById('inRa').innerHTML= `${sn3} ${sn1} ${sn2}` 
    }else if(sn3>=sn1 && sn1>=sn2){
        document.getElementById('inRa').innerHTML= `${sn2} ${sn1} ${sn3}` 
    }else if(sn2>=sn3 && sn3>=sn1){
        document.getElementById('inRa').innerHTML= `${sn1} ${sn3} ${sn2}` 
    }else if(sn3>=sn2 && sn2>=sn1){
        document.getElementById('inRa').innerHTML= `${sn1} ${sn2} ${sn3}`
    }else{
        document.getElementById('inRa').innerHTML= `${sn2} ${sn3} ${sn1}`
    }  
}



// gán giá trị tv ='sring' rồi in ra màn hình
document.getElementById('aidangsudungmaytinh').onclick=function() {
    var tv = document.getElementById('tv').value;
   if(tv === 'b'|| tv=== 'B'|| tv === 'bố'|| tv === 'Bố'){
    document.getElementById('chao').innerHTML= `Chào buối sáng bố`
   }else if(tv === 'b'|| tv=== 'B'|| tv === 'bố'|| tv === 'Bố'){
    document.getElementById('chao').innerHTML= `Chào buối sáng bố`   

   }else if(tv === 'm'|| tv=== 'M'|| tv === 'mẹ'|| tv === 'Mẹ'){
    document.getElementById('chao').innerHTML= `Chào buối sáng mẹ`   

   }else if(tv === 'a'|| tv=== 'A'|| tv === 'anh'|| tv === 'Anh'){
    document.getElementById('chao').innerHTML= `Chào buối sáng anh trai`   

   }else if(tv === 'e'|| tv=== 'E'|| tv === 'em'|| tv === 'Em'){
    document.getElementById('chao').innerHTML= `Chào buối sáng em gái`
   }
}

// bai 3
document.getElementById('bnsochanle').onclick=function(){
    var s1=document.getElementById('s1').value*1
    var s2=document.getElementById('s2').value*1
    var s3=document.getElementById('s3').value*1
    if(s1>0&&s2>0&&s3>0){
        if(s1%2!=0 && s2%2!=0 && s3%2!=0 ){
            document.getElementById('chanle').innerHTML= `Có 3 số lẻ, 0 số chẵn`
        }else if((s1%2!=0 && s2%2!=0) || (s2%2!=0 && s3%2!=0) || (s1%2!=0 && s3%2!=0)){
            document.getElementById('chanle').innerHTML= `Có 2 số lẻ, 1 số chẵn`
        } else if(s1%2==0 && s2%2==0 && s3%2==0){
            document.getElementById('chanle').innerHTML= `Có 0 số lẻ,3 số chẵn`
        }else if((s1%2==0 && s2%2==0) || (s2%2==0 && s3%2==0) || (s1%2==0 && s3%2==0)){
            document.getElementById('chanle').innerHTML= `Có 1 số lẻ, 2 số chẵn`;
        }
    } else {
        document.getElementById('chanle').innerHTML= `nhap so nguyen hoc > 0`
    }
}

document.getElementById('xacdinhtamgiac').onclick=function(){
    var c1=document.getElementById('c1').value*1
    var c2=document.getElementById('c2').value*1
    var c3=document.getElementById('c3').value*1
    if((c1==c2)&&(c1==c3)&&(c2==c3)){
        document.getElementById('tamgiac').innerHTML= `Là tam giác đều`;
    }else if((c1==c2)||(c1==c3)||(c2==c3)){
        document.getElementById('tamgiac').innerHTML= `Là tam giác cân`;
    }else if((c1*c1==c2*c2+c3*c3)||(c2*c2==c1*c1+c3*c3)||(c3*c3==c2*c2+c1*c1)){
        document.getElementById('tamgiac').innerHTML= `Là tam giác vuông`;
    }else if (((c1*c1==c2*c2+c3*c3)&&c2==c3)||((c2*c2==c1*c1+c3*c3)&&c1==c3)||((c3*c3==c2*c2+c1*c1)&&c2==c1)){
        document.getElementById('tamgiac').innerHTML= `Là tam giác vuông cân`
    }else {
        document.getElementById('tamgiac').innerHTML= `Là tam giác thường`
    }
}
