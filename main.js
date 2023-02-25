// create the cross icon
let iconList = document.getElementsByTagName("li");

for (let i = 0; i < iconList.length; i++) {
  let spanTag = document.createElement("span");
  let iconInSpan = document.createTextNode("\u00D7");
  spanTag.className = "cross";
  spanTag.appendChild(iconInSpan);
  iconList[i].appendChild(spanTag);
  iconList[i].onclick = function () {
    iconList[i].contentEditable = true;
  }
}

// remove on click

let crossBtn = document.getElementsByClassName("cross");
for (let j = 0; j < crossBtn.length; j++) {
  crossBtn[j].onclick = function () {
    let removeItem = this.parentElement;
    removeItem.remove();
    // console.log(removeItem);
  };
}

let addNewList = () => {
  //  Addition List
  let mainList = document.getElementById("todoList");
  let creatLi = document.createElement("li");
  var inputData = document.getElementById("input-data").value;
  let creatNode = document.createTextNode(inputData);
  creatLi.appendChild(creatNode);
  mainList.appendChild(creatLi);
  
  // UPDATE FUNCTION
  mainList.onclick = function () {
    creatLi.contentEditable = true;
  };

  // Empty The Input Vlaue After Adding a Value in List

  document.getElementById("input-data").value = "";

  // Adding cross Icon

  let spanTag = document.createElement("span");
  let iconInSpan = document.createTextNode("\u00D7");
  spanTag.className = "cross";
  spanTag.appendChild(iconInSpan);
  creatLi.appendChild(spanTag);

  // Now removing "Li"  by clicking

  for (let k = 0; k < crossBtn.length; k++) {
    crossBtn[k].onclick = function () {
      let removeItem = this.parentElement;
      removeItem.remove();
      // console.log(removeItem);
    };
  }
};
