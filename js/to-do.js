const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoNotList = document.querySelector(".js-toDoList_not"),
  toDoDoingList = document.querySelector(".js-toDoList_do"),
  toDoFinList = document.querySelector(".js-toDoList_fin");

const TODOS_LS_N = "NOT STARTED";
const TODOS_LS_D = "DOING";
const TODOS_LS_F = "COMPLETED";

let notToDos = [];
let toDos = [];
let finToDos = [];

// Move todo //
const moveDoingDList = (event) =>{
  const btn = event.target;
  const li = btn.parentNode;
  toDoNotList.removeChild(li);
  const moveToDos = notToDos.filter(function (toDo) {
    return toDo.id === parseInt(li.id);
  });
  const cleanToDos = notToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const currentValue = moveToDos[0].text;
  const currentId = moveToDos[0].id;
  paintDoingToDo(currentValue, currentId);
  notToDos = cleanToDos;
  saveToDos();
}
const moveDoingBList = (event) =>{
    const btn = event.target;
    const li = btn.parentNode;
    toDoFinList.removeChild(li);
    const moveToDos = finToDos.filter(function (toDo) {
      return toDo.id === parseInt(li.id);
    });
    const cleanToDos = finToDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    const currentValue = moveToDos[0].text;
    const currentId = moveToDos[0].id;
    paintDoingToDo(currentValue, currentId);
    finToDos = cleanToDos;
    saveFinToDos();
  }
const moveNotList = (event) => {
    const btn = event.target;
    const li = btn.parentNode;
    toDoDoingList.removeChild(li);
    const moveToDos = toDos.filter(function (toDo) {
      return toDo.id === parseInt(li.id);
    });
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    const currentValue = moveToDos[0].text;
    const currentId = moveToDos[0].id;
    paintNotStartToDo(currentValue, currentId);
    toDos = cleanToDos;
    saveDoingToDos();
  }
  
const moveFinList = (event) => {
  const btn = event.target;
  const li = btn.parentNode;
  toDoDoingList.removeChild(li);
  const moveToDos = toDos.filter(function (toDo) {
    return toDo.id === parseInt(li.id);
  });
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  const currentValue = moveToDos[0].text;
  const currentId = moveToDos[0].id;
  paintFinToDo(currentValue, currentId);
  toDos = cleanToDos;
  saveDoingToDos();
}

// Delete todo //
const deleteToDo = (e) => {
  const btn = e.target;
  const li = btn.parentNode;
  toDoNotList.removeChild(li);
  const cleanToDos = notToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  notToDos = cleanToDos;
  saveToDos();
}
const deleteFinToDo = (e) => {
  const btn = e.target;
  const li = btn.parentNode;
  toDoFinList.removeChild(li);
  const cleanToDos = finToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  finToDos = cleanToDos;
  saveFinToDos();
}
const deleteDoToDo = (e) => {
    const btn = e.target;
    const li = btn.parentNode;
    toDoDoingList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveDoingToDos();
  }

// Save todo at lacalStorage //
const saveToDos = () => {
  localStorage.setItem(TODOS_LS_N, JSON.stringify(notToDos));
}
const saveDoingToDos = () => {
    localStorage.setItem(TODOS_LS_D, JSON.stringify(toDos));
}
const saveFinToDos = () => {
  localStorage.setItem(TODOS_LS_F, JSON.stringify(finToDos));
}

// Display todo //
const paintNotStartToDo = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const newId = Math.floor(Math.random() * 1000000000);
  const span = document.createElement("span");
  delBtn.innerHTML = "❌";
  delBtn.className = "delete"
  backBtn.innerHTML = "😍";
  backBtn.className = "done"
  delBtn.addEventListener("click", deleteToDo);
  backBtn.addEventListener("click", moveDoingDList);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(backBtn);
  li.appendChild(delBtn);
  li.id = newId;
  toDoNotList.appendChild(li);
  const toDoObj = {
    text,
    id: newId
  };
  notToDos.push(toDoObj);
  saveToDos();
}
const paintDoingToDo = (text, id) => {
  const li = document.createElement("li");
  const backBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  delBtn.className = "delete"
  backBtn.innerHTML = "🤫";
  backBtn.className = "do"
  finBtn.innerHTML = "🥳";
  finBtn.className = "do"
  delBtn.addEventListener("click", deleteDoToDo);
  backBtn.addEventListener("click", moveNotList);
  finBtn.addEventListener("click", moveFinList);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(backBtn);
  li.appendChild(finBtn);
  li.appendChild(delBtn);
  li.id = id;
  toDoDoingList.appendChild(li);
  const toDoObj = {
    text,
    id
  };
  toDos.push(toDoObj);
  saveDoingToDos();
}
const paintFinToDo = (text, id) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const backBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerHTML = "❌";
    delBtn.className = "delete"
    backBtn.innerHTML = "🙄";
    backBtn.className = "done"
    delBtn.addEventListener("click", deleteFinToDo);
    backBtn.addEventListener("click", moveDoingBList);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(backBtn);
    li.appendChild(delBtn);
    li.id = id;
    toDoFinList.appendChild(li);
    const toDoObj = {
      text,
      id
    };
    finToDos.push(toDoObj);
    saveFinToDos();
  }

const handleSubmit = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintNotStartToDo(currentValue);
  toDoInput.value = "";
}

// load todo //
const loadToDos = () => {
  const loadedNotToDos = localStorage.getItem(TODOS_LS_N);
  const loadedDoingToDos = localStorage.getItem(TODOS_LS_D)
  const loadedFinToDos = localStorage.getItem(TODOS_LS_F);
  if (loadedNotToDos !== null) {
    const parsedToDos = JSON.parse(loadedNotToDos);
    parsedToDos.forEach(function (toDo) {
      paintNotStartToDo(toDo.text);
    });
  }

  if (loadedDoingToDos !== null) {
    const parsedToDos = JSON.parse(loadedDoingToDos);
    parsedToDos.forEach(function (toDo) {
      paintDoingToDo(toDo.text, toDo.id);
    });
  }
  if (loadedFinToDos !== null) {
    const parsedToDos = JSON.parse(loadedFinToDos);
    parsedToDos.forEach(function (toDo) {
      paintFinToDo(toDo.text, toDo.id);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
