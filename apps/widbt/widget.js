WIDGETS["bluetooth"]={area:"tr",width:15,draw:function() {
  g.reset();
  if (NRF.getSecurityStatus().connected) {
    if (g.getBgColor() === 31) { // If background color is blue use cyan instead
      g.setColor("#0ff");
    } else {
      g.setColor((g.getBPP()>8) ? "#07f" : (g.theme.dark ? "#0ff" : "#00f"));
    }
  } else {
    if (g.getBgColor() === g.toColor(1, 0, 0)) { // If background color is red use black instead
      g.setColor("#000");
    } else {
      g.setColor(g.theme.dark ? "#600" : "#900");
    }
  }
  g.drawImage(atob("CxQBBgDgFgJgR4jZMawfAcA4D4NYybEYIwTAsBwDAA=="),2+this.x,2+this.y);
},changed:function() {
  WIDGETS["bluetooth"].draw();
}};
NRF.on('connect',WIDGETS["bluetooth"].changed);
NRF.on('disconnect',WIDGETS["bluetooth"].changed);
