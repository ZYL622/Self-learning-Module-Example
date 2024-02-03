// define that use '$' or '\\(' to show inline equations 
MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
  },
  svg: {
    fontCache: "global",
  },
};

// define the functions in the step-by-step 

function var_change_hint(hint_num, hint_now) {
  if (hint_num == 1) {
    hint_1 = hint_now;
    return hint_1
  }
  if (hint_num == 2) {
    hint_2 = hint_now
  }
  if (hint_num == 3) {
    hint_3 = hint_now;
  }
  if (hint_num == 4) {
    hint_4 = hint_now
  }
  if (hint_num == 5) {
    hint_5 = hint_now
  }
}

function var_change_check(hint_num, hint_now) {
  if (hint_num == 1) {
    check_1 = hint_now;
    return check_1
  }
  if (hint_num == 2) {
    check_2 = hint_now
    return check_2
  }
  if (hint_num == 3) {
    check_3 = hint_now;
    return check_3
  }
  if (hint_num == 4) {
    check_4 = hint_now
    return check_4
  }
  if (hint_num == 5) {
    check_5 = hint_now
    return check_5
  }
  
}

var hint_1 = 0; var hint_2 = 0; var hint_3 = 0; var hint_4 = 0; var hint_5 = 0;
function hint_show(hint_num) {
  // show hints 
  var step_box = document.getElementById('step_'+hint_num);
  var hint_box = document.getElementById('s'+hint_num+'_hint');
  var hint_but = document.getElementById('but_'+hint_num+'_1');
  var hint_now = eval('hint_'+hint_num)
  
  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_hint(hint_num, hint_now));

}

var check_1 = 0; var check_2 = 0; var check_3 = 0; var check_4 = 0; var check_5 = 0;
function check_show(hint_num) {
  // show contents in check
  var step_box = document.getElementById('step_'+hint_num);
  var hint_box = document.getElementById('s'+hint_num+'_check');
  var hint_but = document.getElementById('but_'+hint_num+'_2');
  var hint_now = eval('check_'+hint_num)

  if (hint_now == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    hint_now = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    hint_now = 0;
  }
  console.log(var_change_check(hint_num, hint_now));

}

// show the contents for reference
var ref_2 = 0;
function refer_show(hint_num) {
  var hint_but = document.getElementById('but_'+hint_num+'_3');
  var hint_box = document.getElementById('s'+hint_num+'_refer');
  var step_box = document.getElementById('refer_'+hint_num);

  if (ref_2 == 0) {
    hint_box.style.display = 'block';
    hint_but.style.background = "rgb(18, 231, 29)";
    step_box.style.display = 'flex';
    ref_2 = 1;
  }

  else {
    hint_box.style.display = 'none';
    hint_but.style.background = "none";
    ref_2 = 0;
  }
}

// define the function that to show or hide solution 

var ans_display = 0;
function ans_show() {
  var sBox = document.getElementById('box')
  var ans = document.getElementById('ans')
  var bu_clo = document.getElementById("ans_but")
  if(ans_display == 0)
    {
      ans.style.display = 'block';
      ans_display = 1;
      bu_clo.style.background = "rgb(18, 231, 29)";

    }
  else
    {
      ans.style.display = 'none';
      ans_display = 0;
      bu_clo.style.background = "lightskyblue";
    }
  if (ans_display + sol_display == 0)
    {
      sBox.style.display = 'none';
    }
  else 
    {
      sBox.style.display = 'flex';
    }
}

var sol_display = 0;
function sol_show() {
  var sBox = document.getElementById('box')
  var sol = document.getElementById('full_ans')
  var bu_clo = document.getElementById("sol_but")
  if(sol_display == 0)
    {
        sol.style.display = 'block';
        bu_clo.style.background = "rgb(18, 231, 29)";
        sol_display = 1;

    }
  else
    {
        sol.style.display = 'none';
        bu_clo.style.background = "lightskyblue";
        sol_display = 0;
    }
  if (ans_display+sol_display ==0)
  {
    sBox.style.display = 'none';
  }
else 
  {
    sBox.style.display = 'flex';
  }
}

var showDraw = 1;
function draw() {
  var drw = document.getElementById('visual')
  var bu_clo = document.getElementById("drw_but")
  if(showDraw == 0)
    {
        drw.style.display = 'flex';
        bu_clo.style.background = "lightskyblue";
        showDraw = 1;
    }
  else
    {
        drw.style.display = 'none';
        bu_clo.style.background = "rgb(18, 231, 29)";
        showDraw = 0;
    }

}

