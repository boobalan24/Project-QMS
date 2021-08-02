"use strict";

const project_opt = document.querySelector("#project");
const msg = document.querySelector(".cr-msg");
const clbl = document.querySelector(".msg-char-lbl");
const ntpc_yes = document.querySelector("#ntpc-yes");
const ntpc_no = document.querySelector("#ntpc-no");
const txtChp = document.querySelector(".ntpc-chp");
const ai_yes = document.querySelector("#ai-yes");
const ai_no = document.querySelector("#ai-no");
const des_msg = document.querySelector(".des-msg");
const des_lbl = document.querySelector(".des-char-lbl");
const toDate = document.querySelector("#date-to");
const fromDate = document.querySelector("#date-from");
const insDay = document.querySelector("#noofdays");
const manday = document.querySelector("#manday");
const manmonth = document.querySelector("#manmonth");
const chp_bx = document.querySelector(".chp-bx");
const other_pj = document.querySelector(".other-pj");

document.body.addEventListener("change", function (e) {
  let target = e.target;

  switch (target.id) {
    case "ntpc-yes":
      chp_bx.classList.remove("chp-bx");
      break;
    case "ntpc-no":
      chp_bx.classList.add("chp-bx");
      break;
  }
});

project_opt.addEventListener("change", function () {
  if (project_opt.value === "other-pj") {
    other_pj.classList.remove("other-pj");
    document.querySelector('input[name="ai"]:checked').checked = false;
  } else if (project_opt.value === "vanphong") {
    other_pj.classList.add("other-pj");
    other_pj.style.backgroundColor = "rgb(247,247,247)";
    ai_no.checked = "true";
  } else {
    other_pj.classList.add("other-pj");
    other_pj.style.backgroundColor = "rgb(247,247,247)";
    ai_yes.checked = "false";
  }
});

const totalChar = function (value, char) {
  const total = value;
  let availableChar;
  availableChar = total - char;
  return availableChar;
};

msg.addEventListener("keyup", function () {
  let char = msg.value.length;
  let availableChar = totalChar(280, char);
  clbl.innerText = `(${availableChar} Characters Available)`;
});
des_msg.addEventListener("keyup", function () {
  let char = des_msg.value.length;
  let availableChar = totalChar(180, char);
  des_lbl.innerText = `(${availableChar} Characters Available)`;
});

toDate.addEventListener("change", function () {
  const fm = new Date(fromDate.value);
  const to = new Date(toDate.value);
  const nDay = (to.getTime() - fm.getTime()) / (1000 * 3600 * 24) + 1;
  if (nDay <= 10) {
    manday.checked = true;
  } else {
    manmonth.checked = true;
  }
  insDay.value = `${nDay} Day(s) Inspection`;
});
