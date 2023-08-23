function checkCashRegister(price, cash, cid) {
    let change_needed = cash - price;
    let change_arr = [];
    let ret_dict = {
      status : "",
      change : [],
    }
    const currency = {
      PENNY : 0.01,
      NICKEL : 0.05,
      DIME : 0.1,
      QUARTER : 0.25,
      ONE : 1,
      FIVE : 5,
      TEN : 10,
      TWENTY : 20,
      "ONE HUNDRED" : 100
    }
    // If we compare changed needed and total cash, we can first search two cases:
    // whether we have exact amount of cash or if we don't have enough cash
    let cash_total = 0;
    for(let element of cid) {
      cash_total += element[1];
    }
    if(cash_total === change_needed) {
      ret_dict.status = "CLOSED";
      ret_dict.change = cid;
      return ret_dict;
    } else if(cash_total < change_needed) {
      ret_dict.status = "INSUFFICIENT_FUNDS";
      return ret_dict;
    }
    // Iterate through array cid, and find out if returning exact change is possible
    for (let i = 0; i < cid.length; i++) {
      change_needed = Math.round(change_needed * 100)  / 100;
      let currency_using = currency[cid[cid.length - 1 -i][0]]
      let bool1 = (change_needed >= currency_using);
      if(bool1) {
        let cnt = 0;
        while((cid[cid.length - 1 -i][1] > 0) && (change_needed >= currency_using)) {
          change_needed -= currency_using;
          cid[cid.length - 1 - i][1] -= currency_using;
          cnt++;
          change_needed = Math.round(change_needed * 100)  / 100;
        }
        change_arr.push([cid[cid.length - 1 - i][0], currency_using * cnt]);
      }
    }
    // If we don't have exact change, we return "INSUFFICIENT_FUNDS"
    if(change_needed !== 0) {
      ret_dict.status = "INSUFFICIENT_FUNDS";
      return ret_dict;
    }
    ret_dict.status = "OPEN";
    ret_dict.change = change_arr;
    return ret_dict;
  }
  
  // checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);