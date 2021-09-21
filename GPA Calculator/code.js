setScreen("HomeScreen");
onEvent("info", "click", function(event) {
  setScreen("xtraInfo");
});
onEvent("back", "click", function(event) {
  setScreen("HomeScreen");
});
onEvent("homeBad", "click", function(event) {
  setScreen("HomeScreen");
});
onEvent("homeGood", "click", function(event) {
  setScreen("HomeScreen");
});
onEvent("homeImprove", "click", function(event) {
  setScreen("HomeScreen");
});
onEvent("hti", "click", function(event) {
  setScreen("improvement");
});
onEvent("calculate", "click", function(event) {
  var la = getText("laInput");
  var math = getText("mathInput");
  var sci = getText("sciInput");
  var fl = getText("flaInput");
  var elec = getText("elecInput");
  var other = getText("otherInput");
  if (la == "A") {
    var la = 4;
  } else {
    if (la == "B") {
      var la = 3;
    } else {
      if (la == "C") {
        var la = 2;
      } else {
        if (la == "D") {
          var la = 1;
        } else {
          var la = 0;
        }
      }
    }
  }
  if (math == "A") {
    var math = 4;
  } else {
    if (math == "B") {
      var math = 3;
    } else {
      if (math == "C") {
        var math = 2;
      } else {
        if (math == "D") {
          var math = 1;
        } else {
          var math = 0;
        }
      }
    }
  }
  if (sci == "A") {
    var sci = 4;
  } else {
    if (sci == "B") {
      var sci = 3;
    } else {
      if (sci == "C") {
        var sci = 2;
      } else {
        if (sci == "D") {
          var sci = 1;
        } else {
          var sci = 0;
        }
      }
    }
  }
  if (fl == "A") {
    var fl = 4;
  } else {
    if (fl == "B") {
      var fl = 3;
    } else {
      if (fl == "C") {
        var fl = 2;
      } else {
        if (fl == "D") {
          var sci = 1;
        } else {
          var sci = 0;
        }
      }
    }
  }
  if (elec == "A") {
    var elec = 4;
  } else {
    if (elec == "B") {
      var elec = 3;
    } else {
      if (elec == "C") {
        var elec = 2;
      } else {
        if (elec == "D") {
          var elec = 1;
        } else {
          var elec = 0;
        }
      }
    }
  }
  if (other == "A") {
    var other = 4;
  } else {
    if (other == "B") {
      var other = 3;
    } else {
      if (other == "C") {
        var other = 2;
      } else {
        if (other == "D") {
          var other = 1;
        } else {
          var other = 0;
        }
      }
    }
  }
  var list = [la, math, sci, fl, elec, other];
  var overallGrade = la + (math + (sci + (fl + (elec + other))));
  var GPA = (la + (math + (sci + (fl + (elec + other))))) / 6;
  setText("GPA(1)", GPA);
  setText("GPA(2)", GPA);
  if (overallGrade >= 18) {
    setScreen("calculatedGradeGood");
  } else {
    setScreen("calculatedGradeBad");
  }
});
