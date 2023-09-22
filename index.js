window.onload = build;
            let output = document.getElementById("output")
            let myArr = ["Pramod","Ashutosh","Akash","mahaur"];
            let myButton = document.getElementById("addNew")
            myButton.addEventListener("click",()=>{
                let myName = document.getElementById("addFriend")
                if(myName.value=="" || !isNaN((myName.value))) alert("enter propre name")
                if(isNaN(myName.value) && myName.value!=="" ){
                    myArr.push(myName.value)
                    adder(myName.value,myArr.length,0)
                }
                console.log(myArr)
                myName.value = ""
            })
            function build(){
                myArr.forEach((item,index)=>{
                    adder(item,index,0)
                })
            }
            function adder(name,index,counter){
                let tr = document.createElement("tr")
                let td1 = document.createElement("td");
                td1.innerText = index+1;
                let td2 =document.createElement("td");
                td2.innerText = name;
                let td3 = document.createElement("td");
                td3.innerText = counter;
                let btn =document.createElement("td");
                btn.innerHTML = "<button>Voat</button>"
                tr.append(td1);
                tr.append(td2);
                tr.append(btn);
                tr.append(td3);
                btn.addEventListener("click",()=>{
                    let val = Number(tr.lastChild.textContent);
                    val++;
                    tr.lastChild.textContent = val
                })
                output.appendChild(tr)
            }